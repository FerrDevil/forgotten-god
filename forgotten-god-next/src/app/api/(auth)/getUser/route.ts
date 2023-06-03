import { cookies } from 'next/dist/client/components/headers';
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'
 
export async function GET(request : NextRequest) {
    const refreshUserCookies = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include", headers: {
      cookie : new Headers(request.headers).get("cookie")
    }})
    
    if (!refreshUserCookies.ok){
      return NextResponse.json({user: "UNAUTHORIZED"}, { status: 401})
    }
    const headers = new Headers(refreshUserCookies.headers)
    const res = await fetch(
        `${process.env.HOST_DOMAIN}/auth/getUser`,
        {
            credentials: "include",
            headers: {
              cookie : headers.get("set-cookie")
            }
        }
    );
    console.log(res)
    const userInfo = await res.json();
 
  return NextResponse.json(userInfo, { headers: res.headers})
}