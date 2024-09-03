import React from 'react'

const Eg2 = ({title, setTitle, body, setBody, handleSubmit, response,error1}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error1 && <p>Error: {error1}</p>}
    </div>
  )
}

export default Eg2