import React from 'react'
import styled from '@emotion/styled'
import Operations from '../components/operators/Operations';
import Modifiers from '../components/modifiers/Modifiers'

const BottomSection = () => {
    return (
        <div>
            <Operations />
            <Modifiers />
        </div>
    )
}

export default BottomSection