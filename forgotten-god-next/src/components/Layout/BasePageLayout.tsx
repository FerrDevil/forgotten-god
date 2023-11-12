
import { cookies } from "next/dist/client/components/headers";
import Header from "../Header/Header"
import ServerSideUserPreloader from "@/components/UserPreloader/ServerSideUserPreloader"
import { ColoredAlignedFlexMain } from "./styles"





const BasePageLayout = async ({ children }) => {
    
    return(
        <>
            <ServerSideUserPreloader/>
            <Header/>
            <ColoredAlignedFlexMain>
                {children}
            </ColoredAlignedFlexMain>
        </>
       
    )
}

export default BasePageLayout