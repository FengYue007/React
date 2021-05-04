
function Clock() {
  React.useEffect(()=> {
    console.log('componentDidmount')
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);
}

return (
  <div className="my-component">
    <h2>react useEffect</h2>
  </div>
)
// function App(){
//   const [show, setShow] = React.useState(false);
//   const atClick = () => {
//     setShow(!show);
//   }

//   return (
//     <div className="app">
//       <button onClick={atClick}>switch Clock</button>
//       {show && <Clock />}
//     </div>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('app')
);