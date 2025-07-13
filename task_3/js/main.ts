/// <reference path="./crud.d.ts" />
import { CRUD } from "./crud";
import { RowElement, RowID } from "./interface";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.create(row);
const updatedRow : RowElement = {...row, age: 23};
CRUD.update({ id: newRowID, ...updatedRow });
CRUD.deleteRow(newRowID);