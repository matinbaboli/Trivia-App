import React from "react"
import {styled} from "styled-components"
import {colors} from "../ThemeVariables"

const Button = styled.button`
    boxSizing: border-box;
    padding-inline: 15px;
    min-width: ${props => props.breakpoint900 ? "108px": "90px"};
    min-height: ${props => props.breakpoint900 ? "42px": "40px"};
    background: ${props => props.primary && colors.button || props.secondary && "none"};
    color: ${props => props.primary && "white" || props.secondary && colors.button};
    cursor: pointer;
    border: ${props => props.primary && "none" || props.secondary && `1px solid ${colors.button}`};
    border-radius: 6px;
    font-family: "Amaranth", sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: capitalize;
    transition: background 100ms ease-in-out;

    &:hover:enabled {
        background: ${props => props.secondary && colors.secondarylight};
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
        color: white;
        }
    &:active:enabled {
        background: ${props => props.primary && colors.secondaryDark};
    }
    &:disabled {
        background: none;
        cursor: initial;
    }
    &.correct {
        background: ${colors.primaryDark};
        color: white;
    }
    &.wrong {
        background: ${colors.accent};
        color: white;
    }
    
`

export default Button