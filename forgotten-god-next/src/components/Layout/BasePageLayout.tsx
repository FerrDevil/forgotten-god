
import Header from "../Header/Header"
import { ColoredAlignedFlexMain } from "./styles"





const BasePageLayout = async ({ children }) => {
    
    return(
        <>
            {/* <ServerSideUserPreloader/> */}
            <Header/>
            <ColoredAlignedFlexMain>
                {children}
            </ColoredAlignedFlexMain>
            
        </>
       
    )
}

export default BasePageLayout