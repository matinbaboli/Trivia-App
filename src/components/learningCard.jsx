import React from "react"
import {styled} from "styled-components"
import { colors } from "../ThemeVariables"

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.breakpoint900 ? "row": "column"};
    justify-content: center;
    align-items: ${props => props.breakpoint900 ? "start": "center"};
    gap: ${props => props.breakpoint900 && "30px"};
    box-sizing: border-box;
    width: ${props => props.breakpoint900 ? "679px": "260px"};
    height: ${props => props.breakpoint900 && "194px"};
    background-color: ${colors.primarylight};
    border-radius: 10px;
    padding-block: 17px;
    font-family: "Gudea", sans-serif;
    padding-left: ${props => props.breakpoint900 && "15px"};
    padding-right: ${props => props.breakpoint900 && "60px"};
    cursor: pointer;
    transition: box-shadow 200ms ease-in-out;

    article {
        margin-inline: 18px;
        width: ${props => props.breakpoint900 && "300px"};

        h2 {
            font-weight: 400;
            margin-bottom: 10px;
        }

        p {
            margin-top: 0px;
        }
    }

    .card-image {
        width: ${props => props.breakpoint900 ? "250px": "230px"};
        height: ${props => props.breakpoint900 ? "160px": "150px"};
        background-image: url(image.png);
        background-size: cover;
        background-position: center;
        background-repeate: no-repeate;
        border: 1px solid black;
        border-radius: 5px;
    }

    &:hover {
        box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.1);
    }
`

const LearningCard = ({breakpoint900}) => {
    return (
        <Container breakpoint900={breakpoint900}>
            <div className="card-image"/>
            <article>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fugit eligendi expedita adipisci quas eveniet commodi velit porro minus unde?</p>
            </article>
        </Container>
    )
}

export default LearningCard