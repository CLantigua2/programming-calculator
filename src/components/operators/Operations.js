import React from 'react'
import styled from '@emotion/styled'
import OpButtons from './OpButtons'

const options = ['Lsh', 'Rsh', 'Or', 'Xor', 'Not', 'And']

const Operations = () => {
    return (
        <Container>
            {options.map((item, i) => <OpButtons key={i + 1} text={item} />)}
        </Container>
    )
}

export default Operations

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`