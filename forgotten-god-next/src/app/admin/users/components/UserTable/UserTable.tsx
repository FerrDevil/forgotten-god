"use client"
import { useEffect, useState } from "react"
import { UserTableNavigation, UserTableRow, UserTableWrapper, UserTableElement, UserTableContent, UserPromote, UserPromoteExpandSVG, UserPromoteExpandLessSVG, UserRoleWrapper, UserPromoteOption } from "./styles"



const UserTable = () => {
    const [usersInfo, setUsersInfo] = useState([])

    useEffect(() => {
        const getUsersInfo = async () => {
            await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/admin/getUsersInfo`, { credentials: "include"})
            const users = await response.json()
            console.log(users)
            setUsersInfo(users)
        }
        getUsersInfo()
    }, [])

    return(
        <UserTableWrapper>
            <UserTableNavigation>

            </UserTableNavigation>
            <UserTableContent>
                <UserTableRow $isHeader={true}>
                    <UserTableElement>ID</UserTableElement>
                    <UserTableElement>EMAIL</UserTableElement>
                    <UserTableElement>ЛОГИН</UserTableElement>
                    <UserTableElement>ПАРОЛЬ</UserTableElement>
                    <UserTableElement>РОЛЬ</UserTableElement>
                </UserTableRow>
                {usersInfo.map(userInfo => (
                    <UserTableRow $isHeader={false} key={userInfo.id}>
                        <UserTableElement>{userInfo.id}</UserTableElement>
                        <UserTableElement>{userInfo.email}</UserTableElement>
                        <UserTableElement>{userInfo.username}</UserTableElement>
                        <UserTableElement>{userInfo.password}</UserTableElement>
                        <UserRole role={userInfo.role} username={userInfo.username}/>
                </UserTableRow>
                ))}
            </UserTableContent>
        </UserTableWrapper>
    )
}


const UserRole = ({role, username}) => {
    const [areSettingsShown, setSettingsShown] = useState(false)

    const promoteUserToAdmin = async () => {
        const request = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/admin/promoteToAdmin/${username}`, {method: "POST"})
        const response = await request.json()
    }
    
    return(
        <UserRoleWrapper>
            <UserTableElement>
                {role}
            </UserTableElement>
            {
                areSettingsShown ? 
                <UserPromoteExpandLessSVG onClick={() => {setSettingsShown(prev => !prev)}}/> :
                <UserPromoteExpandSVG onClick={() => {setSettingsShown(prev => !prev)}}/>
            }
            <UserPromote $isShown={areSettingsShown}>
                <UserPromoteOption>User</UserPromoteOption>
                <UserPromoteOption onClick={promoteUserToAdmin}>Admin</UserPromoteOption>
            </UserPromote>
        </UserRoleWrapper>
        
            
        
    )
}

export default UserTable