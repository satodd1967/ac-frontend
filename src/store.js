import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import challengeForm from './reducers/challengeForm';
import challengeGoalForm from './reducers/challengeGoalForm';
import logForm from './reducers/logForm';
import errors from './reducers/errors';
import mainState from './reducers/mainState';
import clientErrors from './reducers/clientErrors';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    challengeForm,
    challengeGoalForm,
    logForm,
    errors,
    mainState,
    clientErrors
  });
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store