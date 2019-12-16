import styled from "styled-components"

import { theme } from "../../theme.styled"

const Header = styled.header`
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;

    align-self: stretch;
    height: 200px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const MainText = styled.h1`
    color: ${theme.colors.warning};
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    padding: 0;
`;

const SubText = styled.h2`
    color: ${theme.colors.warning};
    font-size: 18px;
    font-weight: 400;
    opacity: .8;
    margin: 5px 0 0 0;
    padding: 0;
`;

export {
    Header,
    MainText,
    SubText
}