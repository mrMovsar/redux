
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const f = (state, action) =>{
  if (action.type === "plus"){
    return state + 1;
    }
  if (action.type === "minus"){
    if(state===0){
      return 0;
    }
    return state - 1;
    }
  if (action.type === "reset"){
    return 0;
    }
  return 10;
}

const store = createStore(f);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
