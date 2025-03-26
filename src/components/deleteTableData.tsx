"use client"
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function DeleteTableData({ callback, id }: { callback:any, id: string }) {
    async function handleDelete() {
        callback(id)
    }
    return (
        <DropdownMenuItem className="text-destructive" onClick={handleDelete} >
            Delete
        </DropdownMenuItem>
    )
}