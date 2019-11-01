interface INote {
  content: string;
  createdAt: number;
  noteId: string;
  userId: string;
  attachment?: string;
}

export default INote;
