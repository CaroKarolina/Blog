import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';

export const getAllPosts = (state, id) => state.posts;
export const getPostById = ({posts}, id) => posts.find(post => post.id === id);

const subreducers = {
  posts: postsReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;