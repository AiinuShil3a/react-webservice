import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import PostClassComponents from './components/PostClassComponents'
// import PostFunctionComponents from './components/PostFunctionComponents'
import StateInClass from './components/StateInClass'
// import StateInFunction from './components/StateInFunction'
import Card from './components/CardBootstrap'
import CardReact from './components/reactCard'

function App() {

  return (
    <>
      <h1> React </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Demo React</h2>
      <Card />
      <CardReact />

      {/* <PostClassComponents userId="Supphalak.SM" message="Hello World" /> */}
      <StateInClass />
      {/* <StateInFunction /> */}
      {/* <PostFunctionComponents /> */}
      
      

    </>
  )
}

export default App
