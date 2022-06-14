import React from 'react'

const SecondComponent = ({color,bgColor}) => {
  return (
    <div>
      <h3 style={{color:color,backgroundColor:bgColor}}>My Second Component</h3>
    </div>
  )
}

export default SecondComponent