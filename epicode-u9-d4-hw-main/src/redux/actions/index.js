export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const ADD_COMPANY = "ADD_COMPANY";
export const GET_JOBS = "GET_JOBS";
export const SAVE_VALUE = "SAVE_VALUE";
export const LOADING_STATE = "LOADING_STATE";
export const ERROR_STATE = "ERROR_STATE";

export const addCompanyAction = (jobs) => {
  return {
    type: ADD_COMPANY,
    payload: jobs,
  };
};

export const removeFromFavsAction = (i) => {
  return { type: "REMOVE_FROM_FAVS", payload: i };
};

export const saveSearchValue = (value) => {
  return {
    type: SAVE_VALUE,
    payload: value,
  };
};

export const fetchJobs = (endpoint) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + endpoint + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: LOADING_STATE,
            payload: false,
          });
        }, 200);
      } else {
        alert("Error fetching results");
        dispatch({
          type: LOADING_STATE,
          payload: false,
        });
        dispatch({
          type: ERROR_STATE,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOADING_STATE,
        payload: false,
      });
      dispatch({
        type: ERROR_STATE,
        payload: true,
      });
    }
  };
};
