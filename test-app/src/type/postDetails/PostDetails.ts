export type PostDetails = {
  id:string;
  title:string;
  description : React.ReactNode;
  hoursCount ?:number;
  lectureName ?:string;
  tags:string[];
  };