import React, { useState } from 'react'
import styled from '@emotion/styled'

const ops = ['HEX', 'DEC', 'OCT', 'BIN']

const newOptions = ops.map(item => ({ name: item, value: 0 }))

const Modes = () => {
    return (
        <Container>{newOptions.map(item => <p key={item.name}>{item.name} {item.value}</p>)}</Container>
    )
}

export default Modes

const Container = styled.div`
    height: 20px;
    p {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        letter-spacing: 3px;
        }
`