import React, { useReducer, createContext } from 'react'

export const Store = createContext({ state: {}, dispatch: () => { } })

const initialState = {
    input: '0',
    savedInput: '',
    savedOperator: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_CALC":
            return { input: '0' }
        case "NUM_INPUT":
            return { ...state, input: action.payload }
        case "OP_INPUT":
            return { ...state, savedOperator: action.payload, savedInput: state.input }
        default:
            return state;
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

