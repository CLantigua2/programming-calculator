import React from 'react'
import styled from '@emotion/styled'

const options = ['A', 'B', 'C', 'D', 'E', 'F', '(', ')']

const Alphabets = () => {
    return (
        <Container>
            {options.map(item => <button>{item}</button>)}
        </Container>
    )
}

export default Alphabets

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 41%;
    button {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        margin: auto;
        margin-bottom: 5px;
        height: 60px;
        font-size: 2rem;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        background: rgba(20,20,20,1);
        border: 1px solid black;
        :hover {
        background: rgba(70,70,70,1);
        border: 1px solid rgba(125, 125, 125, 5);
    }
    }
`