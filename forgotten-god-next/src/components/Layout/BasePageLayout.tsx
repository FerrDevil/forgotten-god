
import { headers } from "next/dist/client/components/headers";
import Header from "../Header/Header"
import UserPreloader from "../UserPreloader/UserPreloader"

import { ColoredAlignedFlexMain } from "./styles"



export async function getUser() {
    try {
        /* const refreshCookie = cookies().get("refresh-fg-cookie");
        if(!refreshCookie?.value){
            return null
        }
        const refreshAccess = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include", headers: {
            Authorization: `Bearer ${refreshCookie.value}`
        }})
        console.log(new Headers(refreshAccess.headers) )
        const response = await fetch(`${process.env.HOST_DOMAIN}/auth/getUser`, { credentials: "include", headers: {
            cookie: refreshAccess.headers.get("set-cookie")
        }}) */

        const response = await fetch(`${process.env.CURRENT_DOMAIN}/api/getUser`, {method: "GET", credentials: "include", headers: headers()})
        
        if (!response.ok){
          return null
        }
            
        const userData = await response.json()
        return userData
    }
    catch(error){
        throw error
    }
}


const BasePageLayout = async ({ children }) => {
    
    const userInfo = await getUser()
    return(
        <>
            <UserPreloader userInfo={userInfo}/>
            <Header/>
            <ColoredAlignedFlexMain>
                {children}
            </ColoredAlignedFlexMain>
        </>
       
    )
}

export default BasePageLayout