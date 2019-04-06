import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Store } from '../../store/store'

const options = ['↑', 'Mod', 'CE', 'C', '⇐']

const Modifiers = () => {
    const { state, dispatch } = useContext(Store)
    const { input } = state
    const onModClick = item => {
        if (item === 'C') {
            dispatch({ type: "NUM_INPUT", payload: '0' })
        }
    }
    return (
        <Container>
            {options.map(item => <button onClick={() => onModClick(item)}>{item}</button>)}
        </Container>
    )
}

export default Modifiers

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
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