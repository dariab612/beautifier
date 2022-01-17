import { call, put, takeEvery } from 'redux-saga/effects'

const adminAuthFetch = async ({ login, pass }) => {
  console.log(login);
  const response = await fetch(`http://localhost:3001/adminform`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      login: login,
      password: pass
    })
  })
  const reservations = await response.json()
  return reservations
}

function* fetchAdminAuth(action) {
  const reservations = yield call(adminAuthFetch, {
    login: action.payload.login,
    pass: action.payload.pass
  });
  yield put({ type: "INIT_RESERVATIONS", payload: reservations });
}


export function* adminAuthWatcher() {
  console.log(666);
  yield takeEvery("ADMIN_AUTH_FETCH", fetchAdminAuth);
}
