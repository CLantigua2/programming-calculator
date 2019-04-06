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
            console.log(action.payload)
            const { savedInput, savedOp, op } = action.payload
            return {
                ...state,
                input: '0',
                savedInput,
                savedOperator: `${savedOp} ${op}`,
            }
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

