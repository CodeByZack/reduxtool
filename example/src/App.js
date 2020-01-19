import store from  './store';
import React, { useState, useEffect } from 'react';
import './App.css';



const state = store.getState();
console.log(state);

function App() {

  const [ state,setState ] = useState(store.getState());
  useEffect(()=>{
    store.subscribe(()=>{
      const state = store.getState();
      console.log(state);
      setState(state);
    });
  },[]);


  const changeTitle = ()=>{
    store.dispatch.page.changeTitleAsync("这是一条异步的title");
  }
  const changeList = ()=>{
    store.dispatch.list.changeList([1,2,2,2,2,2]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>state</code>
          {JSON.stringify(state)} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={changeTitle} >change title</button>
        <button onClick={changeList} >change list</button>
      </header>
    </div>
  );
}

export default App;
