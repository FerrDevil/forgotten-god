"use client"
import { useRef, useState } from "react";
import { AdminMenuToggleSVG, AdminTagInfoWrapper, AdminTagMenuButton, AdminTagMenuContainer, AdminTagMenuLink, AdminTagMenuToggleButton, AdminTagMenuWrapper, AdminTagTitle, AdminTagWrapper } from "./styles";
import { IAdminTag } from "./types";

export default function AdminTag({tag, tagIndex, setDeleteTagIndex} : IAdminTag) {
    const [isMenuShown, setMenuShown] = useState(false)
    const menu = useRef(null)

    const onMenuToggle = () => {
        if (!isMenuShown){
            menu.current.focus()
        }
        setMenuShown(prev => !prev)
    }

    return (
        <AdminTagWrapper>
            <AdminTagInfoWrapper>
                <AdminTagTitle>
                    {tag.name}
                </AdminTagTitle>
                <AdminTagMenuWrapper>
                    <AdminTagMenuToggleButton onClick={onMenuToggle}>
                        <AdminMenuToggleSVG/>
                    </AdminTagMenuToggleButton>
                    <AdminTagMenuContainer tabIndex={0}  ref={menu} $isShown={isMenuShown}>
                        <AdminTagMenuButton onClick={() => {setDeleteTagIndex(tagIndex)}}>Удалить</AdminTagMenuButton>
                    </AdminTagMenuContainer>
                </AdminTagMenuWrapper>
            </AdminTagInfoWrapper>
        </AdminTagWrapper> 
        
    )
}