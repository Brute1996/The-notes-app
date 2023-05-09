import { useContext, useState } from "react";
import { NotesContext } from "../App";
import { debounce } from "lodash";
import {AiOutlineSearch} from "react-icons/ai"
import SearchBoxStyle from "./SearchBox.styled";

const SearchBox = () => {
    
    const { setSearchQuery } = useContext(NotesContext);
  const [isHidden, setIsHidden] = useState(false);

  function handleFocus() {
    setIsHidden(true);
  }

  function handleBlur() {
    setIsHidden(false);
  }


    const handleSearch = debounce((e) => {
        const { value } = e.target;
        setSearchQuery(value)
    }, 500);


    return (
        <SearchBoxStyle>
            {!isHidden && <span className="search-icon"><AiOutlineSearch />Search</span>}
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleSearch}
                type="search"
                name="search"
            />
        </SearchBoxStyle>
    )
};

export default SearchBox;