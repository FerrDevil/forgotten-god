"use client"

import UserTable from "@/app/admin/users/components/UserTable/UserTable"
import { useUserSelector } from "@/store/store"


export default function AdminUsersPage()  {
    return(
        <>
           <UserTable/>
        </>
    )
}

