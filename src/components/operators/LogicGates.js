import React from 'react'
import styled from '@emotion/styled'
import LogButtons from './LogButtons'

const options = ['Lsh', 'Rsh', 'Or', 'Xor', 'Not', 'And']

const LogicGates = () => {
    return (
        <Container>
            {options.map((item, i) => <LogButtons key={i + 1} text={item} />)}
        </Container>
    )
}

export default LogicGates

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 1px;

`