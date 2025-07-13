import { RowID, RowElement } from "./interface";

declare namespace CRUD {
  function create(row: RowElement): RowID;
  function updateRow(row: RowElement & { id: RowID }): void;
  function deleteRow(id: RowID): void;
}
