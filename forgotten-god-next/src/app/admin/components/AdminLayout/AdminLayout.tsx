"use client"
import { useUserSelector } from "@/store/store";
import { AdminCreateProductSVG, AdminLinks, AdminPagesLink, AdminPagesLinkDescription, AdminPanel, AdminProductsSVG, AdminSalesSVG, AdminTagsSVG, AdminUsersSVG, AdminWrapper } from "../../styles";

export default function AdminLayout({children} : {children: React.ReactNode}){
    const {userInfo} = useUserSelector()
    if (userInfo?.userRole !== "admin"){
        return <> User is not admin</>
    }

    return(
        <AdminWrapper>
            <AdminLinks>
                <AdminPagesLink href="/admin/users" >
                    <AdminUsersSVG/>
                    <AdminPagesLinkDescription>Пользователи</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/sales" >
                    <AdminSalesSVG/>
                    <AdminPagesLinkDescription>Продажи</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/products" >
                    <AdminProductsSVG/>
                    <AdminPagesLinkDescription>Продукты</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/tags">
                    <AdminTagsSVG/>
                    <AdminPagesLinkDescription>Тэги</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/createProduct" >
                    <AdminCreateProductSVG/>
                    <AdminPagesLinkDescription>Добавить продукт</AdminPagesLinkDescription>
                </AdminPagesLink>
                
            </AdminLinks>
            <AdminPanel>
                {children}
            </AdminPanel>
        </AdminWrapper>
    )
}