import React from 'react'
import OutPutField from '../components/top/OutPutField'
import Modes from '../components/top/Modes'
import Header from '../components/top/Header'
import styled from '@emotion/styled'

const TopSection = () => {
    return (
        <Container>
            <Header />
            <OutPutField />
            <Modes />
        </Container>
    )
}

export default TopSection

const Container = styled.div`
    margin-bottom: 80px;
`