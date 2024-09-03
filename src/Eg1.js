import React from 'react'

const Eg1 = ({data}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.id}{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Eg1