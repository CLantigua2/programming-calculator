import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Store } from '../../store/store'
import { numChecker } from '../utils/'


const options = [7, 8, 9, 4, 5, 6, 1, 2, 3, '±', 0, '.',]

const Digits = () => {
    const { state, dispatch } = useContext(Store)
    const { input } = state

    const onDigitClick = (item) => {
        numChecker(item, dispatch, input)
    }
    return (
        <Container>
            {options.map(item => <button key={item} onClick={() => onDigitClick(item)}>{item}</button>)}
        </Container>
    )
}

export default Digits

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 58%;
    button {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
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