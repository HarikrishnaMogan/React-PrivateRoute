import {useRouteMatch,useParams} from "react-router-dom";
function Postsub(props)
{
    console.log(props.match.params);

   // return<h1>posts sub{props.match.params.id}</h1>
 const params = useParams();
   return<h1>posts sub{params.id}</h1>
}
export default Postsub;