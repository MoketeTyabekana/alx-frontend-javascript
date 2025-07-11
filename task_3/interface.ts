

type RowID={
    id:number;
}
interface RowElement extends RowID{
  firstName:string;
  lastName:string;
  age?:number;
}