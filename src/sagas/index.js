import {takeEvery } from 'redux-saga/effects';
import { getUsersSaga, addUserSaga } from '../sagas/userSaga';

export default function* watchSaga(){
    yield takeEvery("ADD_USER_INITIATE",addUserSaga);
    yield takeEvery("GET_USERS_INITIATE",getUsersSaga);
};