
export const numChecker = (num, cb, input) => {
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
        case '.':
            if (input === '0') cb({ type: "NUM_INPUT", payload: num })
            else cb({ type: "NUM_INPUT", payload: `${input}${num}` })
            break;
        default:
            break;
    }
}

export const opChecker = (op, cb, input, savedOp, savedInput) => {
    switch (op) {
        case '÷':
            if (input !== '0') {
                if (savedOp !== '÷') {
                    cb({ type: "OP_INPUT", payload: { savedInput: input, savedOperator: op } })
                }
                else {
                    cb({ type: "GET_ANSWER", payload: { input: savedInput / input } })
                }
            }
            break;

        case 'X':
            if (input !== '0') {
                if (savedOp !== 'X') {
                    cb({ type: "OP_INPUT", payload: { savedInput: input, savedOperator: op } })
                }
                else {
                    cb({ type: "GET_ANSWER", payload: { input: savedInput * input } })
                }
            }
            break;

        case '-':
            if (input !== '0') {
                if (savedOp !== '-') {
                    cb({ type: "OP_INPUT", payload: { savedInput: input, savedOperator: op } })
                }
                else {
                    cb({ type: "GET_ANSWER", payload: { input: savedInput - input } })
                }
            }
            break;

        case '+':
            if (input !== '0') {
                if (savedOp !== '+') {
                    cb({ type: "OP_INPUT", payload: { savedInput: input, savedOperator: op } })
                }
                else {
                    cb({ type: "GET_ANSWER", payload: { input: savedInput + input } })
                }
            }
            break;

        case '=':
            if (input !== '0') {
                if (savedOp !== '=') {
                    cb({ type: "OP_INPUT", payload: { savedInput: input, savedOperator: op } })
                }
                else {
                    cb({ type: "GET_ANSWER", payload: { input: savedInput / input } })
                }
            }
            break;

        default:
            break;
    }
}

export const modChecker = (item, cb, input) => {
    switch (item) {
        case 'C':
            cb({ type: "CLEAR_CALC", payload: { input: '0' } })
            break;
        default:
            break;
    }
}

export const toBinaryString = (item) => {
    return Math.abs(parseInt(item)).toString(2)
}

export const hexString = (item) => {
    return Math.abs(parseInt(item)).toString(16).toUpperCase();
}

export const octString = (item) => {
    return Math.abs(parseInt(item)).toString(8)
}