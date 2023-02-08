import React from 'react'

const Button = ({caption,onclick,disable}) => {
    
  return (
    <>
        <button style={{margin:"20px"}} onClick={onclick} disabled={disable} >{caption}</button>
    </>
  )
}

export default Button