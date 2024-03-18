import UserTable from "@/app/admin/users/components/UserTable/UserTable"
import prisma from "@/lib/prisma/prisma"
import { cache } from "react"

const getUsersInfo = cache(async () => {
    const usersInfo = await prisma.user.findMany()
    return usersInfo
})


export default async function AdminUsersPage()  {

    const usersInfo = await getUsersInfo()
    

    return(
        <>
           <UserTable usersInfo={usersInfo}/>
        </>
    )
}

