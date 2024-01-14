import React, { useState } from 'react'
import Product from './Product';

function App() {
  var[a,b]=useState(10);
  return (
    <div className='text:black'>
      <Product n="10"/>
    </div>
  )
}

export default App