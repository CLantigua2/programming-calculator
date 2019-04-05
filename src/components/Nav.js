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
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.change1  {
  -webkit-transform: rotate(-45deg) translate(-4.5px, 3px);
  transform: rotate(-45deg) translate(-4.5px, 3px);
}

.change2 {opacity: 0;}

.change3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
`