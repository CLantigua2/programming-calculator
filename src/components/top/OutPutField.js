import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Store } from '../../store/store'

const OutPutField = () => {
    const { state } = useContext(Store)
    return (
        <Container>
            <h1>
                {state.input}
            </h1>
        </Container>
    )
}

export default OutPutField

const Container = styled.div`
    width: 100%;
    text-align: right;
    margin-bottom: 20px;
    h1 {
        font-size: 3.5rem;
        font-weight: 900;
        letter-spacing: 3px;
    }
`