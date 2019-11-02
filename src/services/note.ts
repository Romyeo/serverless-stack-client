import { API } from 'aws-amplify';

import { fileUpload, fileGet, fileDelete } from 'services/file';

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

export const fetchNote = async (id: string): Promise<INote> => {
  const data: INote = await API.get(ENDPOINT, `/notes/${id}`, null);

  if (data.attachment) {
    const fileAttachment = await fileGet(data.attachment);
    if (typeof fileAttachment === 'string') data.attachmentURL = fileAttachment;
  }

  return data;
};

export const deleteNote = async (
  id: string,
  fileName?: string
): Promise<void> => {
  if (fileName) {
    await fileDelete(fileName);
  }

  await API.del(ENDPOINT, `/notes/${id}`, null);
};

export const updateNote = async (
  note: INote,
  attachment?: File
): Promise<INote> => {
  let fileKey = note.attachment;

  if (attachment) {
    if (fileKey) await fileDelete(fileKey);
    fileKey = await fileUpload(attachment);
  }

  return await API.put(ENDPOINT, `/notes/${note.noteId}`, {
    body: { ...note, attachment: fileKey }
  });
};
