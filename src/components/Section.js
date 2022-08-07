const Section = () => {
    const handleClick = () => {
        console.log('hello ninjas');
    }

    const handleClickAgain = (name) => {
        console.log(name);
    }

  return (
    <div className="section">
    
        <button onClick={handleClick}>Click Me</button>   
        <button onClick={() =>{handleClickAgain, 'morayo'}}>Click Me Again</button>

    </div>
  )
}

export default Section