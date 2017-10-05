import React from "react";

function Header() {
  return (
      <div>
          Test Header
      </div>
  )
}

function Title() {
  return (
      <div>
          <h1>Test Title</h1>

      </div>
  )
}


function App() {
  return (
<div>
  <Header />
  <Title />
  <h1>Hello World</h1>
  <p className='paragraph'>React</p>
</div>
  )
}
export default App;
