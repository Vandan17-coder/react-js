import axios from 'axios'
import { useState } from 'react'

const App = () => {

  /*to use the data we wi use useState*/
  const [data, setData] = useState({});

  const getData  = () => {

    /*fetch the data using api*/
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log(response);
    /* fetch() is asynchronous, so it immediately returns a Promise.
      The data is still being requested from the server, so the Promise is initially in the "pending" state. */ 
  } 

  /* async/await does NOT make fetch synchronous.
    It simply pauses this async function until the Promise resolves,
    making the code easier to read and write. */
  const getData1 = async () => {

      // await pauses only this async function until the Promise resolves.
      // It does not make JavaScript synchronous; other code can still run.
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log(response);

    /*to extract actuall JSON data*/
    const data = await response.json();

    console.log(data);
  }

  /*using axios instead of fetch*/
  const getData3 = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    console.log(response);
    setData(response.data);
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getData1}>Get Data1</button>
      <button onClick={getData3}>Get Data3</button>

      <h1>{data.title}</h1>
      
    </div>
  )
}

export default App   

// 1. It takes time to get data from the server (network delay).

// 2. fetch() is asynchronous, so you don't get the data immediately.
//    It first returns a Promise.

// 3. If you don't use await or .then(),
//    you'll only get the Promise, not the actual data.

// 4. Even after await fetch(),
//    you still need response.json() to extract the actual JSON data.

// 5. The request can fail (no internet, server error),
//    so it's good practice to use try...catch.

// 6. fetch() : Built-in JavaScript function used to send requests to an API and receive data.
//    Axios : A third-party library that can be used instead of fetch() to send API requests more easily.

// 7. fetch() returns a Response object, so we must use response.json() to get the actual data.

// 8. Axios automatically converts the response to JSON, so no response.json() is needed.
//    The actual data is available directly in response.data.