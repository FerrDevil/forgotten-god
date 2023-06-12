import { UserPageWrapper, UserPanel, UserPanelLibrary, UserPanelProduct, UserPanelProductImage, UserPanelProductImageWrapper, UserPanelTitle} from "./styles"
import { cookies } from "next/dist/client/components/headers";


type ILibrary = {
    id: number,
    title: string,
    logo: string
}

const getUserLibrary = async () => {
    try{
        const refreshCookie = cookies().get("refresh-fg-cookie");
        if(!refreshCookie?.value){
            return null
        }
        const refreshResponse = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include", headers: {
            Authorization: `Bearer ${refreshCookie.value}`
        }})
        if (!refreshResponse.ok) {
            throw new Error("Login to see this page")
        }
        const request = await fetch(`${process.env.HOST_DOMAIN}/store/getLibrary`, {credentials: "include", headers: {
            cookie: refreshResponse.headers.get("set-cookie")
        }})
        const library : ILibrary[] = await request.json()
        return library
    }
    catch(error){
        throw error
    }
    
    
}


export default async function UserPage () {
   
    const library : ILibrary[] = await getUserLibrary()

    return(
        <>
            <UserPageWrapper>
                <UserPanel>
                    <UserPanelTitle>Библиотека</UserPanelTitle>
                    <UserPanelLibrary>
                        {
                            library.map(product => (
                                <UserPanelProduct key={product.id}>
                                    <UserPanelProductImageWrapper>
                                        <UserPanelProductImage src={`${process.env.HOST_DOMAIN}/image/${product.logo}`}/>
                                    </UserPanelProductImageWrapper>
                                    <span>{product.title}</span>
                                </UserPanelProduct>
                            ))
                        }
                    </UserPanelLibrary>
                </UserPanel>
                {
                    library.length === 0 && <span> Вы еще не приобрели ни одной игры</span>
                }
            </UserPageWrapper>
        </>
    )
}
