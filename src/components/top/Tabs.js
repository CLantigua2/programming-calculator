import React from 'react'
import styled from '@emotion/styled'

const Tabs = () => {
    return (
        <Container>
            <i className="rotate far fa-keyboard" title="Full Keyboard"></i>
            <i className="rotate fas fa-keyboard" title="Bit Toggling Keyboard"></i>
            <p>QWORD</p>
            <p title="Memory Store">MS</p>
            <p title="Memory">M</p>
        </Container>
    )
}

export default Tabs

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 1.4rem;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .rotate {
        transform: rotate(90deg);
        padding: 10px 15px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
            background: #595959;
        }
    }
    p {
        padding: 10px 15px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
            background: #595959;
        }
    }

`