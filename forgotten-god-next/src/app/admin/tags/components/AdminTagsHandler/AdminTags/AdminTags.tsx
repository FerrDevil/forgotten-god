import AdminTag from "./AdminTag";
import { AdminProductsContainerWrapper, AdminTagsNotExist } from "./styles";
import { IAdminTags } from "./types";


export default function AdminTags({tags, setDeleteTagIndex} : IAdminTags) {
    
    return (
        tags.length === 0 ? 
        <AdminTagsNotExist>Не найдено существующих тегов.</AdminTagsNotExist>: 
        <AdminProductsContainerWrapper>
            {tags.map((tag, tagIndex) => (
                <AdminTag
                    tagIndex={tagIndex} 
                    setDeleteTagIndex={setDeleteTagIndex} 
                    key={tag.id} 
                    tag={tag}
                />
            ))}
        </AdminProductsContainerWrapper>
    )
}