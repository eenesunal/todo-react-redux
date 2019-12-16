import styled from "styled-components"

import { theme } from "../../theme.styled"

const VisibilityFilters = styled.div`
    display: flex;
    align-self: stretch;
    align-items: center;

    margin: 0;
    padding: 0;

    height: 100px;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    padding: 10px 20px;
    margin: 0 10px;
    border: 0;
    
    outline: 0;
    cursor: pointer;
`

const CompletedButton = styled(Button)`
    background-color: ${theme.colors.success};
    color: #fff;
`;

const IncompleteButton = styled(Button)`
    background-color: ${theme.colors.error};
    color: #fff;
`;

const AllButton = styled(Button)`
    background-color: ${theme.colors.primary};
    color: #fff;
`;

export { AllButton, CompletedButton, IncompleteButton, VisibilityFilters }