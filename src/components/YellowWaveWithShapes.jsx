import React from 'react'
import {styled} from 'styled-components'

const Wave = styled.img`
    width: ${props => props.width};
    transform: translateX(-150px);
`

const Shape = styled.img`
    position: absolute;
    width: ${props => props.breakpoint900 && "180px" || props.breakpoint600 && "160px" || "140px"};
    top: ${props => props.top}px;
    right: ${props => props.breakpoint600 ? props.right: props.right - 40}px; 
    
`
const YellowWaveWithShapes = ({breakpoint900, breakpoint600}) => {
    return (
        <>
        {breakpoint900 
            ? 
            <div style={{position: "relative", paddingBottom: breakpoint900 ? "80px" : "0px"}}>
                <Shape breakpoint900={breakpoint900} breakpoint600={breakpoint600} top={60} right={100} src="darkYellowShape.png" alt="hexagon shape"/>
                <Wave breakpoint600={breakpoint600} width="120%" src="wave-shape-yellow.svg" alt="wave shape"/>
                <Shape breakpoint900={breakpoint900} breakpoint600={breakpoint600} top={57} right={80}  src="yellowShape.png" alt="circle shape"/>
            </div>
        :
        <div style={{position: "relative", paddingBottom: breakpoint900 ? "80px" : "0px"}}>
            <Shape breakpoint900={breakpoint900} breakpoint600={breakpoint600} top={28} right={60} src="darkYellowShape.png" alt="hexagon shape"/>
            <Wave breakpoint600={breakpoint600} width="200%" src="wave-shape-yellow.svg" alt="wave shape"/>
            <Shape breakpoint900={breakpoint900} breakpoint600={breakpoint600} top={25} right={45} src="yellowShape.png" alt="circle shape"/>
        </div>
    }    
    </>
    )
}

export default YellowWaveWithShapes