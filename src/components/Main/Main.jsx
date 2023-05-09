import ListItem from "../ListItem/ListItem";
import Workspace from "../Workspace/Workspace";
import {MainStyle, MainContainer} from "./Main.styled";

const Main = () => {
    return (
        <MainStyle>
            <MainContainer>
                <aside className="list-items-aside">
                    <ListItem />
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