"use client"

import UserTable from "@/app/admin/users/components/UserTable/UserTable"
import { useUserSelector } from "@/store/store"


export default function AdminUsersPage()  {


    const {userInfo} = useUserSelector()
    if (userInfo?.userRole !== "admin") {
        return (
            <>
                <div>user is not admin</div>
            </>
        )
    }

    return(
        <>
           <UserTable/>
        </>
    )
}

