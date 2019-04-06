import React from 'react'
import styled from '@emotion/styled'

const options = ['↑', 'Mod', 'CE', 'C', '⇐']

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
        width: 35px;
        margin: auto;
        margin-bottom: 5px;
        height: 40px;
        padding: 10px;
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