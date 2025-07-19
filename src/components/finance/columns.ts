import { ColumnDef } from "@tanstack/react-table"

export type FINANCE = {
  date: string;
  description: string;
  total: string;
  category: string;
};

export const columns: ColumnDef<FINANCE>[] = [
  {
    accessorKey: "date",
    header: "Date"
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "total",
    header: "Total"
  },
  {
    accessorKey: "category",
    header: "Category"
  }
]