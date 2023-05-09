import SearchBox from "../SearchBox/SearchBox"
import Sidebar from "../Sidebar/Sidebar"
import {HeaderStyle, HeaderContainer} from "./Header.styled";

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderContainer>
                            <Sidebar/>
            <SearchBox />
            </HeaderContainer>

        </HeaderStyle>
    )
};

export default Header;