export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const FETCH_RESULTS = 'FETCH_RESULTS'
export const FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR'
export const FETCH_RESULTS_LOADING = 'FETCH_RESULTS_LOADING'

export const addToFavouritesAction = (company) => ({
    type: ADD_TO_FAVORITES,
    payload: company,
})

export const removeFromFavouritesAction = (company) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: company,
})


export const fetchResultsAction = (query) => {
    return async (dispatch) => {
      try {
        dispatch({ type: FETCH_RESULTS_LOADING })
  
        const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
        if (!response.ok) throw new Error('Errore nella fetch')
  
        const data = await response.json()
        dispatch({ type: FETCH_RESULTS, payload: data.data }) // .data contiene l'array dei risultati
      } catch (error) {
        console.error('Errore nella fetch:', error)
        dispatch({ type: FETCH_RESULTS_ERROR })
      }
    }
  }
  