import INote from 'interfaces/general/note';

export default interface INoteState {
  add: {
    adding: boolean;
    added: boolean;
    error: string;
  };
  // TODO: Could be use as a generic interface for listing i.e IList<D>
  list: {
    fetching: boolean;
    fetched: boolean;
    error: string;
    // TODO: Change this to [typeof string]: D[] or extend IList, if going to be generalized
    notes: INote[];
  };
}
