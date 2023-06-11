"use client"

import SalesTable from "@/services/admin/components/SalesTable/SalesTable"
import { useUserSelector } from "@/store/store"


export default function AdminSalesPage  ()  {


    const {userInfo} = useUserSelector()
    if (userInfo?.userRole !== "admin") {
        return (
            <>
                <div>user is not admin</div>
            </>
            
        )
    }

    return(
        
           <SalesTable/>
        
    )
}
