function Button(props){
    const incrementChange = ()=>{
        props.increment();

    }
    
    const decrementChange = ()=>{
        props.decrement();

    }
   
    
    return(
        <div className="move">
            <button onClick={incrementChange} className="button1">+</button>
            <button onClick={decrementChange} className="button2">-</button>
        </div>
    )
}
export default Button