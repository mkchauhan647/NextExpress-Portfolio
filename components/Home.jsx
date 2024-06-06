"use client";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
export default function Home() {
  const [clamp, setClamp] = useState(true);
  const [repos, setRepos] = useState([]); 

  
  
  const [showDescription, setShowDescription] = useState({});
  useEffect(() => {
   async function  fetchData(){
      try {
        const response = await axios.get('/data.json');
        const data = response.data;
        console.log(data);
        setRepos(data);
      }
      catch (err) {
        console.log("Error fetching repos ", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* <div className=" flex flex-col ">
        <Navbar />
        <div className="flex justify-between m-4 p-4 gap-4 ">
          <Sidebar />
          <Main />
        </div>
      </div> */}

      <div className=" flex justify-between  px-4 py-8">
        <div className="py-8 flex  gap-4 flex-wrap md:mx-4">
          <Link href="/cv.pdf">
            Download CV
        </Link>
        <Link href="/about">About</Link>
        </div>
        <div className="flex justify-around  gap-6 py-8">
          
          <Link href="https://linkedin.com/mkchauhan" target="_blank">
            
          <RiLinkedinLine size={24}/>
        </Link>
            
          <Link href="https://github.com/mkchauhan647" target="_blank">
            
          <VscGithubAlt size={24}/>
            </Link>
        </div>
      </div>

      <div className="relative h-screen md:h-auto flex flex-col pt-8  mr-2 gap-11 md:mr-auto">
      <section className="py-4 flex justify-center items-center w-full mx-auto">
        <div className="flex flex-col justify-center items-center  gap-4 w-[40%] md:w-full">
          {/* <h1 className=" text-center font-bold text-5xl text-balance">
            Welcome to My Portfolio
          </h1> */}
            <h1 className="text-center text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            
          <p
            className="text-center md:w-96  md:px-10 "
            onClick={() => setClamp((prevState) => !prevState)}
          >
            Hi there! I'm 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-slate-600 ml-1 text-xl">
               Manoj Kumar Chauhan
            </span>
            , a passionate Full Stack Developer with a knack for crafting
            dynamic and responsive web applications. With a solid foundation in
            both front-end and back-end technologies.
            {/* I specialize in creating seamless and engaging user experiences.
  Whether it's building robust server-side logic or designing
  intuitive user interfaces, my goal is to deliver high-quality
  solutions that meet your unique needs. Explore my projects, learn
  more about my skills, and see how I can bring your ideas to life! */}
          </p>
        </div>
      </section>

      <section className="justify-center flex gap-6 md:gap-4 md:flex-col md:items-center">
        <button className="border border-solid  p-3 rounded-md md:px-4 bg-slate-900 text-white">
          <Link href="https://github.com/mkchauhan647" target="blank">
            Check Out Github &rarr;
          </Link>
        </button>
        <button className="border border-solid p-3 rounded-md bg-slate-100">
          <Link href="https://linkedin.com/mkchauhan" target="blank">
            Check Out LinkedIn
          </Link>
        </button>
        </section>
        {/* <div className="flex justify-center items-center flex-col"> */}
        <button className="absolute bottom-56 md:hidden left-0 right-0 mx-auto w-1/3 py-2 px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">Explore The Projects</button>
        <button onClick={()=> document.getElementById('repo').scrollIntoView()} className="absolute bottom-48 md:bottom-[129px] left-0 right-0 mx-auto w-10 h-10 bg-white text-center text-2xl leading-10 text-purple-500 font-bold rounded-full shadow-lg animate-bounce">↓</button>

        {/* </div> */}
        
      </div>

      <section id='repo' className="py-4 flex flex-col justify-center items-center gap-16">
        {
          repos && repos.map((repo, index) => {
            return (
              <div className="flex flex-col p-8 gap-4 shadow-md rounded-md justify-center items-center">
                <div className=" flex justify-around md:justify-center md:items-center md:flex-col">
                <img src={repo?.image_url ? repo.image_url : "/"} className=" w-[60%] h-[75%] md:w-full md:h-full rounded-md border border-solid shadow-md" />
                
                <div className="mt-12 text-center ">
                    <h1 className="text-2xl font-bold">{repo.name}</h1>
                    {/* <hr className=" text-black"/> */}
                  <br />
                    <div className=" flex gap-2 flex-wrap justify-center">
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">NextJS</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">ReactJS</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">NodeJS</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">JavaScript</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">TypeScript</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">Firebase</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">HTML5</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">CSS3</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">Tailwind CSS</button>
                      
                      
                    {/* <button className=" bg-slate-100 rounded-md p-2 border border-solid">ReactJS</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-100">NodeJS</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-100">JavaScript</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-100">TypeScript</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-100">Firebase</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-500">HTML5</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-500">CSS3</button>
                    <button className=" bg-slate-100 rounded-md p-2 border border-solid border-slate-500">Tailwind CSS</button> */}
                  </div>
                </div>
                </div>
                  
                <div className="flex justify-end p-2 m-2 gap-4 md:flex-col">
                <button className="bg-slate-200 border border-slate-500 rounded-md border-solid p-2 shadow-md">Check out Demo</button>
                <button className="bg-black border border-solid text-white p-2 rounded-md shadow-md">Check out Github &rarr;</button>
               </div>
              </div>
            )
          })
        }
      </section>


    </>
  );
}
