import * as action_types from './constants';

const initialState = {
  projectList: [],
  selectedProject: null,
  selectedBranch: null,
};

function projectReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_PROJECTS_START: {
      return Object.assign({...state}, {
        projectList: [],
      });
    }
    case action_types.GET_PROJECTS_SUCCESS: {
      return Object.assign({...state}, {
        projectList: action.data,
      });
    }
    case action_types.SELECT_PROJECT: {
      return Object.assign({...state}, {
        selectedProject: action.data,
        selectedBranch: null,
      });
    }
    case action_types.SELECT_BRANCH: {
      return Object.assign({...state}, {
        selectedBranch: action.data,
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default projectReducer;
