import {useHistory,useLocation} from "react-router-dom";
function Home(props)
{
    console.log(props);
   /* return (
    <>
    <h1>Home</h1>
    <button onClick={props.history.goBack}>Goback</button>
    <button onClick={props.history.goForward}>GoForward</button>
    <button onClick={()=>{props.history.push("/about")}}>Push about</button>
    <button onClick={()=>{props.history.replace("/about")}}>Replace about</button>
    <p>{props.location.search}</p>
    </>);*/

     const history = useHistory();
     const location = useLocation();
    return (
        <>
        <h1>Home</h1>
        <button onClick={history.goBack}>Goback</button>
        <button onClick={history.goForward}>GoForward</button>
        <button onClick={()=>{history.push("/about")}}>Push about</button>
        <button onClick={()=>{history.replace("/about")}}>Replace about</button>
        <p>{location.search}</p>
        </>);
}

export default Home;