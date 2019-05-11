import { AnyAction } from "redux";
import { call, put } from 'redux-saga/effects';
import * as actions from "../../actions";

export function* handleWelcome(__action:AnyAction):IterableIterator<any>
{
	let __name:string|null = null;
	let __greeting:string|null = null;
	console.log("'", __action.payload, "'");
	
	if (__action.payload !== null)
	{
		console.log('1');
		
		try
		{
			const __headers = {
				'Content-Type': 'application/json'
			}
			console.log('2');
			const __response = yield call(fetch,`/api/greeting?name=${encodeURIComponent(__action.payload)}`, {
				method:'GET',
				headers:__headers
			});
			console.log('3');
			const __json = yield __response.json();
			console.log('4', __json);
			__name = yield __action.payload;
			__greeting = yield __json.greeting;
		}
		catch (__err)
		{
			console.log('error handling welcome response');
			
		}
	}
	yield put(actions.updateName(__name));
	yield put(actions.updateGreeting(__greeting));
}