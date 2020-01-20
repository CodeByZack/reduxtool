import { createStore } from 'redux';
import ReduxTool from '@zackdk/reduxtool';
import page from "./models/page";
import list from "./models/list";

const models = {
  page,list
};
// 传递给createStore函数 这个export
const store = createStore(ReduxTool.createReducer(models));
ReduxTool.ejectDispatch(store);
export default store;

