## ReduxTool

简化redux的末班代码。侵入性小。可正常使用所有中间件。

### Getting Started

暂时未发布npm，可以先复制dist/reduxtool.js或者src/index.js到项目里。

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
import page from "./models/page";
import list from "./models/list";

const models = {
  page,list
};
// 传递给createStore函数 这个export
const store = createStore(ReduxTool.createReducer(models));
ReduxTool.ejectDispatch(store.dispatch);
export default store;
```


#### Step3 修改state

```js
  store.dispatch.list.changeList([1,2,2,2,2,2]);

  store.dispatch.page.changeTitleAsync("这是一条异步的title");
```
