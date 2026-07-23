import React from 'react'

const App = () => {

  /*use to set the key and value and once written a if this lines are bing removed though the key and value will be stored*/
  localStorage.setItem('user','vandan');
  localStorage.setItem('age','18');
  
  /*use to get the values or items*/
  const user = localStorage.getItem('user');
  const age = localStorage.getItem('age');

  console.log(user,age);

  /*to remove the item*/
  localStorage.removeItem('user');

  /*using localStorage for object*/
  const userDetails = {
    username: 'vandan',
    age: 20,
    city: 'Anand'
  }

  /*problem that it will give value like [object object] so for that reason we will convert it to string*/
  /*to convert it in stringify we will use JSON.stringify which will send whole oject in string*/
  localStorage.setItem('userDetails',JSON.stringify(userDetails))

  const userdetails = localStorage.getItem('userDetails');
  
  /*but this will give the output as string of object*/
  console.log(userdetails);

  /*so that we will remove the string using JSON.parse*/
  console.log(JSON.parse(userdetails));  

  return (
    <div>App</div>
  )
}

export default App