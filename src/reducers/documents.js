import { createReducer } from "redux-action"

export const CREATE_DOCUMENT = "CREATE_DOCUMENT"
export const REMOVE_DOCUMENT = "REMOVE_DOCUMENT"
export const SELECT_DOCUMENT = "SELECT_DOCUMENT"
export const UPDATE_DOCUMENT = "UPDATE_DOCUMENT"
export const CHANGE_TO_ADD_MODE = "CHANGE_TO_ADD_MODE"
export const TITLE_INPUT_CHANGE = "TITLE_INPUT_CHANGE"
export const TEXT_INPUT_CHANGE = "TEXT_INPUT_CHANGE"
export const SEARCH_DOCUMENT = "SEARCH_DOCUMENT"

const initialState = {
  list: [
    {
      id: 0,
      title: 'Title1',
      text: 'Some random text'
    }
  ],
  selected: {},
  mode: 'edit',
  titleInput: '',
  textInput: '',
  searchText: '',
}

export const createDocument = (_document) => {
  return {
    type: CREATE_DOCUMENT,
    document: _document,
  }
}

export const updateDocument = (_document) => {
  return {
    type: UPDATE_DOCUMENT,
    document: _document,
  }
}

export const removeDocument = (documentId) => {
  return {
    type: REMOVE_DOCUMENT,
    documentId,
  }
}

export const selectDocument = (_document) => {
  return {
    type: SELECT_DOCUMENT,
    document: _document,
  }
}

export const changeToAddMode = () => {
  return {
    type: CHANGE_TO_ADD_MODE,
  }
}

export const changeTitleInput = (value) => {
  return {
    type: TITLE_INPUT_CHANGE,
    value
  }
}

export const changeTextInput = (value) => {
  return {
    type: TEXT_INPUT_CHANGE,
    value
  }
}

export const searchDocument = (searchText) => {
  return {
    type: SEARCH_DOCUMENT,
    searchText
  }
}

let newList

export default createReducer(initialState, ({
  [CREATE_DOCUMENT]: (payload, state) => {
    newList = state.list
    newList.push(payload.document)
    return {
      ...state,
      list: newList,
      selected: payload.document,
      mode: 'edit',
    }
  },
  [SELECT_DOCUMENT]: (payload, state) => {
    return {
      ...state,
      selected: payload.document,
      mode: 'edit',
      titleInput: payload.document.title,
      textInput: payload.document.text,
    }
  },
  [UPDATE_DOCUMENT]: (payload, state) => {
    newList = state.list.map(doc => {
      if (doc.id === payload.document.id) {
        return payload.document
      } else {
        return doc
      }
    })
    return {
      ...state,
      list: newList
    }
  },
  [REMOVE_DOCUMENT]: (payload, state) => {
    newList = state.list
    newList = newList.filter(doc => doc.id !== payload.documentId)
    return {
      ...state,
      list: newList,
      selected: newList[0],
      titleInput: newList[0].title,
      textInput: newList[0].text,
    }
  },
  [CHANGE_TO_ADD_MODE]: (payload, state) => {
    return {
      ...state,
      mode: 'add',
      titleInput:'',
      textInput: '',
    }
  },
  [TITLE_INPUT_CHANGE]: (payload, state) => {
    return {
      ...state,
      titleInput: payload.value
    }
  },
  [TEXT_INPUT_CHANGE]: (payload, state) => {
    return {
      ...state,
      textInput: payload.value
    }
  },
  [SEARCH_DOCUMENT]: (payload, state) => {
    newList = state.list
    if(payload.searchText.length > 1) {
      newList = newList.find(doc => doc.title === payload.searchText)
    }
    return {
      ...state,
      list: newList || [],
      searchText: payload.searchText,
    }
  },
}))
