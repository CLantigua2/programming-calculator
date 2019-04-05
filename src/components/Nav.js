import React, { useState } from 'react'
import styled from '@emotion/styled'

const Nav = () => {
  const [burger, setBurger] = useState(false)
  return (
    <Burger onClick={() => setBurger(!burger)}>
      <div className={`${burger === true ? `change1` : ''} bar1`}></div>
      <div className={`${burger === true ? `change2` : ''} bar2`}></div>
      <div className={`${burger === true ? `change3` : ''} bar3`}></div>
    </Burger >
  )
}

export default Nav

const Burger = styled.div`
      display: inline-block;
  cursor: pointer;

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change1  {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change2 {opacity: 0;}

.change3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
`