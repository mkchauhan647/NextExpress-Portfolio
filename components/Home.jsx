"use client";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Delay from './Delay'
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import Loading from "@/app/loading";

// async function fetchDatas() {
  
//   const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
//   await delay(2000);
//   return;    
// }



// await fetchDatas();
export default function Home() {
  const [clamp, setClamp] = useState(true);
  const [repos, setRepos] = useState([]); 
  const [showDescription, setShowDescription] = useState({});
  useEffect( () => {
    const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
    async function fetchData() {
      
      try {
        const response = await axios.get('/data.json');
        // await delay(2000);
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

  // if (repos.length == 0) {
  //   return (
  //     <div className=" flex flex-col justify-center items-center -mt-10 -ml-10 h-screen gap-2">
  //         <h1 className="text-xl px-4">Loading...</h1>
  //       <div className="flex justify-center items-center gap-4">
  //       <div className="  loading-animation"/>
  //         <div className="  loading-animation"/>
  //         <div className="  loading-animation"/>
  //         </div>
  //     </div>
  //   )
  // }


  return (
    <>
      {/* <div className=" flex flex-col ">
        <Navbar />
        <div className="flex justify-between m-4 p-4 gap-4 ">
          <Sidebar />
          <Main />
        </div>
      </div> */}
      
      <div className="">
      <div className=" flex justify-between  px-32 md:px-4 py-8">
        <div className="py-8 flex  gap-4 flex-wrap md:mx-4">
          <Link className=" hover:shadow-md transition-all duration-1000 hover:p-2 " href="/cv.pdf">
            Download CV
        </Link>
        <Link className=" hover:shadow-md transition-all duration-300 px-4 md:px-0  ml-4 hover:scale-105" href="/about">About</Link>
        </div>
        <div className="flex justify-around  gap-6 py-8">
          
          <Link className=" hover:shadow-md transition-all duration-1000 hover:p-2" href="https://linkedin.com/in/mkchauhan" target="_blank">
            
          <RiLinkedinLine size={24}/>
        </Link>
            
          <Link className="hover:shadow-md transition-all duration-1000 hover:p-2" href="https://github.com/mkchauhan647" target="_blank">
            
          <VscGithubAlt size={24}/>
            </Link>
        </div>
      </div>

      <div className="relative h-screen md:h-auto flex flex-col pt-8  gap-11">
      <section className="py-4 flex justify-center items-center w-full mx-auto">
        <div className="flex flex-col justify-center items-center  gap-4 w-[40%] md:w-full">
          {/* <h1 className=" text-center font-bold text-5xl text-balance">
            Welcome to My Portfolio
          </h1> */}
            <h1 className="text-center text-5xl font-bold text-gray-800 animation-test hover:cursor-pointer">Welcome to My Portfolio</h1>
            
          <p
            className="text-center md:w-96  md:px-10 transition-all duration-1000 hover:scale-105 hover:cursor-pointer"
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
        <button className="border border-solid  p-3 rounded-md md:px-4 bg-slate-900 text-white transition-all hover:scale-105 duration-700" >
          <Link href="https://github.com/mkchauhan647" target="_blank"  >
            Check Out Github &rarr;
          </Link>
        </button>
        <button className="border border-solid p-3 rounded-md bg-slate-100 transition-all duration-700 hover:scale-105 hover:shadow-md">
          <Link href="https://linkedin.com/in/mkchauhan" target="_blank">
            Check Out LinkedIn
          </Link>
        </button>
        </section>
        {/* <div className="flex justify-center items-center flex-col"> */}
        <button className="absolute bottom-56 md:hidden left-0 right-0 mx-auto w-1/3 py-2 px-4 bg-gradient-to-r from-purple-400  via-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-1000">Explore The Projects</button>
        <button onClick={()=> document.getElementById('repo').scrollIntoView()} className="absolute bottom-48 md:bottom-[129px] left-0 right-0 mx-auto w-10 h-10 bg-white text-center text-2xl leading-10 text-purple-500 font-bold rounded-full shadow-lg animate-bounce">↓</button>

        {/* </div> */}
        
      </div>

      {/* <Suspense fallback={<Loading />}>
        <Delay/> */}
      { repos.length !== 0 ? 
        
        <section id='repo' className=" py-6 mb-12  flex flex-col justify-center items-center gap-16 cursor-pointer">
          {
            repos && repos.map((repo, index) => {
              return (
                <div key={index} className="flex flex-col w-[80%] ml-10 md:mx-auto md:w-full gap-4 shadow-md rounded-md justify-center items-center">
                  <div className=" flex justify-center md:justify-center md:items-center md:flex-col">
                    <img src={repo?.image_url ? repo.image_url : "/"} className=" animation-test w-[55%] h-[75%] md:w-full md:h-full rounded-md border  shadow-md object-cover " />
                
                    <div className="mt-12 text-center ">
                      <h1 className="text-2xl font-bold">{repo.name}</h1>
                      {/* <hr className=" text-black"/> */}
                      <br />
                      <div className=" flex gap-2 flex-wrap justify-center animation-test m-4">


                        {
                          repo.info?.map((info, infoIndex) => {
                            return (
                              <button key={infoIndex} className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">{info}</button>
                            )
                          })
                        }


                        {/* <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">NextJS</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">ReactJS</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">NodeJS</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">JavaScript</button>
                    <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">TypeScript</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">Firebase</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">HTML5</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">CSS3</button>
                      <button className=" bg-slate-100  px-4 py-1 shadow-md border border-solid">Tailwind CSS</button>
                       */}
                      
                   
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end p-2 m-2 gap-4 md:flex-col">
                    <button className="bg-slate-200 border border-slate-500 rounded-md border-solid p-2 shadow-md animation-test">
                      <Link href={repo.vercel_url} target="_blank">Check Out Demo</Link></button>
                    <button className="bg-black border border-solid text-white p-2 rounded-md shadow-md animation-test">
                      <Link href={repo.repo_url} target="_blank">Check Out Github&rarr;</Link></button>
                  </div>
                </div>
              )
            })
          }
        </section>
        // </Suspense>
        : <Loading/>
      }

      </div>  
        

    </>
  );
}
