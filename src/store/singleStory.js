import axios from 'axios';
import { useDispatch } from "react-redux";

export const fetchSingleStory = (id) => {
    console.log("This is the id inside fetchSingleStory: ", id);
    return async (dispatch) => {
        try {
            // const dispatch = useDispatch();
            console.log("inside the dispatch")
            const {data} = await axios.get(`/api/stories/${id}`);
            console.log("This is the data from fetch", data);
            dispatch(setSingleStory(data));

        } catch (err) {
            console.log(err);
        }
    }
}

const SET_SINGLE_STORY = 'SET_SINGLE_STORY'

const setSingleStory = (story) => {
  return {
    type: SET_SINGLE_STORY,
    story
  }
}

const initialState = {}

export const singleStory = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_STORY:
      return action.story
    default:
      return state
  }
}