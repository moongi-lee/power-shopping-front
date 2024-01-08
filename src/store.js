import {configureStore, createSlice} from '@reduxjs/toolkit'

const contentsBoxState = createSlice({
  name: 'contentsBoxState',
  initialState: 'default',
  reducers : {
    changeContentsBoxState: (state, action) => {
      state = action.payload
      return state
    }
  }
})

const utilityState = createSlice({
  name: 'utilityState',
  initialState: 'search',
  reducers : {
    changeUtilityState: (state, action) => {
      state = action.payload
      return state
    }
  }
})

const keywordState = createSlice({
  name: 'keywordState',
  initialState: '',
  reducers : {
    changeKeywordState: (state, action) => {
      state = action.payload
      return state
    }
  }
})



export default configureStore({
  reducer: {
    contentsBoxState: contentsBoxState.reducer,
    utilityState: utilityState.reducer,
    keywordState: keywordState.reducer,
  },
});

export let { changeContentsBoxState } = contentsBoxState.actions;
export let { changeUtilityState } = utilityState.actions;
export let { changeKeywordState } = keywordState.actions;
