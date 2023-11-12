"use client"

import SalesTable from "@/services/admin/components/SalesTable/SalesTable"
import { useUserSelector } from "@/store/store"
import { notFound } from "next/navigation"


export default function AdminSalesPage  ()  {


    const {userInfo} = useUserSelector()
    if (userInfo?.userRole !== "admin") {
       notFound()
    }

    return(
        
           <SalesTable/>
        
    )
}
