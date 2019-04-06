import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../store/store'
import { toBinaryString } from '../utils/'
import styled from '@emotion/styled'

const Modes = () => {
    const { state } = useContext(Store)
    const { input } = state
    const newInput = toBinaryString(input)

    return (
        <Container>
            <p>HEX: 0</p>
            <p>DEC: 0</p>
            <p>OCT: 0</p>
            <p>BIN: {newInput}</p>
        </Container>
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