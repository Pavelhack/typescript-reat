import { Navbar } from './components/Navbar';
import { Todo } from './components/TodoForm';
import { useState } from 'react';
import { Context } from './components/Context';
import { Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { Login } from './components/Login';

const App: React.FC = () => {
  const [context, setContext] = useState<any>(0);
  const [isAutorized, setAutorized] = useState<any>(false);
  
  
  return (
    <Context.Provider value={{context: context, setContext: setContext, isAutorized: isAutorized, setAutorized: setAutorized}} >
      <>
      <Navbar/>
      <Switch>
        <Route exact path = "/" render = {() => <Todo/>}/>
        <Route path = "/About" render = {() => <About/>} />
        <Route path = "/Login" render = {() => <Login/>}/>
      </Switch>
      </>
    </Context.Provider>
  );
}

export default App