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
    height: 650px;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
    background: rgba(45, 45, 45, 5);
`