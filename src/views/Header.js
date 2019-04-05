import React from 'react'
import Title from '../components/Title'
import Nav from '../components/Nav'
import { Route } from 'react-router'
import styled from '@emotion/styled'

const Header = () => (
    <Container>
        <Route to="/"><Nav /></Route>
        <Route to="/"><Title /></Route>
    </Container>
)

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    width: 200px;
`