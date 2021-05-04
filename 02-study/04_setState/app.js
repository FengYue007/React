/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

// function Counter(){
  /*
  const [count, setCount] = React.useState(0);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}>+1</button>
    </div>
  );
  // */

  // var arr = fakeUseState();
  // var name = arr[0]
  // var test = arr[1]
  // var [name, test] = fakeUseState();

// function Counter() {
//   let [count, setCount] = React.useState(0);
//   let [name, setName] = React.useState('');
//   const atClick = () => {
//     setCount(count + 1);
//     setName('milkmidi')
//   }
//   return (
//     <div className="counter">
//       <h1>Counter</h1>
//       <div className="count">{count}</div>
//       <div className="count">{name}</div>
//       <button className="my-btn" onClick={atClick}>+1</button>
//     </div>
//   );
// }

function Counter(props) {
  const {
    iniCount = 0,
  } = props;
  let [count, setCount] = React.useState(initCount);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}>+1</button>
    </div>
  );
}

ReactDOM.render(
  <div>
  <Counter initCount= {0} />
  <Counter initCount= {1} />
  </div>,

  document.getElementById('app')
);