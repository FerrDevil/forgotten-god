

import { LoginWrapper } from "./styles"

import VisualNovel from "@/components/VisualNovel/VisualNovel"
import SignIn from "./components/SignIn/SignIn"
import { auth } from "@/utils/userAuth/auth"
import { redirect } from "next/navigation"




const SignInPage = async () => {
    const userInfo = (await auth())?.user
    if (userInfo) redirect('/')

    return(
        <LoginWrapper>
            <VisualNovel actions={[
                    {
                        id: 1,
                        type: "message",
                        action: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    },
                    {
                        id: 2,
                        type: "message",
                        action: "lorem ipsum dolor sit amet"
                    },
                    {
                        id: 3,
                        type: "component",
                        action: <SignIn/>
                    }
                    
                ]}
            />
        </LoginWrapper>

    )
}

export default SignInPage