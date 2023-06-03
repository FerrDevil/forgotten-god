/* "use client" */

/* import { useSelector } from "react-redux" */
import AdminTagsHandler from "./components/AdminTagsHandler/AdminTagsHandler"
import { ITag } from "./components/AdminTagsHandler/types"

async function getTags() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/admin/getTags`)
    return await response.json()
}

export default async function AdminTagsPage  ()  {
    const tags: ITag[] = await getTags()  

    return(
        <AdminTagsHandler tags={tags}/>
    )
}

/*         const {userInfo} = useSelector(state  => state.user)
        if (userInfo?.userRole !== "admin") {
        return (
            <div>user is not admin</div>
        )
        } */