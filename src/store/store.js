import React, { useReducer, createContext } from 'react'

export const Store = createContext({ state: {}, dispatch: () => { } })

const initialState = {
    input: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "NUM_INPUT":
            return { ...state, input: action.payload }
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

