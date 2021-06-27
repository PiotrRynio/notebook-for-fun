export type EditNoteType = {
   readonly  _id: number,
   readonly  title: string,
   readonly  body: string,
   readonly  onEdit: (note:any)=> void,
};