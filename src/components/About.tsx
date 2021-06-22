import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";

 
export const About: React.FC = () => {
    let {isAutorized} = useContext<any>(Context);
    
    return(
        isAutorized ? <div>About US</div> : <Redirect to = "/Login"/>
    )

}

