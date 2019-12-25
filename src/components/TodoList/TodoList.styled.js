import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex: 1;
    align-self: stretch;
    flex-grow: 1;
    flex-direction: column;

    margin: 0;
    padding: 0;

    overflow: hidden;
`;

const TodoList = styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: stretch;

    margin: 0;
    padding: 0;
    overflow-y: auto;
`;

export {
    Container,
    TodoList
}