import { all, delay, fork, put, takeLatest } from "@redux-saga/core/effects";
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../reducers/post";

function addPostAPI(data) {
    return axios.post("/post", data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        yield put({
            type: ADD_POST_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
    yield all([fork(watchAddPost)]);
}
