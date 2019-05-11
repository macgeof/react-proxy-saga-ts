import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { handleWelcome } from './default/default';

export function* sagaWatcherDefault()
{
	yield takeEvery(actions.defaultActionTypes.WELCOME_SAGA, handleWelcome)
}