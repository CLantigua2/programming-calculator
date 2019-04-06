import React from 'react'
import styled from '@emotion/styled'
import LogicGates from '../components/operators/LogicGates';
import Modifiers from '../components/modifiers/Modifiers'
import Operators from '../components/modifiers/Operators'
import Digits from '../components/modifiers/Digits'
import Alphabets from '../components/modifiers/Alphabets'

const BottomSection = () => {
    return (
        <div>
            <LogicGates />
            <BottomContainer>
                <LeftContainer>
                    <Modifiers />
                    <MidContainer>
                        <Alphabets />
                        <Digits />
                    </MidContainer>
                </LeftContainer>
                <div>
                    <Operators />
                </div>
            </BottomContainer>
        </div>
    )
}

export default BottomSection

const BottomContainer = styled.div`
    display:flex;
    width: 100%;
    flex-direction: row;
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MidContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`