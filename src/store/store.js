import React, { useReducer, createContext } from 'react'

export const Store = createContext({ state: {}, dispatch: () => { } })

const initialState = {
    input: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "HELLO":
            break;
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

