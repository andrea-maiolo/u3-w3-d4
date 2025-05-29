export const SET_FAV = "SET_FAV";
export const DELETE_FROM_LIST = "DELETE_FROM_LIST";
export const SET_JOB_LIST = "SET_JOB_LIST";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const setToFavAction = (job) => ({ type: SET_FAV, payload: job });
export const deleteFromListAction = (i) => ({ type: DELETE_FROM_LIST, payload: i });
export const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, payload: message });
export const turnOnOffError = () => ({ type: HAS_ERROR_ON });

export const getJobsAction = (endpoint) => {
  return async (dispatch, getState) => {
    // dispatch({ type: SET_JOB_LIST }); per il loading
    try {
      let response = await fetch(endpoint);
      if (response.ok) {
        let fetchedJobs = await response.json();
        dispatch({ type: SET_JOB_LIST, payload: fetchedJobs.data });
      } else {
        console.log("error");
        dispatch({ type: HAS_ERROR_ON });
        dispatch({ type: SET_ERROR_MESSAGE, payload: "Problema nella fetch" });
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: HAS_ERROR_ON });
      dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
    }
    // per il loading
    //  finally {
    //   dispatch({ type: SET_BOOKS_LOADING_OFF });
    // }
  };
};
