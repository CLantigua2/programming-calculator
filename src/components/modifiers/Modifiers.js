import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Store } from '../../store/store'
import { modChecker } from '../utils/'

const options = ['↑', 'Mod', 'CE', 'C', '⇐']

const Modifiers = () => {
    const { state, dispatch } = useContext(Store)
    const { input } = state
    const onModClick = item => modChecker(item, dispatch, input)
    return (
        <Container>
            {options.map(item => <button key={item} onClick={() => onModClick(item)}>{item}</button>)}
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