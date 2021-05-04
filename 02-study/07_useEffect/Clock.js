function Clock() {
  React.useEffect(() => {
    console.log('componentDidmount')
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}

