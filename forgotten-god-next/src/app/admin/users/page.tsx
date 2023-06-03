"use client"

import UserTable from "@/app/admin/users/components/UserTable/UserTable"


import { useSelector } from "react-redux"



export default function AdminUsersPage()  {


    const {userInfo} = useSelector(state  => state.user)
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

