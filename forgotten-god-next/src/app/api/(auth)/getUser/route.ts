import { cookies } from 'next/dist/client/components/headers';
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'
 
export async function GET(request : NextRequest) {
    const refreshUserCookies = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include", headers: request.headers})
    console.log("da", request.headers)
    if (!refreshUserCookies.ok){
      return NextResponse.json({user: "UNAUTHORIZED"}, { status: 401})
    }
    const headers = new Headers(refreshUserCookies.headers)
    const res = await fetch(
        `${process.env.HOST_DOMAIN}/auth/getUser`,
        {
            credentials: "include",
            headers: headers
        }
    );
    const userInfo = await res.json();
 
  return NextResponse.json(userInfo, { headers: res.headers})
}