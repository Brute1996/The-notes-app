import ListItem from "../ListItem/ListItem";
import Loader from "../Loader/Loader";
import Workspace from "../Workspace/Workspace";
import {MainStyle, MainContainer} from "./Main.styled";

const Main = ({isLoaded}) => {
    return (
        <MainStyle>
            <MainContainer>
                <aside className="list-items-aside">
                    { isLoaded ? <ListItem /> : <div className="loader-wrapper"><Loader/></div>}
                </aside>
                <section className="workspace-section">
                    <Workspace
                    />
                </section>
            </MainContainer>
        </MainStyle>
    )
};

export default Main;