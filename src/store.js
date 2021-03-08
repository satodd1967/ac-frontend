import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import challenges from './reducers/challenges';
import logs from './reducers/logs';
import challengeForm from './reducers/createChallengeForm';
import joinChallengeForm from './reducers/joinChallengeForm';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    challenges,
    challengeForm,
    joinChallengeForm,
    logs
  });
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store