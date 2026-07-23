import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('Button is clicked');
  }

  function mouseEnter(){
    console.log('Mouse Entered');
  }

  function inputChanging(){
    console.log("User is typing");
  }

  return (
    <div>
      <h1>Hello, Vandan</h1>

      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change user</button>

      <button onClick={function(){
        console.log("Hello guys")
      }}>Explore this</button>

      <input onChange={inputChanging} type="text" placeholder='Enter Name'></input>

      {/*elem will give full detail, elem.target vala ka name dikehga , and to get value elem.target.value */}
      <input onChange={function (elem) {
        console.log(elem.target.value);f
      }} type="text" placeholder='Enter Name'></input>

      {/*If we want to call the function or to pass the value we can call it inside creating one function */}
      <input onChange={function (elem) {
        inputChanging(elem.target.value);
      }} type="text" placeholder='Enter Name'></input>
    </div>

    
  )
}

export default App