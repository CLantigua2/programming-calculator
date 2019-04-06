import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Store } from '../../store/store'


const options = [7, 8, 9, 4, 5, 6, 1, 2, 3, '±', 0, '.',]

const Digits = () => {
    const { state, dispatch } = useContext(Store)
    const { input } = state
    const onDigitClick = (item) => {
        if (state.input === '0') {
            if (item !== ('±')) {
                dispatch({ type: "NUM_INPUT", payload: item })
            } else if (item === '±') {
                dispatch({ type: "NUM_INPUT", payload: Math.sign(-input) })
            }
        } else {
            if (item === '±') {
                dispatch({ type: "NUM_INPUT", payload: Math.sign(-input) })
            }
            else {
                dispatch({ type: "NUM_INPUT", payload: `${input}${item}` })
            }
        }
    }
    return (
        <Container>
            {options.map(item => <button onClick={() => onDigitClick(item)}>{item}</button>)}
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