"use client"
import { useState } from "react"
import { UserPromote, UserPromoteExpandLessSVG, UserPromoteExpandSVG, UserPromoteOption, UserRoleWrapper, UserTableElement } from "./styles"
import promoteToAdmin from "./actions"

export default function UserRole  ({role, id}: { role: string, id: string }) {
    const [areSettingsShown, setSettingsShown] = useState(false)
    const [currentRole, setRole] = useState(role)

    const promoteUserToAdmin = promoteToAdmin.bind(null, id)
    const handlePromotion = async () => {
        try{
            const result = await promoteUserToAdmin() 
            if (result){
                console.log("success")
                setRole("admin")
            } 
            else{
                console.error("Error")
            }
            setSettingsShown(false)
            
        }
        catch(error){
            console.error(error)
        }
        
    }

    return(
        <UserRoleWrapper>
            <UserTableElement>
                {currentRole}
            </UserTableElement>
            {
                areSettingsShown ? 
                <UserPromoteExpandLessSVG onClick={() => {setSettingsShown(prev => !prev)}}/> :
                <UserPromoteExpandSVG onClick={() => {setSettingsShown(prev => !prev)}}/>
            }
            <UserPromote $isShown={areSettingsShown}>
                { 
                    currentRole === "user" ? 
                        <UserPromoteOption onClick={handlePromotion}>Admin</UserPromoteOption>
                    : 
                        <UserPromoteOption>User</UserPromoteOption>
                }
            </UserPromote>
        </UserRoleWrapper>
        
            
        
    )
}
