
import { AdminWrapper, AdminOptions, AdminOption, AdminOptionImage, AdminOptionText, AdminPanel} from "@/services/admin/styles/adminPage"
import CreateProductForm from "@/services/admin/components/CreateProductForm/CreateProductForm.jsx"
import SalesTable from "@/services/admin/components/SalesTable/SalesTable.jsx"
import UserTable from "@/services/admin/components/UserTable/UserTable.jsx"
import { useRouter } from "next/navigation"

import { useSelector } from "react-redux"
import { Head } from "next/document"


const AdminPage = () => {
    const router = useRouter()

    const {userInfo} = useSelector((state : any) => state.user)
    if (userInfo?.userRole !== "admin") {
        return (
            <>
                <div>user is not admin</div>
            </>
            
        )
    }
    const options = [
        {
            link: "userList",
            image: '/images/thumbnail.jpg',
            text: "Пользователи",
            component: <UserTable/>
        },
        {   
            link: "sales",
            image: '/images/thumbnail.jpg',
            text: "Продажи",
            component: <SalesTable/>
        },
        {
            link: "createNewGame",
            image: '/images/thumbnail.jpg',
            text: "Создание товара",
            component: <CreateProductForm/>
        },
        
    ]
    
    const option = options.find(option => option.link === router.query.id)
    const currentComponent = !option ? options[0].component : option.component
    

    return(
        <>
            <Head>
                <title>Панель администратора</title>
            </Head>
            <AdminWrapper>
                <AdminOptions>
                    {options.map((option, optionIndex) => (
                        <AdminOption href={`/admin/${option.link}`} key={optionIndex}>
                            <AdminOptionImage src={option.image} alt={option.image}/>
                            <AdminOptionText>{option.text}</AdminOptionText>
                        </AdminOption>
                    ) )}
                    
                </AdminOptions>
                <AdminPanel>
                    {currentComponent}
                </AdminPanel>
            </AdminWrapper>
        </>
    )
}

export default AdminPage