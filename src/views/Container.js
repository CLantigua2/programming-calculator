import React from 'react'
import styled from '@emotion/styled'

const Container = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Container

const Wrapper = styled.div`
    margin: 0 auto;
    width: 380px;
    color: white;
    height: 655px;
    padding: 20px;
    background: black;
`