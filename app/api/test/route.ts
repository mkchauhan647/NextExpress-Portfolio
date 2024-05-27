import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse){

    const data = await fetch("https://devi-virid.vercel.app/");

    
    // console.log(await data.json())
    // console.log(await data.text())

    const message = await data.text();
    return new Response(JSON.stringify({message:message}),{status:200});


}