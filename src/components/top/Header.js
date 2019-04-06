import React from 'react'
import Title from './Title'
import Nav from './Nav'
import styled from '@emotion/styled'

const Header = () => (
    <Container>
        <Nav />
        <Title />
    </Container>
)

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5px;
    width: 200px;
`