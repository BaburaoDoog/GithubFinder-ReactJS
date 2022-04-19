import React from 'react';
import ReactDOM  from 'react-dom';

//function Greeting(){
  //return <h2>Well come to react js</h2>
//}
//import './index.css';
import { Book} from './Book';
import { Books } from './books';
import { Routertopic } from './Approuter';
import App from './App';
import { Data } from './App';
import { Effect } from './App';
import { Fetchdatafromapi } from './App';
import { Multiplereturn } from './App';
import { Shortcircuteevaluation } from './App';
import { Terneryoperator } from './App';
import { Forms } from './App';
import { Projectapp } from './Projectindex';

const name="Baburao";
function Greeting(){
  const title="Microdegree"
  return (
    <>
    <HelloWorld/>
    <Message/>
    <h1>{title}</h1>
    <h2>{name}</h2>
    </>
  );
}

function Booklist(){
return (
  <>
{
  Books.map((book)=>{
    return(
      <Book book={book}/>
    )
  })
}
</>
);
}


function HelloWorld(){
  return <h1 className="heading">Hello World!!!</h1>
}

function Message(){
  return  <p>Yes i am react developer</p>
}

function Application(){
  return(
    <>
    
    <Routertopic/>
    </>
  );
}





function Project(){
  return(
    <>
    <Projectapp/>
    </>
  )
}

ReactDOM.render(<Project/>,
document.getElementById('root')
)
