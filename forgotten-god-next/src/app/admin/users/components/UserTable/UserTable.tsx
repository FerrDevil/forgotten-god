import { UserTableNavigation, UserTableRow, UserTableWrapper, UserTableElement, UserTableContent, UserPromote, UserPromoteExpandSVG, UserPromoteExpandLessSVG, UserRoleWrapper, UserPromoteOption } from "./styles"
import UserRole from "./UserRole"
import type { User } from "@/types/userType"


const UserTable = ({usersInfo}: {usersInfo: User[]}) => {

    
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
                        <UserRole role={userInfo.role} id={userInfo.id}/>
                </UserTableRow>
                ))}
            </UserTableContent>
        </UserTableWrapper>
    )
}




export default UserTable