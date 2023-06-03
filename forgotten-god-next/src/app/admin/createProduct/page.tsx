/* "use client" */
import CreateProductForm from "@/app/admin/createProduct/components/CreateProductForm/CreateProductForm"


/* import { useSelector } from "react-redux"
 */


export default function AdminCreateProductPage (){


    /* const {userInfo} = useSelector(state  => state.user)
    if (userInfo?.userRole !== "admin") {
        return (
            <>
                <div>user is not admin</div>
            </>
            
        )
    } */

    const tags = []

    return(
        <CreateProductForm tags={tags}/>
    )
}
