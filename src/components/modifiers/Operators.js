import React, { useContext } from 'react'
import { Store } from '../../store/store'
import styled from '@emotion/styled'
import { opChecker } from '../utils/'

const options = ['÷', 'X', '-', '+', '=']

const Operators = () => {
    const { state, dispatch } = useContext(Store)
    const { savedOperator, input, savedInput } = state

    const onOpClick = item => {
        opChecker(item, dispatch, input, savedOperator, savedInput)
    }
    console.log(savedOperator)
    return (
        <Container>
            {options.map(item => <button key={item} onClick={() => onOpClick(item)}>{item}</button>)}
        </Container>
    )
}

export default Operators

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 10%;
    button {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        margin: auto;
        margin-bottom: 5px;
        height: 60.5px;
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