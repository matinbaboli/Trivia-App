import React from "react"
import {styled} from "styled-components"
import CorrectIcon from "../../public/correct-icon.svg?react"
import WrongIcon from "../../public/wrong-icon.svg?react"
import CorrectsInARowIcon from "../../public/correctsInARow-icon.svg?react"
import MostCorrectsInARowIcon from "../../public/MostCorrectsInARow-icon.svg?react"
import { colors } from "../ThemeVariables"

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 50px;
    left: ${props => props.breakpoint600 ? "-41px": "-1px"};
    text-align: center;
    width: 30px;
    background: ${colors.darkGray};
    color: white;
    padding-inline: 5px;
    padding-block: 20px;
    border: ${props => props.breakpoint600 && `1px solid ${colors.primary}`};
    border-top-right-radius: ${props => props.breakpoint600 ? "0px": "15px"};
    border-bottom-right-radius: ${props => props.breakpoint600 ? "0px": "15px"};
    border-top-left-radius: ${props => props.breakpoint600 && "15px"};
    border-bottom-left-radius: ${props => props.breakpoint600 && "15px"};

    & p {
        margin-top: 5px;
        margin-bottom: 0px;
        font-family: "Amaranth", sans-serif;
        font-size: 1.1rem;
    }
`

const Results = ({breakpoint600, stats}) => {
    const {overallCorrects, overallWrongs, correctsInRow, mostCorrectsInRow} = stats

    return (
        <ResultsContainer breakpoint600={breakpoint600}>
            <div>
                <CorrectIcon/>
                <p>{overallCorrects}</p>
            </div>
            <div>
                <WrongIcon/>
                <p>{overallWrongs}</p>
            </div>
            <div>
                <CorrectsInARowIcon/>
                <p>{correctsInRow}</p>
            </div>
            <div>
                <MostCorrectsInARowIcon/>
                <p>{mostCorrectsInRow}</p>
            </div>
        </ResultsContainer>
    )
}

export default Results