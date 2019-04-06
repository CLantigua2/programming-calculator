import React from 'react'
import styled from '@emotion/styled'

const options = [7, 8, 9, 4, 5, 6, 1, 2, 3, '±', 0, '.',]

const Digits = () => {

    return (
        <Container>
            {options.map(item => <p>{item}</p>)}
        </Container>
    )
}

export default Digits

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 58%;
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