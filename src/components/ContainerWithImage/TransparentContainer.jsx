import React from 'react'
import './TransparentContainer.scss'

function TransparentContainer({ text }) {
  return (
    <div className='container-transparent'>
        {text}
    </div>
  )
}

export default TransparentContainer