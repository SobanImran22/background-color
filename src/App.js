import { useState } from "react";


function App() {
  const [color , setColor] = useState("black");
  

  return(
    <div className="w-full h-screen duration-200" style={{background:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <button
      onClick={()=> setColor("olive")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor:"olive"}} >olive</button>

      
      {/* for red */}
      <button
      onClick={()=> setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"style={{backgroundColor:"red"}} >RED</button>
{/* green */}
<button
      onClick={()=> setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"style={{backgroundColor:"green"}} >Green</button>
{/* black */}
<button
      onClick={()=> setColor("black")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"style={{backgroundColor:"black"}} >Black</button>
{/* orange */}
<button
      onClick={()=> setColor("orange")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor:"orange"}} >Orange</button>
<button
      onClick={()=> setColor("grey")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor:"grey"}} >grey</button>
<button
      onClick={()=> setColor("white")}
      className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor:"black"}} >white</button>




      </div>
      
      </div>
  )




}

export default App ;