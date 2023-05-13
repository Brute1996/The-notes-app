import styled from "@emotion/styled";

export const MainContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
max-width: 1400px;
height: calc(100vh - 122px);


@media (min-width: 768px) {
    flex-direction: row;
    height: calc(100vh - 70px);
    padding: 0 10px;
    
}

.list-items-aside{
    width: 100%;
    @media (min-width: 768px) {
        min-width: calc(100%/3.5);
        max-width: calc(100%/3.5);
    };

    .loader-wrapper{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.workspace-section{
    width: 100%;
    height: 100%;
    border-top: 2px solid #d6d6d6;

    @media (min-width: 768px) {
    border-right: 2px solid #d6d6d6;
    border-left: 2px solid #d6d6d6;;
    }
    
}
`

export const MainStyle = styled.main`
width: 100%;


`
