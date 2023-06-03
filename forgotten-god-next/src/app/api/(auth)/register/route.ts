import { NextRequest, NextResponse } from 'next/server';

 
export async function POST(request: NextRequest) {
   /*  https://forgotten-god.onrender.com */
   const reqBody = await request.json()
   
    const res = await fetch(
        `${process.env.HOST_DOMAIN}/auth/register`,
        {
            body: JSON.stringify(reqBody),
            method: 'POST', 
            credentials: "include"
        }
    );
  const headers = new Headers(res.headers)
  const loginResult = await res.json();
 
  return NextResponse.json(loginResult, { headers: headers,})
}