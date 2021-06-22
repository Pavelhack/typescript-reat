import { useContext } from "react"
import { useHistory }  from "react-router-dom";
import { Context } from "./Context";

import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};


// export const Login = () => {

    /* let {isAutorized, setAutorized} = useContext<any>(Context);

    const History = useHistory(); */

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return <button onClick={() => loginWithRedirect()}>Log In</button>;
      };    

    /* function SignIn():void{
        setAutorized(!isAutorized)
        History.push("/About")
      }
    */

    /* return(
            <div>
                <button onClick={() => LoginButton()}>
                    Sign In
                </button>
            </div>
    )  */
// }