import styled from "styled-components"
import { theme } from "../../theme.styled"

const AddTodo = styled.div`
    display: flex;

    align-self: stretch;
    align-items: center;

    margin: 0;
    padding: 0;

    input, button {
        font-size: 24px;
    }
`;

const TodoInput = styled.input`
    display: flex;
    flex: 9;

    margin: 0 5px 0 0;
    padding: 10px 20px;

    border: 1px solid #cdcdcd;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    outline: none;
`;

const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    
    margin: 0;
    padding: 10px 20px;

    border: 1px solid transparent;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    outline: none;

    background-color: ${theme.colors.success};
    color: #fff;

`;

export { AddButton, AddTodo, TodoInput }