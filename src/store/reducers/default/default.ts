import { Reducer, AnyAction } from 'redux';
import * as actions from '../../actions/';
import { DefaultState } from '../../../model/default/default';

const _initialState : DefaultState = {
	name			:	null,
	greeting		:	null
}

export const defaultReducer : Reducer = (__state:DefaultState = _initialState, __action:AnyAction):DefaultState => {
	let __updatedState:DefaultState = {...__state};
	const __type:string = __action.type;
	switch (__type)
	{
		case actions.defaultActionTypes.UPDATE_NAME :
		{
			console.log('[default reducer]', __type, __action.payload);
			__updatedState.name = __action.payload;
			break;
		}
		case actions.defaultActionTypes.UPDATE_GREETING :
		{
			console.log('[default reducer]', __type, __action.payload);
			__updatedState.greeting = __action.payload;
			break;
		}
		default:
			__updatedState = __state;
			break;
	}
	return __updatedState;
}