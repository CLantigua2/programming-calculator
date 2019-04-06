import React from 'react'
import styled from '@emotion/styled'

const options = ['↑', 'Mod', 'CE', 'C', '⇐', '÷', 'A', 'B', 7, 8, 9, 'X', 'C', 'D', 4, 5, 6, '-', 'E', 'F', 1, 2, 3, '+', '(', ')', '±', 0, '.', '=']

const Modifiers = () => {
    return (
        <Container>
            {options.map(item => <p>{item}</p>)}
        </Container>
    )
}

export default Modifiers

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 43px;
        margin: auto;
        height: 50px;
        padding: 10px;
        font-size: 2rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        :hover {
        background: rgba(70,70,70,1);
        padding: 9px;
        border: 1px solid rgba(125, 125, 125, 5);
    }
    }
`