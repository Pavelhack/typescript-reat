import { Fragment, useContext } from "react"
import { Context } from "./Context"

export const Todo : React.FC = () => {

    let {context, setContext} = useContext<any>(Context);
  

    function Increment(digit:number ):void{
        setContext(context + digit)
    }

    

    let contextString = context?.toString()
    
    return(
      <Fragment>
        <div className = "container">
            <div className = "input-field" onClick = {() => Increment(1)}>
                <input type = "text" id = "title" placeholder = {contextString}/>
                <label htmlFor = "title" className = "active">
                  value
                </label>
            </div>

            
        </div>  
      </Fragment>
    )
}