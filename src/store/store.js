import React, { useReducer, createContext } from 'react'

export const Store = createContext({ state: {}, dispatch: () => { } })

const initialState = {
    input: '0',
    savedInput: '',
    savedOperator: '',
}
const reducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_CALC":
            return { ...state, input: action.payload.input }
        case "NUM_INPUT":
            return { ...state, input: action.payload }
        case "OP_INPUT":
            const { savedInput, savedOperator } = action.payload
            return {
                ...state,
                input: '0',
                savedInput: savedInput,
                savedOperator: savedOperator,
            }
        case "GET_ANSWER":
            return {
                ...state,
                input: action.payload.input,
                savedInput: '',
                savedOperator: ''
            }
        default:
            throw new Error(`unsoported action type ${action.type}`)
    }
}

export const MyStore = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}

