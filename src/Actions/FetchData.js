//ACTION MADE TO FETCH THE DATA DIRECTLY FROM THE API AND THEN DISPATCH THE ACTION TO REDUCER TO MANIPUTLATE THE INITIAL STATE

export const fetchData = () => async (dispatch) => {
  try{

      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment/");

      if(!response.ok)
      {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      dispatch({ type: 'FETCH_OK', payload: data });

  }
  catch (error) {
      dispatch({type: 'FETCH_FAIL'})

  }
}