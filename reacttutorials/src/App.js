import React,{useEffect, useState} from "react";
import { data } from "./data";

export default App;
function App(){
   
        //console.log(useState("Hello word!!s"))
        //const value=useState(1)[0];
        //const handler=useState(1)[1];
        //console.log(value,handler);
   
        const[text,setText]=useState("Microdegree");
        console.log("Baburao");
        function handlerClick(){
           if(text == "Microdegree"){
            setText("Baburao");
           }else{
            setText("Microdegree");
           }
            
        }
    return <>
   <h2>{text}</h2>
    <button type="button" onClick={handlerClick}>Change title</button>
    </>
}

 export function Data(){
    const[teams,setTeam]=useState(data);
    console.log(teams);
    function clearTeam(){
        setTeam([])
    }
    return <>
    {teams.map((team)=>{
       return(
           <div >
               <h3>{team.name}</h3>
           </div>
       )
    })}
    <button onClick={clearTeam}>Clear Team</button>
    </>
}

export function Effect(){
const [count, setCount]=useState(0);

if(count>0){
    console.log('Hello!...');
}
    useEffect(()=>{
        console.log('call use-effect');
    },[]);

    function increaseValue(){
        setCount(count+1);
    }
    return <>
    <h4>{count}</h4>
    <button onClick={increaseValue}>Click me</button>
    </>
}

const url='https://api.github.com/users';

export function Fetchdatafromapi(){
    const[gitusers,setGitusers]=useState([]);
    async function getData(){
        const response=await fetch(url);
        const users=await response.json();
       setGitusers(users);
    }
    useEffect(()=>{
        getData()
    },[])

    return <>{
    gitusers.map((gitusers)=>{
        return(
            <li>{gitusers.login}</li>
        );
})}
    </>;
}

export function Multiplereturn(){
    const[loading,setloading]=useState(false);

    if(loading){
        return (
            <h1>Baburao</h1>
        )
    }
    return <h2>Microdegree</h2>;
}

export function Shortcircuteevaluation(){
    const [text,setText]=useState('microdegree');
    const firstValue=text || 'Hello world!!!';
    const secondValue=text && 'Hello world!!';
    return(
        <>
        <h2>{firstValue} </h2>
        <h2>Value: {secondValue}</h2>
        </>
    )
}

export function Terneryoperator(){
    const[text,setText]=useState("hello");
    const[showmodel,setShowmodel]=useState(false);

    function handleClick(){
        setText(!text);
    }

    function modelClick(){
        setShowmodel(!showmodel);
    }
    return <>
    {text ? <h2>Very Good</h2> : <h2>Very Bad</h2>}
    <button onClick={handleClick}>Click me</button><button onClick={modelClick}>Check Model</button>
    {showmodel && <h1>My model here guys</h1>}
    </>
}

export function Forms(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[number,setNumber]=useState("");
    function submithandle(e){
        e.preventDefault();
        console.log("Hello world");
    }

    function handleChangeName(e){
        setName(e.target.value);
    }
    function handleChangeAge(e){
        setAge(e.target.value);
    }
    function handleChangeNumber(e){
        setNumber(e.target.value);
    }
    return<>
    <div><center>
    <form onSubmit={submithandle}>
    <div> <label htmlFor="name">Name</label>
    <input type="text" name="name" value={name} onChange={handleChangeName}/></div>
    <div> <label htmlFor="age">Age</label>
    <input type="text" name="age" value={age} onChange={handleChangeAge}/></div>
    <div> <label htmlFor="number">Mobile No.</label>
    <input type="text" name="number" value={number} onChange={handleChangeNumber}/></div>
    <center><button   type="submit">Submit</button></center>
    </form>
    </center> </div>
    </>
}

