/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import { CRUD } from "./crud";

const row: RowElement = {
  firstname: "Guillaume",
  lastname: "Salva",
};

const newRowID: RowID = CRUD.create(row);
const updatedRow : RowElement = {...row, age: 23};
CRUD.update({ ...newRowID, ...updatedRow });
CRUD.deleteRow(newRowID);