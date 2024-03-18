"use client"
import { useRef, useState } from "react";
import { AdminMenuToggleSVG, AdminProductImage, AdminProductImageWrapper, AdminProductInfoWrapper, AdminProductMenuButton, AdminProductMenuContainer, AdminProductMenuLink, AdminProductMenuToggleButton, AdminProductMenuWrapper, AdminProductTitle, AdminProductWrapper } from "./styles";
import { IAdminProduct } from "./types";
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader";

export default function AdminProduct({product, productIndex, setDeleteProductIndex} : IAdminProduct) {
    const [isMenuShown, setMenuShown] = useState(false)
    const menu = useRef(null)

    const onMenuToggle = () => {
        if (!isMenuShown){
            menu.current.focus()
        }
        setMenuShown(prev => !prev)
    }

    return (
        <AdminProductWrapper>
            <AdminProductImageWrapper>
                {product.image && <ImageLoader src={`${product.image}`} alt="productImage" width={1600} height={900} sizes="100vw" priority={true}/>}
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