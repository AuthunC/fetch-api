import { useEffect, useState } from 'react';
import './App.css';
import Eg1 from './Eg1';
import Eg2 from './Eg2';

function App() {
  // Eg1 - Basic data fetching
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Filter the posts to include only those with userId of 1
        const filteredData = data.filter(fData => fData.userId === 1);
        
        // Set the filtered data to state
        setData(filteredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  // Eg2 - POST request using Fetch API
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [error1, setError1] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data);
    } catch (error1) {
      setError1(error1.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <Eg1 data={data} />
      <Eg2
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        response={response}
        setResponse={setResponse}
        error1={error1}
        setError1={setError1}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
