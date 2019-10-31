import { API } from 'aws-amplify';

const ENDPOINT = 'notes';

export const addNote = async (note: string, attachment?: File) => {
  return await API.post(ENDPOINT, '/notes', {
    body: {
      content: note
    }
  });
};
