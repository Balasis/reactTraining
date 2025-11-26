import CategoryButton from '@components/Header/CategoryButton';
import '@styles/SearchBar.css'

export default function SearchBar({onOpenSidebar}){
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search products..."/>
            <CategoryButton onOpenSidebar={onOpenSidebar}/>
        </div>
    )
}