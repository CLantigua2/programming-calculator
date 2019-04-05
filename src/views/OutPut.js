import React from 'react'
import OutPutField from '../components/top/OutPutField'
import Modes from '../components/top/Modes'
import Header from '../components/top/Header'
import styled from '@emotion/styled'

const OutPut = () => {
    return (
        <Container>
            <Header />
            <OutPutField />
            <Modes />
        </Container>
    )
}

export default OutPut

const Container = styled.div`
    margin-bottom: 80px;
`