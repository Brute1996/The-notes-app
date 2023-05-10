import { useContext, useState } from "react";
import { NotesContext } from "../App";
import { debounce } from "lodash";
import {AiOutlineSearch} from "react-icons/ai"
import SearchBoxStyle from "./SearchBox.styled";

const SearchBox = () => {
    
  const { searchQuery, setSearchQuery } = useContext(NotesContext);
  const [isIconHidden, setIconIsHidden] = useState(false);

  const handleFocus = () => {
    setIconIsHidden(true);
  };

  const handleBlur = () => {
    setIconIsHidden(false);
  };


    const handleSearch = debounce((e) => {
      const { value } = e.target;
      setSearchQuery(value);
    }, 500);


    return (
        <SearchBoxStyle>
            {!isIconHidden && !searchQuery && <span className="search-icon"><AiOutlineSearch />Search</span>}
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