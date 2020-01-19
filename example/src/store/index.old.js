import { createStore, combineReducers } from 'redux';


const defaultA = {
  author : "nothing",
  title : "nothing",
  content : "nothing"
}

const aReducer = (state = defaultA, action)=>{
  switch(action.type){
    case "CHANGE_AUTHOR":
      return {...state,author:action.payload}
    case "CHANGE_TITLE":
      return {...state,title:action.payload}
    case "CHANGE_CONTENT":
      return {...state,content:action.payload}
    default:
      return {...state}
  }
}


const defaultB = {
  isFetching : false,
  list : []
}

const bReducer = (state = defaultB, action)=>{
  switch(action.type){
    case "IS_LOADING":
      return {...state,isFetching:action.payload}
    case "UPDATE_LIST":
      return {...state,list:action.payload}
    default:
      return {...state}
  }
}

const rootReducer = combineReducers({aReducer,bReducer});

// 传递给createStore函数 这个export
const store = createStore(rootReducer);

export default store;

