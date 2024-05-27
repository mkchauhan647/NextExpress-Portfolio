import { NextRequest, NextResponse } from "next/server";

export default async function GET(req:NextRequest,res:NextResponse){

    const data = await fetch("https://devi-virid.vercel.app/");

    
    // console.log(data.json())


    return new Response(JSON.stringify({message:await data.json()}),{status:200});


}