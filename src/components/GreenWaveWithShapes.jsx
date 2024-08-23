import React from 'react'
import {styled} from 'styled-components'

const Wave = styled.img`
    width: ${props => props.width};
`
const Shape = styled.img`
    position: absolute;
    width: ${props => props.width};
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    right: ${props => props.right}px;
`

const GreenWaveWithShapes = ({breakpoint900, breakpoint600}) => {
    return (
        <>
        {breakpoint900 
            ? 
            <div style={{position: "relative", paddingBottom: breakpoint900 ? "80px" : "0px"}}>
                <Wave breakpoint600={breakpoint600} width="120%" src="wave-shape-green.svg" alt="wave shape"/>
                {/* <img className="wave-shape" src="wave-shape-green.svg" alt="wave shape"/> */}
                <Shape width="198px" top={30} left={-60} src="circle.png" alt="circle shape"/>
                <Shape width="230px" top={-30} right={100} src="hexagon.png" alt="hexagon shape"/>
                <Shape width="130px" top={80} right={-43} src="triangle.png" alt="triangle shape"/>
            </div>
        :
        <div style={{position: "relative", paddingBottom: breakpoint900 ? "80px" : "0px"}}>
            <Wave breakpoint600={breakpoint600} width="200%" src="wave-shape-green.svg" alt="wave shape"/>
            {/* <img className="wave-shape" src="wave-shape-green-small.svg" alt="wave shape"/> */}
            <Shape width="160px" top={40} left={-60} src="circle.png" alt="circle shape"/>
            <Shape width="190px" top={-30} right={20} src="hexagon.png" alt="hexagon shape"/>
            <Shape width="100px" top={90} right={-43} src="triangle.png" alt="triangle shape"/>
        </div>
    }    
    </>
    )
}

export default GreenWaveWithShapes