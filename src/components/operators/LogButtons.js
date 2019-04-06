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
    background: rgba(40, 40, 40, 1);
    padding: 10px;
    color: white;
    border: none;
    width: 60px;
    height: 55px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    :hover {
        background: rgba(70,70,70,1);
        padding: 9px;
        border: 1px solid rgba(125, 125, 125, 5);
    }
}
`