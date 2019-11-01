import { API } from 'aws-amplify';

import { fileUpload } from 'services/file';

import INote from 'interfaces/general/note';

const ENDPOINT = 'notes';

export const addNote = async (note: string, attachment?: File) => {
  let fileKey: string | undefined;

  if (attachment) {
    fileKey = await fileUpload(attachment);
  }

  return await API.post(ENDPOINT, '/notes', {
    body: {
      content: note,
      attachment: fileKey
    }
  });
};

export const fetchNotes = async (): Promise<INote[]> => {
  return await API.get(ENDPOINT, '/notes', null);
};
