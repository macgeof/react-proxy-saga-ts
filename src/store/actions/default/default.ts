import { actionCreator } from "../../../model";

export enum defaultActionTypes
{
	WELCOME_SAGA			=	'default/WELCOME_SAGA',
	UPDATE_NAME				=	'default/UPDATE_NAME',
	UPDATE_GREETING			=	'default/UPDATE_GREETING'
}
export const welcomeSaga		:Function	=	(__name:string|null)		=> actionCreator(defaultActionTypes.WELCOME_SAGA, __name);
export const updateName			:Function	=	(__name:string|null)		=> actionCreator(defaultActionTypes.UPDATE_NAME, __name);
export const updateGreeting		:Function	=	(__greeting:string|null)	=> actionCreator(defaultActionTypes.UPDATE_GREETING, __greeting);