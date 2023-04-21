
import { AdminWrapper, AdminOptions, AdminOption, AdminOptionImage, AdminOptionText, AdminPanel} from "@/services/admin/styles/adminPage"
import CreateProductForm from "@/services/admin/components/CreateProductForm/CreateProductForm.jsx"

import UserTable from "@/services/admin/components/UserTable/UserTable.jsx"
import { useRouter } from "next/router"
import BasePageLayout from "@/components/Layout/BasePageLayout.jsx"
import { useSelector } from "react-redux"

/* export async function getServerSideProps() {

} */


const AdminPage = () => {
    const router = useRouter()

    const {userInfo} = useSelector(state => state.user)
    if (userInfo?.userRole !== "admin") {
        return (
            <BasePageLayout>
                <div>user is not admin</div>
            </BasePageLayout>
            
        )
    }
    const options = [
        {   
            link: "sales",
            image: '/images/thumbnail.jpg',
            text: "Продажи",
            component: <div>da</div>
        },
        {
            link: "createNewGame",
            image: '/images/thumbnail.jpg',
            text: "Создание товара",
            component: <CreateProductForm/>
        },
        {
            link: "userList",
            image: '/images/thumbnail.jpg',
            text: "Пользователи",
            component: <UserTable/>
        }
    ]
    
    const option = options.find(option => option.link === router.query.id)
    const currentComponent = !option ? options[0].component : option.component
    

    return(
        <BasePageLayout title="Панель администратора">
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
        </BasePageLayout>
    )
}

export default AdminPage