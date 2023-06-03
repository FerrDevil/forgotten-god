"use client"

import SalesTable from "@/services/admin/components/SalesTable/SalesTable"
import { useSelector } from "react-redux"


export default function AdminSalesPage  ()  {


    const {userInfo} = useSelector(state  => state.user)
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
