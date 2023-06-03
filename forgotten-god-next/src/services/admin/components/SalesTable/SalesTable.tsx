"use client"
import { useEffect, useState } from "react"
import { UserTableNavigation, UserTableRow, UserTableWrapper, UserTableElement, UserTableContent } from "./styles"


const SalesTable = () => {
    const [salesInfo, setSalesInfo] = useState([])

    useEffect(() => {
        const getSalesInfo = async () => {
            await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN || "http://localhost:5000"}/auth/refresh`, {method: "POST", credentials: "include"})
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN || "http://localhost:5000"}/admin/getSalesInfo`, { credentials: "include"})
            const sales = await response.json()
            console.log(sales)
            setSalesInfo(sales)
        }
        getSalesInfo()
    }, [])
    const dateTime = new Intl.DateTimeFormat()

    return(
        <UserTableWrapper>
            <UserTableNavigation>

            </UserTableNavigation>
            <UserTableContent>
                <UserTableRow $isHeader={true}>
                    <UserTableElement>ID ПРОДУКТА</UserTableElement>
                    <UserTableElement>ID ПОЛЬЗОВАТЕЛЯ</UserTableElement>
                    <UserTableElement>ДАТА ПРОДАЖИ</UserTableElement>
                    <UserTableElement>СТОИМОСТЬ ПРОДУКТА</UserTableElement>
                    <UserTableElement>МЕТОД ОПЛАТЫ</UserTableElement>
                    <UserTableElement>ДАННЫЕ ОПЛАТЫ</UserTableElement>
                </UserTableRow>
                {salesInfo.map(saleInfo => (
                    <UserTableRow key={saleInfo.id} $isHeader={false}>
                        <UserTableElement>{saleInfo.productId}</UserTableElement>
                        <UserTableElement>{saleInfo.userId}</UserTableElement>
                        <UserTableElement>{dateTime.format(new Date(saleInfo.paymentDate))}</UserTableElement>
                        <UserTableElement>{saleInfo.paymentPrice}</UserTableElement>
                        <UserTableElement>{saleInfo.paymentMethod}</UserTableElement>
                        <UserTableElement>{saleInfo.paymentData}</UserTableElement>
                </UserTableRow>
                ))}
            </UserTableContent>
        </UserTableWrapper>
    )
}


export default SalesTable