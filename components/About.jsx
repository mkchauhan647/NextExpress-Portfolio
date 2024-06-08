import React from 'react';
// import type { Metadata } from "next";
import Head from 'next/head';
export default function About() {
  return (
      <>
        
      <div className="relative grid grid-cols-1 ml-24 md:place-items-center md:mx-auto">
        <header className="flex flex-col justify-center py-8 gap-4 animate-fadeInn">
          <h2 className="text-2xl font-semibold cone after:content-[''] after:mt-2 after:block after:w-full after:h-[1px] after:bg-slate-300 pt-4">
                      About Me
          </h2>
                     <span>Return to <a href='/'>Home &uarr;</a></span>
          <p className="text-md">A brief introduction about myself</p>
        </header>

        <section
          id="biography"
          className="flex justify-center items-center gap-16 md:flex-col py-8 animate-slideInLeftt"
        >
          <img
            src="profile.jpg"
            alt="Profile Picture"
            className="w-56 h-56 object-cover rounded-full shadow-lg transform transition duration-500 hover:scale-105 -ml-8"
          />
          <p className="text-center md:text-left md:w-full mx-auto">
            Hello! My name is <span className="font-bold">Manoj Kumar Chauhan</span> and I am currently a Computer Science student at Purwanchal Campus, IOE Tribhuwan University.
            <br />
            I have a passion for solving complex problems and building innovative solutions. I am a dedicated Full Stack Developer with over 3+ years of experience in the Web Development field. I have honed my skills in NodeJs, ExpressJS, NextJs, ReactJS, JavaScript, TypeScript, DSA in JavaScript, etc...
          </p>
        </section>

        <h2 className="text-2xl font-semibold cone after:content-[''] after:mt-2 after:block after:w-full after:h-[1px] after:bg-slate-300 pt-4 animate-fadeInn">
          Education
        </h2>
        <section
          id="education"
          className="relative py-8 flex justify-center items-start flex-col gap-4 animate-slideInRightt"
        >
          <div className="flex flex-col gap-4">
            <div className="education-item">
              <h3 className="text-xl font-semibold">Bachelor's Degree In Computer Engineering</h3>
              <p>Tribhuwan University Purwanchal Campus, IOE, March 2024</p>
            </div>
            <div className="education-item">
              <h3 className="text-xl font-semibold">+2 College</h3>
              <p>Paradise Campus, 2017</p>
            </div>
          </div>
        </section>

        <h2 className="text-2xl font-semibold cone after:content-[''] after:mt-2 after:block after:w-full after:h-[1px] after:bg-slate-300 py-4 animate-fadeInn">
          Skills
        </h2>
        <section id="skills" className="w-full flex flex-col items-start animate-slideInLeftt">
          <ul>
            <li className="text-lg font-semibold py-2">Technical Skills</li>
            <ul className="list-inside list-disc ml-8 flex gap-4 py-4 md:flex-col">
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
            <li className="text-lg font-semibold py-2">Soft Skills</li>
            <ul className="list-inside flex gap-4 list-disc ml-8 py-4 md:flex-col">
              <li>Leadership</li>
              <li>Communication</li>
              <li>Problem-solving</li>
            </ul>
          </ul>
        </section>

        <h2 className="text-2xl font-semibold cone after:content-[''] after:block after:mt-2 after:w-full after:h-[1px] after:bg-slate-300 pt-4 animate-fadeInn">
          Professional Experience
        </h2>
        <section id="experience" className="py-4 animate-slideInRightt">
          <div className="experience-item">
            <div className="flex ml-1 flex-col justify-between py-4">
              <div>
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <p className="text-sm">Hamlethub LLC</p>
              </div>
              <div className="text-sm">
                Ridgefield, CT, United States <br /> Jan 2024 - March 2024
              </div>
            </div>
            <ul className="list-outside ml-8 list-disc">
              <li>Collaborated with a dynamic team to enhance various functionalities of HamletHub.com, increasing user engagement by 15% on a platform reaching 200k users.</li>
              <li>Developed automation scripts using Node.js and AWS Lambda, reducing manual work by 30%.</li>
              <li>Integrated TensorFlow models into existing applications to provide predictive story generator from email/newsletters.</li>
            </ul>
          </div>
        </section>

        <h2 className="text-2xl font-semibold cone after:content-[''] after:mt-2 after:block after:w-full after:h-[1px] after:bg-slate-300 py-4 animate-fadeInn">
          Key Projects
        </h2>
        <section id="projects" className="py-4 space-y-4 animate-slideInLeftt">
          <div className="project-item">
            <h3 className="text-xl font-semibold py-2">Nepali Speech Recognition</h3>
            <ul className="list-outside ml-8 list-disc">
              <li>Designed and deployed a Nepali Speech Recognition model using Python and TensorFlow with accuracy of 80% and 20% WER (Word Error Rate). The model is trained efficiently on Google Colab Pro and Kaggle Environment.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3 className="text-xl font-semibold py-2">Fundraiser Recommendation</h3>
            <ul className="list-outside ml-8 list-disc">
              <li>Developed the frontend using Next.js and TailwindCSS, ensuring a responsive and user-friendly interface. Integrated Firebase for backend services and utilized content-based filtering for personalized recommendations. Explore the project at Live</li>
            </ul>
          </div>
        </section>

        <h2 className="text-2xl font-semibold cone after:content-[''] after:mt-2 after:block after:w-full after:h-[1px] after:bg-slate-300 pt-4 animate-fadeInn">
          Get In Touch
        </h2>
        <section id="contact" className="py-4 animate-slideInRightt">
          <form action="/send-mail" method="POST" className="flex flex-col justify-center w-3/4 md:w-full mx-auto py-8 gap-8">
            <div className="flex justify-center gap-9">
              <label>Name:</label>
              <input type="text" className="border border-slate-400 w-full rounded-md p-1" placeholder="Enter Your Name"></input>
            </div>
            <div className="flex justify-center gap-10">
              <label>Email:</label>
              <input type="text" className="border border-slate-400 w-full rounded-md p-1" placeholder="Enter Your Email (e.g example@gmail.com)"></input>
            </div>
            <div className="flex gap-4">
              <label>Message:</label>
              <textarea className="border border-slate-500 w-full rounded-md px-2 pb-16 pt-2" placeholder="Enter Your message here:"></textarea>
            </div>
            <button type="submit" className="self-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </section>

        <footer className="flex md:flex-col gap-4 md:w-full justify-around p-4 bg-gray-800 text-white animate-fadeInn">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Follow me on:</p>
            <ul className="flex gap-2">
              <li>
                <a href="[LinkedIn URL]" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
              </li>
              <li>
                <a href="[GitHub URL]" className="hover:text-gray-400 transition duration-300">GitHub</a>
              </li>
              <li>
                <a href="[Twitter URL]" className="hover:text-blue-400 transition duration-300">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col">
            <p className="text-xl">Contact Information:</p>
            <div className="flex flex-wrap gap-4">
              <p>Email: <a href="mailto:mkchauhan647@gmail.com" className="hover:text-gray-400 transition duration-300">mkchauhan647@gmail.com</a></p>
              <p>Phone: (977)980-7721121</p>
              <p>Address: Rajbiraj, Saptari, Nepal</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
