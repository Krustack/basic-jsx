import React,{useEffect} from 'react'

const UseEffectComponent = ({count}) => {
    useEffect(() => {
        alert("useEffect")
    }, [count])
    
  return (
    <div></div>
  )
}

export default UseEffectComponent