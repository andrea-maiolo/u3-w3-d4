export const SET_FAV = "SET_FAV";
export const DELETE_FROM_LIST = "DELETE_FROM_LIST";
export const SET_JOB_LIST = "SET_JOB_LIST";

export const setToFavAction = (job) => ({ type: SET_FAV, payload: job });
export const deleteFromListAction = (i) => ({ type: DELETE_FROM_LIST, payload: i });

export const checkPayloadFav = (payload) => {
  return async (dispatch, getState) => {
    let currentFavList = getState().favorite.content;
    // console.log(getState().jobList.content);
    // console.log(currentFavList);
    if (currentFavList.some((ele) => ele._id === payload._id)) {
      // setErrorFav("seems already saved");
      return;
    } else {
      dispatch(setToFavAction(payload));
    }
  };
};

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
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      console.log(error);
      // per gli errori
      //   dispatch({ type: HAS_ERROR_ON });
      //   dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
    }
    // per il loading
    //  finally {
    //   dispatch({ type: SET_BOOKS_LOADING_OFF });
    // }
  };
};
