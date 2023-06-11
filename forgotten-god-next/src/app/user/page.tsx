import { useEffect} from "react"
import { UserPageWrapper, UserOptions, UserOption, UserOptionImage, UserOptionText, UserPanel} from "@/services/auth/styles/userPage"

import { useRouter } from "next/navigation"



const UserPage = () => {
   
    

    return(
        <>
            <UserPageWrapper>
                <UserOptions>  
                </UserOptions>
                <UserPanel>
                </UserPanel>
            </UserPageWrapper>
        </>
    )
}



export default UserPage