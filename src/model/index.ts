import { action } from "typesafe-actions";

export interface ActionWithPayload
{
	type:string,
	payload:any
}

export const actionCreator = (__type:string, __payload:any = null):ActionWithPayload => {
	return action(__type, __payload);
}