export function Book(props){
    function clickHandler(){
      alert("Hello");
    }
    return(<>
    <h1>{props.book.title}</h1>
    <h2>{props.book.author}</h2>
    <button type='button' onClick={clickHandler}>Click me</button>
   
    </>
    );
  }