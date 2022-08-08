const Section = () => {
    const handleClick = () => {
        console.log('hello ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

  return (
    <div className="section">
    
        <button onClick={handleClick}>Click Me</button>   
        <button onClick={() =>handleClickAgain('Morayo')}>Click Me Again</button>

    </div>
  )
}

export default Section