import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-self: stretch;

    margin: 0;
    padding: 0;
`;

const Content = styled.div`
    display: flex;
    flex: 1 60%;
    flex-direction: column;
    align-self: stretch;
    flex-grow: 1;

    margin: 0;
    padding: 10px 25px;

    * {
        font-size: 22px;
    }
`

export {
    Container,
    Content
}