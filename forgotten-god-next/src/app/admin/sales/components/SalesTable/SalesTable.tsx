import { UserTableNavigation, UserTableRow, UserTableWrapper, UserTableElement, UserTableContent } from "./styles"


const SalesTable = ({salesInfo}) => {
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
                {salesInfo.map((saleInfo, index) => (
                    <UserTableRow key={index} $isHeader={false}>
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