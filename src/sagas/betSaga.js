import { call , put} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const getBetsFromApi = () => {
    return axios.get('http://localhost:5000/api/bets', {
        headers : {
            "x-auth-token" : localStorage.getItem('token')
        }
    })
}

const addBetToApi = (bet) => {
    return axios.post('http://localhost:5000/api/bets', bet, {
        headers : {
            "x-auth-token" : localStorage.getItem('token')
        }
    })}

export function* getBetsSaga(action){
    try {
        const response = yield call(getBetsFromApi,action.payload);
        yield put(actions.getUsers(response.data));
    } 
    catch (error) {
        console.log(error.message);
    } 
}

export function* addBetSaga(action){
    try {
        const response = yield call(addBetToApi,action.payload);
        console.log(response);
        yield put(actions.addUser(response.data));
    } 
    catch (error) {
        console.log(error.message);
    }
}
