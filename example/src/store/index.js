import { createStore, combineReducers } from 'redux';
import ReduxTool from '../../../dist/reduxtool';
const page = {
  state : {
    author : "nothing",
    title : "nothing",
    content : "nothing"
  },
  reducers: {
    // handle state changes with pure functions
    changeTitle(state, payload) {
      console.log( payload );
      return {...state,title:payload}
    },
    changeAuthor(state, payload) {
      return {...state,author:payload}
    },
    changeContent(state, payload) {
      return {...state,content:payload}
    },
  },
  effects: {
    async changeTitleAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.changeTitle(payload)
    }
  }
}


const list = {
  state : {
    isFetching : false,
    list : []
  },
  reducers: {
    // handle state changes with pure functions
    setLoading(state, payload) {
      return {...state,isFetching:payload}
    },
    changeList(state, payload) {
      return {...state,list:payload}
    }
  },
  effects:{}
}

const model = {
  page,list
};

// 传递给createStore函数 这个export
const store = createStore((ReduxTool.createReducer(model)));
ReduxTool.ejectDispatch(store.dispatch);
export default store;

