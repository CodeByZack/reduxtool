## ReduxTool

简化redux的模版代码。对比rematch，无侵入性。可正常使用所有中间件。
使用见 example 文件夹。 
或者参考该项目 [风影院](https://github.com/CodeByZack/react_movie/tree/reduxtool
)
### Getting Started

`npm install -S @zackdk/reduxtool`

或者可以直接复制dist/reduxtool.js或者src/index.js到项目里。

#### Step1 model

```js
export default {
  state : {
    author : "nothing",
    title : "nothing",
    content : "nothing"
  },
  reducers: {
    changeTitle(state, payload) {
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
    async changeTitleAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.changeTitle(payload)
    }
  }
}
```


#### Step2 创建store，给dispatch注入方法

```js
import { createStore } from 'redux';
import ReduxTool from '../../../dist/reduxtool';
//或者
//import ReduxTool from '@zackdk/reduxtool';
import page from "./models/page";
import list from "./models/list";

const models = {
  page,list
};
//createReducer的结果为reducer
const store = createStore(ReduxTool.createReducer(models));
//给dispatch注入方法，没有找到更好的办法😢
//注入store，是为了effects执行时，获取当前state。
ReduxTool.ejectDispatch(store);
export default store;
```


#### Step3 修改state

```js
  store.dispatch.list.changeList([1,2,2,2,2,2]);

  store.dispatch.page.changeTitleAsync("这是一条异步的title");


  // 当你和redux-react一起使用时
  const mapDispatch = dispatch => ({
      increment: () => dispatch.page.changeTitleAsync(),
  })
  // 或者使用解构
  const mapDispatchWithDestructure = ({ page: { changeTitleAsync } }) => {
    return {
      changeTitleAsync
    }
  }

```