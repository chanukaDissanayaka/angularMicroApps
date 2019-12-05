
import { Action } from '@ngrx/store';

export const SET_VALUE = '[CURRENTVIEW] SET';

export class SetValue implements Action {
    readonly type = SET_VALUE;

    constructor(public payload: string) { }
}
export type Actions = SetValue;
