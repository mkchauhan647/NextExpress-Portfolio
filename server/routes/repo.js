const router = require('express').Router();
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const axios = require('axios');

router.get('/', async (req, res) => {
    let repos = [];
    console.log("This is env", process.env.GITHUB_USERNAME);
    
    const repoFilePath = path.join(process.cwd(), 'public', 'repo.json');

    if (!fs.existsSync(repoFilePath)) {
        try {
            const response = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`);
            const data = response.data;
            console.log("Fetched from GitHub:", data);

            fs.writeFileSync(repoFilePath, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error fetching from GitHub:', error);
            return res.status(500).send('Error fetching data from GitHub');
        }
    }

    try {
        const fileData = fs.readFileSync(repoFilePath, 'utf-8');
        const reposData = JSON.parse(fileData);

        for (let i = 0; i < reposData.length; i++) {
            try {
                const repoResponse = await axios.get(`https://api.github.com/repos/${reposData[i].owner.login}/${reposData[i].name}`);
                const repoData = repoResponse.data;
                repos.push(repoData);
            } catch (error) {
                console.error(`Error fetching repo data for ${reposData[i].name}:`, error);
            }
        }

        console.log('Number of repos:', repos.length);
        res.json({ data: repos });
    } catch (error) {
        console.error('Error reading repo.json:', error);
        res.status(500).send('Error reading repo.json');
    }
});

module.exports = router;
