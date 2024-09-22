import About from "./components/About"
import Nav from "./components/Nav"
import Home from "./components/Home"


const App =  () =>{
  let name = "pranshiii "
  let users = [
    {name:"prnashi",
      aur:12
    },
    {name:"prnashi",
      aur:12
    }
  ]
  let r = users.map((n,i)=>
    <h1 key={i}>{n.name}</h1>
  )
  return(
    <h1>{r}</h1>
    
  )
}

export default App