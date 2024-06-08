// 'use client'
import Home from '@/components/Home'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import Delay from '@/components/Delay';

async function fetchDatas() {
  
  const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
    await delay(1000);
    // return;
    
} 


export default async function HomePage() {


  // await fetchDatas();



  return (
    <div className=''>
      {/* <Delay/> */}
      <Home />
      {/* <h1>Home Page</h1> */}
      {/* <p>Welcome to the home page!</p> */}
      {/* <Sidebar /> */}

    </div>
  );
}