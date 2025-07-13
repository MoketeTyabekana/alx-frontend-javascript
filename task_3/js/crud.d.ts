import { RowID, RowElement } from "./interface";

declare namespace CRUD {
  function create(row: RowElement): RowID;
  function read(id: RowID): RowElement | null;
  function update(row: RowID & Partial<RowElement>): RowElement;
  function deleteRow(id: RowID): void;
}
