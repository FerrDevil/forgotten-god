
import Header from "../Header/Header.jsx"
import UserPreloader from "../UserPreloader/UserPreloader.tsx"
import { ColoredAlignedFlexMain } from "./layout"
import store from "@/store/store"



async function getUser() {
    try {
        await fetch('https://forgotten-god.onrender.com/auth/refresh', {method: "POST", credentials: "include"})
        const response = await fetch('https://forgotten-god.onrender.com/auth/getUser', { credentials: "include"})
        
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
    
    console.log("da", store.getState())
    return(
        <>
            <UserPreloader userInfo={await getUser()}/>
            <Header/>
            <ColoredAlignedFlexMain>
                {children}
            </ColoredAlignedFlexMain>
        </>
       
    )
}

export default BasePageLayout