// import React, { useContext } from 'react'
// import { Store } from '../../store/store'

export const numChecker = (num, cb, input) => {
    // const { state, dispatch } = useContext(Store)
    // const { input } = state
    switch (num) {
        case 0:
            if (input === '0') cb({ type: "NUM_INPUT", payload: input })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 1:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 2:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 3:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 4:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 5:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 6:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 7:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 8:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case 9:
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        case '±':
            if (input === '0') cb({ type: "NUM_INPUT", payload: input })
            else if (input === Math.abs(input)) cb({ type: "NUM_INPUT", payload: -Math.abs(input) })
            else cb({ type: "NUM_INPUT", payload: Math.abs(input) })
            break;
        default:
            break;
    }
}