export const SET_FAV = "SET_FAV";
export const DELETE_FROM_LIST = "DELETE_FROM_LIST";
export const SET_JOB_LIST = "SET_JOB_LIST";

export const setToFavAction = (job) => ({ type: SET_FAV, payload: job });
export const deleteFromListAction = (i) => ({ type: DELETE_FROM_LIST, payload: i });

// grazie a redux-thunk, già integrato come middleware dal nostro configureStrore() di @reduxjs/toolkit,
// abbiamo la possibilità, da subito, di poter creare degli action creator che invece di ritornare subito un oggetto,
// possano fare operazioni intermedie, ANCHE ASINCRONE!!!

export const getJobsAction = (endpoint) => {
  // questo action creator ritorna una funzione invece di un oggetto di action
  return async (dispatch, getState) => {
    // qui dentro possiamo gestire logica (condizionale e non) anche asincrona

    // possiamo leggere lo stato globale nel momento in cui si avvia questo action creator, ed eventualmente
    // reagire condizionalmente a dei valori presenti nello stato in quel momento
    const globalState = getState(); // la chiamata di getState mi torna l'intero stato globale che posso leggere e trattare come oggetto
    console.log("global State", globalState);

    // essendo noi inseriti in dinamiche redux possiamo lanciare più dispatch da un singolo action creator
    // stiamo gestendo stati di caricamento ed errori che poi potremo leggere da qualunque punto dell'applicazione
    // per poter far comparire spinner o alert di errore dove vogliamo (anche più di uno per lo stesso dato di stato)
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
