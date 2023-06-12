"use client"
import { useRef, useState } from "react";
import { AdminMenuToggleSVG, AdminProductImage, AdminProductImageWrapper, AdminProductInfoWrapper, AdminProductMenuButton, AdminProductMenuContainer, AdminProductMenuLink, AdminProductMenuToggleButton, AdminProductMenuWrapper, AdminProductTitle, AdminProductWrapper } from "./styles";
import { IAdminProduct } from "./types";

export default function AdminProduct({product, productIndex, setDeleteProductIndex} : IAdminProduct) {
    const [isMenuShown, setMenuShown] = useState(false)
    const menu = useRef(null)

    const onMenuToggle = () => {
        if (!isMenuShown){
            menu.current.focus()
        }
        setMenuShown(prev => !prev)
    }
    console.log(product)

    return (
        <AdminProductWrapper>
            <AdminProductImageWrapper>
                {product.image && <AdminProductImage src={`https://forgotten-god.onrender.com/image/${product.image}`}/>}
            </AdminProductImageWrapper>
            <AdminProductInfoWrapper>
                <AdminProductTitle>
                    {product.title}
                </AdminProductTitle>
                <AdminProductMenuWrapper>
                    <AdminProductMenuToggleButton onClick={onMenuToggle}>
                        <AdminMenuToggleSVG/>
                    </AdminProductMenuToggleButton>
                    <AdminProductMenuContainer tabIndex={0}  ref={menu} $isShown={isMenuShown}>
                        <AdminProductMenuLink href="/admin/product/edit">Редактировать</AdminProductMenuLink>
                        <AdminProductMenuButton>Назначить распродажу</AdminProductMenuButton>
                        <AdminProductMenuButton onClick={() => {setDeleteProductIndex(productIndex)}}>Удалить</AdminProductMenuButton>
                    </AdminProductMenuContainer>
                </AdminProductMenuWrapper>
            </AdminProductInfoWrapper>
        </AdminProductWrapper> 
        
    )
}