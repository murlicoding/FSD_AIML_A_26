function Book(){
  return(
    <div>
      <img src="" width="100px" height="100px" alt="" />
      <h2>Price :475</h2>
      <button>AddToCart</button>
    </div>
  )
}
function App(){
  return(
    <div>
      <Book/>
      <Book/>
      <Book/>
    </div>
  )
}
const parengt = document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)