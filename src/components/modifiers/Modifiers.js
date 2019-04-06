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
    flex-wrap: wrap;
    width: 100%;
    p {
        width: 40px;
        text-align: center;
        height: 30px;
        padding: 10px;
        font-size: 1.6rem;
    }
`