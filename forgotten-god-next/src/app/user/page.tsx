import { useEffect} from "react"
import { UserPageWrapper, UserOptions, UserOption, UserOptionImage, UserOptionText, UserPanel} from "@/services/auth/styles/userPage"

import { useRouter } from "next/router"
import BasePageLayout from "@/components/Layout/BasePageLayout"



const UserPage = () => {
    const router = useRouter()
    const options = [
        {
            link: "editProfile",
            image: '/images/thumbnail.jpg',
            text: "Профиль",
            component: <div>da</div>
        },
    ]
    
    const option = options.find(option => option?.link === router.query.id)
    const currentComponent = !option ? options[0]?.component : option?.component
    

    return(
        <BasePageLayout title="Профиль">
            <UserPageWrapper>
                <UserOptions>
                    {options?.map((option, optionIndex) => (
                        <UserOption href={`/user/${option.link}`} key={optionIndex}>
                            <UserOptionImage src={option.image} alt={option.image}/>
                            <UserOptionText>{option.text}</UserOptionText>
                        </UserOption>
                    ) )}
                </UserOptions>
                <UserPanel>
                    {currentComponent}
                </UserPanel>
            </UserPageWrapper>
        </BasePageLayout>
    )
}



export default UserPage