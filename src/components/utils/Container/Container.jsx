import { ContainerStyle } from "./Container.styled";

const Container = ({children}) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    )
};

export default Container;