
"use client"
import { Input } from "./ui/input";

export default function SearchTableData({ callback }: { callback?: (search: string) => void }) {
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // await callback(e.target.value)
    }
    return (
        <Input placeholder="Search users..." name="search" onChange={handleSearch} className="max-w-sm" />

    )
}