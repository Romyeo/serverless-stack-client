import { ADDED_NOTE, ADDED_ERROR_NOTE, ADDING_NOTE } from 'store/types/note';

import { NoteAddActionTypesTs } from 'types/actions/note';

import INote from 'interfaces/state/note';
import { combineReducers } from 'redux';

const INIT_STATE_ADD: INote['add'] = {
  adding: false,
  added: false,
  error: ''
};

const add = (
  state: INote['add'] = INIT_STATE_ADD,
  action: NoteAddActionTypesTs
): INote['add'] => {
  switch (action.type) {
    case ADDED_NOTE:
      return { ...INIT_STATE_ADD, added: true };

    case ADDED_ERROR_NOTE:
      return { ...INIT_STATE_ADD, error: action.payload };

    case ADDING_NOTE:
      return { ...INIT_STATE_ADD, adding: true };

    default:
      return state;
  }
};

export default combineReducers<INote>({
  add
});
