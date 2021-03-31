import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import challenges from './reducers/challenges';
import logs from './reducers/logs';
import users from './reducers/users';
import challengeForm from './reducers/challengeForm';
import challengeGoalForm from './reducers/challengeGoalForm';
import logForm from './reducers/logForm';
import errors from './reducers/errors';
import mainState from './reducers/mainState';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    challenges,
    challengeForm,
    challengeGoalForm,
    logs,
    logForm,
    users,
    errors,
    mainState
  });
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store