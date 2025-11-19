import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    return (
        <div className="relative w-full sm:w-auto sm:flex-1 sm:max-w-md">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-text)]" />
            <input
                type="text"
                placeholder="Search by code or URL..."
                className="pl-10 pr-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:ring-2 focus:ring-[var(--input-border-focus)] focus:border-transparent w-full text-[var(--input-text)] placeholder:text-[var(--muted-text)] transition-all"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}