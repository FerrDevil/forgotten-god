import prisma from "@/lib/prisma/prisma"
import SalesTable from "./components/SalesTable/SalesTable"
import { cache } from "react"

const getSalesInfo = cache(async () => {
    const salesInfo = await prisma.sales.findMany()
    return salesInfo
})

export default async function AdminSalesPage  ()  {
    const salesInfo = await getSalesInfo()

    return(
        
           <SalesTable salesInfo={salesInfo}/>
        
    )
}
