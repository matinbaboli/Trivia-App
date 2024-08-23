import React from "react"
import {styled} from "styled-components"
import { colors } from "../ThemeVariables"
import RandomIcon from "../../public/random-icon.svg?react"
import CategoriesIcon from "../../public/categories-icon.svg?react"


// because of left prop set to -100px, you might not see this component

const Container = styled.div`
    position: ${props => props.breakpoint900 ? "absolute": "fixed"};
    top: ${props => props.breakpoint900 && "400px"};
    bottom: ${props => !props.breakpoint900 && "0px"};
    left: ${props => props.breakpoint900 ? "-85px": "0px"}; 
    right: ${props => !props.breakpoint900 && "0px"};
    display: flex;
    flex-direction: ${props => props.breakpoint900 ? "column": "row"};
    justify-content: center;
    gap: ${props => props.breakpoint900 ? "20px": "50px"};
    background: ${colors.secondary};
    color: white;
    width: ${props => props.breakpoint900 && "85px"};
    border-top-left-radius: ${props => props.breakpoint900 && "20px"};
    border-bottom-left-radius: ${props => props.breakpoint900 && "20px"};

    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        background: none;
        border: none;
        color: white;
        fill: white;
        font-family: "Amaranth", sans-serif;
        font-size: 1rem;
        letter-spacing: 1px;
        padding-top: 10px;
        padding-bottom: 20px;
        cursor: pointer;
        transition: color 100ms ease-in-out, fill 100ms ease-in-out;
        &:hover {
            filter: brightness(0.8);
            color: ${colors.secondaryDark};
            fill: ${colors.secondaryDark};
        }
    }
`

const QuestionsControl = ({breakpoint900}) => {
    return (
        <Container breakpoint900={breakpoint900}>
            <button><RandomIcon/>Random</button>
            <button><CategoriesIcon/>Categories</button>
        </Container>
    )
}

export default QuestionsControl