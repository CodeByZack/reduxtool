export default {
  state : {
    isFetching : false,
    datalist : []
  },
  reducers: {
    // handle state changes with pure functions
    setLoading(state, payload) {
      return {...state,isFetching:payload}
    },
    changeList(state, payload) {
      return {...state,datalist:payload}
    }
  },
  effects:{}
}