import styled from "styled-components"

import { theme } from "../../theme.styled"

const Todo = styled.li`
    display: flex;
    align-items: center;
    align-self: stretch;

    margin: 0;
    padding: 10px 2.5px;

    list-style-type: round;
    cursor: pointer;

    &:nth-of-type(2n) {
        background-color: #eee;
    }
    
    &:hover {
        background-color: #ece;
    }

`;

const TodoText = styled.p`
    font-size: 24px;
    flex: 1;

    margin: 0 10px 0 0;
    padding: 0;

    text-decoration: ${props => props.completed ? "line-through" : "none"};
`;

const Remove = styled.span`
    font-size: 24px;
    color: ${theme.colors.error};
    margin-left: auto;
    margin-right: 5px;

    &:hover {
        opacity: .8;
    }
`;

export {
    Remove, Todo, TodoText
}