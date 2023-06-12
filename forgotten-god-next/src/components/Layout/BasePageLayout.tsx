
import { cookies, headers } from "next/dist/client/components/headers";
import Header from "../Header/Header"
import UserPreloader from "../UserPreloader/UserPreloader"

import { ColoredAlignedFlexMain } from "./styles"



export async function getUser() {
    try {
        /* const refreshAccess = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include", headers: headers()})
        console.log("da", refreshAccess.headers.get('set-cookie') )
        const response = await fetch(`${process.env.HOST_DOMAIN}/auth/getUser`, { credentials: "include", headers: refreshAccess.headers}) */
        //https://forgotten-god.vercel.app
        /* const response = await fetch(`${"http://localhost:3000"}/api/getUser`, {method: "GET", credentials: "include"}) */

        
        /* if (!response.ok){
          return null
        }
            
        const userData = await response.json() 
        return userData */
    }
    catch(error){
        throw error
    }
}


const BasePageLayout = async ({ children }) => {
    
    const userInfo = await getUser()
    return(
        <>
            <UserPreloader /* userInfo={userInfo} *//>
            <Header/>
            <ColoredAlignedFlexMain>
                {children}
            </ColoredAlignedFlexMain>
        </>
       
    )
}

export default BasePageLayout