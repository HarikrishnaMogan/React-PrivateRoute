function About(props)
{
     return (
         <>
     <h1>About</h1>
     <button onClick={props.history.goBack}>Goback</button>
    <button onClick={props.history.goForward}>GoForward</button>
    <button onClick={()=>{props.history.push("/post")}}>Push posts</button>
    <button onClick={()=>{props.history.replace("/post")}}>Replace posts</button>
     </>
     );
}
export default About;