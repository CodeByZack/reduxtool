export default {
  state : {
    author : "nothing",
    title : "nothing",
    content : "nothing"
  },
  reducers: {
    // handle state changes with pure functions
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
    async changeTitleAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.changeTitle(payload)
    }
  }
}