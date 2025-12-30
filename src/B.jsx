import React, { useEffect, useState } from 'react'

function B() {
  let [data, setData] = useState([])
  useEffect(() => {
    document.title = "ABC"
    fetch("https://dummyjson.com/products").then(a=>a.json()).then(b=>setData(b.products));
  }, [])
  return (
    <div>
      <h3>UseEffect Hook</h3>
      {data.map(a =><li>{a.title}</li>)}
    </div>
    
  )
}

export default B