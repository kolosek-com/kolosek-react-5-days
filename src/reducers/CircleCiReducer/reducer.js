import * as actionTypes from './constants';  

const initialState = {
  commitDetails: {},
  latestBuilds: []
};

const circleCiBuildsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CI_BUILD: {
      return Object.assign({ ...state }, {
        commitDetails:  action.build    
      });
    }
    case actionTypes.GET_CI_BUILDS_SUCCESS: {
      var latestBuilds = action.data.map((build) => { 
        return {
          id: build.all_commit_details[0].commit,
          projectName: build.reponame, 
          branchName: build.branch, 
          status: build.status, 
          commitMsg: build.all_commit_details[0].subject 
        }
      });

      return Object.assign({ ...state }, {
        latestBuilds: latestBuilds
      });
    }
    default: {
      break;
    }
  };
  return state;
};

export default  circleCiBuildsReducer;
