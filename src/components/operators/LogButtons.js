import React from 'react'
import styled from '@emotion/styled'

const LogButtons = ({ text }) => {
    return (
        <Container>
            <button>{text}</button>
        </Container>
    )
}

export default LogButtons

const Container = styled.div`
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