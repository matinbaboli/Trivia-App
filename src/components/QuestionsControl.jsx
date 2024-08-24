import React from "react"
import {styled} from "styled-components"
import { colors } from "../ThemeVariables"
import RandomIcon from "../../public/random-icon.svg?react"
import CategoriesIcon from "../../public/categories-icon.svg?react"
import Button from "./Button"


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
        color: ${colors.secondaryDark};
        fill: ${colors.secondaryDark};
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

    .categories-list {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -5;
        background: rgba(0, 0, 0, 0.4);
        opacity: 0;
        transition: opacity 200ms ease-in-out;
        
        &.open {
            z-index: 0;
            opacity: 1;
            & ul {
                transform: translateX(0px);
            
            }
        }

        & ul {
            list-style: none;
            width: 200px;
            height: 100%;
            margin: 0;
            padding-block: 50px;
            padding-inline: 0px;
            background: linear-gradient(to right, ${colors.secondaryDark} -50%, ${colors.secondarylight} 130%);
            color: ${colors.darkGray};
            box-shadow: -6px 0px 10px 10px rgba(0, 0, 0, 0.4);
            font-family: "Gudea", sans-serif;
            font-weight: 800;
            font-size: 1.05rem;
            letter-spacing: 1px; 
            transition: transform 300ms ease-in-out;
            transform: translateX(-800px); 

            & li {
                padding-inline: 30px;
                cursor: pointer;
                transition: transform 100ms ease-in-out;

                & p {
                    display: inline;
                }

                &:hover {
                    background: ${colors.secondaryDark}
                    
                    p {
                        transform: translateX(5px);

                        // how to group hover?
                    
                    }
                }
            }
        }
    }

    .activated {
        color: white;
        fill: white;
        
        &:hover {
            filter: brightness(1);
            color: white;
            fill: white;            
        }
    }
`

const QuestionsControl = ({breakpoint900}) => {
    const [showCategories, setShowCategories] = React.useState(false)
    function handleRandomFilter(e) {
        
    }

    function toggleCategoryList() {
        setShowCategories(!showCategories)
    }

    return (
        <Container breakpoint900={breakpoint900}>
            <button onClick={handleRandomFilter} className="activated"><RandomIcon/>Random</button>
            <button onClick={toggleCategoryList}><CategoriesIcon style={{width: "30px", height: "29px"}}/>Categories</button>
            <div onClick={toggleCategoryList} className={`categories-list ${showCategories && "open"}`}>
                <ul>
                    <li>
                        <CategoriesIcon style={{width: "15px", height: "15px", fill: colors.darkGray, marginRight: "5px"}}/>
                        <p>Category1</p>
                    </li>
                </ul>
                
            </div>
        </Container>
    )
}

export default QuestionsControl