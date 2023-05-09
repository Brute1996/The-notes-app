import { useContext } from "react";
import { NotesContext } from "../App";
import { debounce } from "lodash";

const SearchBox = () => {
    
    const { setSearchQuery } = useContext(NotesContext)


    const handleSearch = debounce((e) => {
        const { value } = e.target;
        setSearchQuery(value)
    }, 500);

    return (
        <>
            <input
                onChange={handleSearch}
                type="search"
                name="search"
                placeholder="Search"
            />
        </>
    )
};

export default SearchBox;