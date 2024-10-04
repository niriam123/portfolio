import React from 'react'
import Heropanel from './components/heropanel'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/Contact'
// import Navbar from './components/navbar'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
></link>

const App = () => {
  return (
    <div>
      <Heropanel />
      <About />
      <Portfolio />
      <Contact />
      {/* <TodoList /> */}
    </div>
  )
}

 function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

export default App
