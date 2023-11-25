import { cookies } from "next/dist/client/components/headers";


export async function getUserInfo() {
    try {
        const refreshCookie = cookies().get("refresh-fg-cookie");
        if(!refreshCookie?.value){
            console.log(cookies())
            return null
        }
        const refreshAccess = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, { method: "POST", credentials: "include", headers: {
            Authorization: `Bearer ${refreshCookie.value}`
        }})
        /* console.log(new Headers(refreshAccess.headers) ) */
        const response = await fetch(`${process.env.HOST_DOMAIN}/auth/getUser`, { credentials: "include", headers: {
            cookie: refreshAccess.headers.get("set-cookie")
        }})
        /* const refreshCookie = cookies().get("refresh-fg-cookie")
        const response = await fetch(`${process.env.CURRENT_DOMAIN}/api/getUser`, {method: "GET", credentials: "include", headers: {
            cookie : `${refreshCookie.name}=${refreshCookie.value}`
        }
        }) */
        
        if (!response.ok){
            
          return null
        }
            
        const userData = await response.json()
        return userData
    }
    catch(error){
        return {error: "Server Error"}
    }
    
}