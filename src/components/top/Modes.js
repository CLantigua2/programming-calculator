import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../store/store'
import { toBinaryString, hexString, octString } from '../utils/'
import styled from '@emotion/styled'

const Modes = () => {
    const { state } = useContext(Store)
    const { input } = state
    const newInput = toBinaryString(input)
    const newHex = hexString(input)
    const newOct = octString(input)

    return (
        <Container>
            <p>HEX: {newHex.split('.')[0]}</p>
            <p>DEC: {input}</p>
            <p>OCT: {newOct}</p>
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