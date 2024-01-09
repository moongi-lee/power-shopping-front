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

const coupangDataState = createSlice({
  name: 'coupangDataState',
  initialState: [],
  reducers : {
    changeCoupangDataState: (state, action) => {
      state = action.payload
      return state
    }
  }
})

const utilityBoxState = createSlice({
  name: 'utilityBoxState',
  initialState: 'visible',
  reducers : {
    changeUtilityBoxState: (state, action) => {
      state = action.payload
      return state
    }
  }
})

const keywordInputState = createSlice({
  name: 'keywordInputState',
  initialState: 1,
  reducers : {
    changeKeywordInputState: (state, action) => {
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
    coupangDataState: coupangDataState.reducer,
    utilityBoxState: utilityBoxState.reducer,
    keywordInputState: keywordInputState.reducer,
  },
});

export let { changeContentsBoxState } = contentsBoxState.actions;
export let { changeUtilityState } = utilityState.actions;
export let { changeKeywordState } = keywordState.actions;
export let { changeCoupangDataState } = coupangDataState.actions;
export let { changeUtilityBoxState } = utilityBoxState.actions;
export let { changeKeywordInputState } = keywordInputState.actions;