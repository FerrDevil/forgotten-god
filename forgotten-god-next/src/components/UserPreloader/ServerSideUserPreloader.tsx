
import { UserInfo } from "@/store/types"
import UserPreloader from "./UserPreloader"
import { cookies } from "next/dist/client/components/headers";





/* export default  async function ServerSideUserPreloader({children}: {children?: React.ReactNode}) {
    const userInfo : UserInfo = await getUserInfo()
    console.log(userInfo)
    return (
        <UserPreloader userInfo={userInfo}>
            {children}
        </UserPreloader>
       
    )
} */