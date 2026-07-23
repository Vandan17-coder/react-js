import React,{ useState } from 'react'

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
      <form 
      onSubmit={(e) => {
        e.preventDefault();

        if(email === ""){
          setError("Please enter you email.");
          return;
        }

        if(password === ""){
          setError("Please enter your password.");
          return;
        }
        else if(password.length  < 8){
          setError("password should be of atleast 8 character");
          return;
        }

        setError("");

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
      }}
      className="flex justify-center flex-col gap-4 h-100 w-full max-w-md border-1 border-gray-400 items-center rounded-xl ">
        <h1 className="text-lg">Login</h1>

        <div>
          <h3>Email</h3>
          <input 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="Email" placeholder="Enter Email" className="border-1 border-gray-400 rounded-xl p-1"></input>
        </div>

        <div>
          <h3>Password</h3>
          <input 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            
          }}
          type="password" placeholder="Enter Password" className="border-1 border-gray-400 rounded-xl p-1"></input>
        </div>

        <div className="flex flex-row gap-20">  
          <div className="flex gap-1">
            <input 
            checked={check}
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
            type="checkbox"></input>
            <h4>Remember me</h4>
            <p>{check ? "checked" : "not checked"}</p>
          </div>  

          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="border-1 border-gray-400 w-20 p-2 hover:bg-white hover:text-black duration-300 cursor-pointer">Login</button>

        { error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      
        <h3>Don't have an account? <a href="#" className="text-blue-500">Sign Up</a></h3>
      </form>  
    </div>
  )
}

export default App