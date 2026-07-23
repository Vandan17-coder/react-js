import React,{ useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    setTask(prev => [...prev, {title,detail}])

    setTitle('');
    setDetail('')
  }
  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx,1);

    setTask(copyTask)
  }

  return (
    <div className="flex h-screen bg-black  ">

      <div className="flex flex-col justify-center w-1/2">

      <form onSubmit={submitHandler}>
      
        <h1 className="text-gray-400 text-5xl">Notes</h1>

        {/*input title*/}
        <input 
        type="text" 
        placeholder="Enter Title"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        className="border lg:w-1/2 p-3 border-gray-500 text-white  m-10 items-center rounded-xl"></input>

        {/*input detail*/}
        <input 
        type="text" 
        placeholder="Enter description"
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        className="border lg:w-1/2 h-40 border-gray-500 m-10 text-white p-3 items-center rounded-xl"></input>
      
        <button 
        className="border lg:w-1/2 p-3 border-gray-500 text-gray-400 active:bg-amber-900 m-10 items-center rounded-xl w-1/2" >Add note</button>

        </form>
      </div>

      <div className="text-white border-l-2 border-l-gray-400">
        <h1 className="text-gray-400 m-10 text-5xl ">Recent Notes</h1>

        <div className="flex flex-wrap overflow-auto items-start justify-start h-[90%]">
          {task.map(function(elem,idx){
            return <div key={idx} className="h-45 w-40 flex justify-between flex-col relative bg-white rounded-xl m-5 "> 
                <div>
                  <h3 className='leading-tight text-black font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-xs  font-semibold text-gray-600'>{elem.detail}</p>
                </div>
                <button 
                onClick={()=>{
                  deleteNote(idx)
                }}
                 className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>  

      </div>
    </div>  
  )
}

export default App