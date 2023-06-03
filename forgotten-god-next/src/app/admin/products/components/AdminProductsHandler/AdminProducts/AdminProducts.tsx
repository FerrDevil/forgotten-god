import AdminProduct from "./AdminProduct";
import { AdminProductsContainerWrapper, AdminProductsNotExist } from "./styles";
import { IAdminProducts } from "./types";


export default function AdminProducts({products, setDeleteProductIndex} : IAdminProducts) {
    
    return (
        products.length === 0 ?
        <AdminProductsNotExist>Нет существующих продуктов</AdminProductsNotExist> :
        <AdminProductsContainerWrapper>
            {products.map((product, productIndex) => (
                <AdminProduct
                    productIndex={productIndex} 
                    setDeleteProductIndex={setDeleteProductIndex} 
                    key={product.id} 
                    product={product}
                />
            ))}
        </AdminProductsContainerWrapper>
    )
}