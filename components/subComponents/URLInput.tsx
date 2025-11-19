"use client";
import { Link2, AlertCircle } from "lucide-react";
import SubmitButton from "./SubmitButton";

interface URLInputProps {
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    error?: string;
    disabled: boolean;
}

export default function URLInput({ value, onChange, onBlur, error, disabled }: URLInputProps) {
    return (
        <div className="flex-1 space-y-2 min-w-0">
            <label htmlFor="url" className="block text-sm font-semibold text-[var(--label-text)]">
                Enter URL to shorten
            </label>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Link2 className="h-5 w-5 text-[var(--muted-text)]" />
                    </div>
                    <input
                        id="url"
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        placeholder="https://example.com/your-long-url"
                        className={`w-full h-[52px] pl-12 pr-4 border-2 rounded-xl focus:ring-4 focus:outline-none transition-all duration-200 text-[var(--input-text)] placeholder:text-[var(--muted-text)] ${error
                            ? "border-[var(--error-border)] bg-[var(--error-bg)] focus:border-[var(--error-border)] focus:ring-[var(--error-border)]/20"
                            : "border-[var(--input-border)] bg-[var(--input-bg)] focus:border-[var(--input-border-focus)] focus:ring-[var(--input-border-focus)]/20 hover:border-[var(--input-border-hover)]"
                            }`}
                    />
                </div>
                <SubmitButton disabled={disabled} />
            </div>
            {error && (
                <div className="text-xs text-[var(--error-text)] flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="font-medium">{error}</span>
                </div>
            )}
        </div>
    );
}
