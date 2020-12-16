import api from '../apis';
import { call , put} from 'redux-saga/effects';
import * as actions from '../actions';

const getUsersFromApi = () => {
    return api.get('/users');
}

const addUserToApi = (user) => {
    return api.post('/users',user);
}

export function* getUsersSaga(action){
    try {
        const response = yield call(getUsersFromApi,action.payload);
        yield put(actions.getUsers(response.data));
    } 
    catch (error) {
        console.log(error.message);
    } 
}

export function* addUserSaga(action){
    try {
        const response = yield call(addUserToApi,action.payload);
        console.log(response);
        yield put(actions.addUser(response.data));
    } 
    catch (error) {
        console.log(error.message);
    }
}
