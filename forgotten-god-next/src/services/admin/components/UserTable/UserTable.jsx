import { useEffect, useState } from "react"
import { UserTableNavigation, UserTableRow, UserTableWrapper, UserTableElement, UserTableContent, UserPromote, UserPromoteExpandSVG, UserPromoteExpandLessSVG, UserRoleWrapper, UserPromoteOption } from "./userTable"



const UserTable = () => {
    const [usersInfo, setUsersInfo] = useState([])

    useEffect(() => {
        const getUsersInfo = async () => {
            await fetch('https://forgotten-god.onrender.com/auth/refresh', {method: "POST", credentials: "include"})
            const response = await fetch('https://forgotten-god.onrender.com/admin/getUsersInfo', { credentials: "include"})
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
                    <UserTableRow key={userInfo.id}>
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
        const request = await fetch(`/admin/promoteToAdmin/${username}`, {method: "POST"})
        const response = await request.json()
        console.log(response)
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