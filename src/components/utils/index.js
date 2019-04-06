
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
                cb({ type: "OP_INPUT", payload: { savedInput: `${input}${op}` } })
            }
            break;
        case 'X':
            if (input !== '0') {
                cb({ type: "OP_INPUT", payload: savedOp, input: '0' })
            }
            break;
        case '-':
            if (input !== '0') {
                cb({ type: "OP_INPUT", payload: savedOp, input: '0' })
            }
            break;
        case '+':
            if (input !== '0') {
                cb({ type: "OP_INPUT", payload: savedOp, input: '0' })
            }
            break;
        case '=':
            if (input !== '0') {
                cb({ type: "OP_INPUT", payload: savedOp, input: parseInt(savedOp) + parseInt(input), savedInput: '0' })
            }
            break;

        default:
            break;
    }
}