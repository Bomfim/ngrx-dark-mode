import { Action } from '@ngrx/store';

export function darkModeReducer(state: string = 'Light Theme', action: Action) {

    switch (action.type) {

        case 'dark':
            return state = 'Dark Theme';

        case 'light':
            return state = 'Light Theme';

        default:
            return state;
    }
}