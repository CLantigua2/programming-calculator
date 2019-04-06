import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Store } from '../../store/store'

const OutPutField = () => {
    const { state } = useContext(Store)
    return (
        <Container>
            <div className="savedInput">
                <p>{state.savedInput}{state.savedOperator}</p>
            </div>
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
    text-overflow: ellipsis;
    .savedInput {
        margin-bottom: 10px;
        margin-right: 10px;
    p {
        font-size: 1.8rem;
        color: rgba(255,255,255, 0.5);
        }
    }
    h1 {
        font-size: 3.5rem;
        font-weight: 900;
        letter-spacing: 3px;
    }
`