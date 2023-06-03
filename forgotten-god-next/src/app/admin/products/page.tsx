import AdminProductsHandler from "./components/AdminProductsHandler/AdminProductsHandler"
import { IProducts } from "./components/AdminProductsHandler/types"

async function getProducts() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/admin/getProducts`)
    return await response.json()
}

export default async function AdminProductsPage  ()  {

    const products: IProducts[] = await getProducts()


        /* const products = [
            {
                id: 1,
                image: "http://localhost:5000/image/img1.jpg",
                title: "Cyberpunk 2077"
            },
            {
                id: 2,
                image: "http://localhost:5000/image/img1.jpg",
                title: "Cyberpunk 2078"
            },
            {
                id: 3,
                image: "http://localhost:5000/image/img1.jpg",
                title: "Cyberpunk 2079"
            },
            {
                id: 4,
                image: "http://localhost:5000/image/img1.jpg",
                title: "Cyberpunk 2080"
            }
        ] */

    return(
        <AdminProductsHandler products={products}/>
    )
}

/*         const {userInfo} = useSelector(state  => state.user)
        if (userInfo?.userRole !== "admin") {
        return (
            <div>user is not admin</div>
        )
        } */