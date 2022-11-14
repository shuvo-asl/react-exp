import React from 'react'

const Square = ({value,receivePoint}) => {
    const action = ()=>{
        receivePoint(value*100)
      }
      return(
        <button className='btn btn-primary m-2' onClick={action}>{value}</button>
      )
}

export default Square