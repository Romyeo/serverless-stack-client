interface INote {
  content: string;
  createdAt: number;
  noteId: string;
  userId: string;
  attachment?: string;
  attachmentURL?: string;
}

export default INote;
