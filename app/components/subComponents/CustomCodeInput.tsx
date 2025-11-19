"use client";
import { AlertCircle } from "lucide-react";

interface CustomCodeInputProps {
    enabled: boolean;
    value: string;
    onToggle: (enabled: boolean) => void;
    onChange: (value: string) => void;
    onBlur: () => void;
    error?: string;
}

export default function CustomCodeInput({
    enabled,
    value,
    onToggle,
    onChange,
    onBlur,
    error,
}: CustomCodeInputProps) {
    return (
        <div className="space-y-3">
            {/* Toggle Section */}
            <div className="flex items-center gap-3">
                <label htmlFor="useCustomCode" className="relative inline-flex items-center cursor-pointer">
                    <input
                        id="useCustomCode"
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) => onToggle(e.target.checked)}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[var(--input-border)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--input-border-focus)]/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)] shadow-inner"></div>
                </label>
                <div className="flex-1">
                    <label htmlFor="useCustomCode" className="text-sm font-semibold text-[var(--label-text)] cursor-pointer">
                        Use Custom Code
                    </label>
                    <p className="text-xs text-[var(--muted-text)]">Create a memorable short link</p>
                </div>
            </div>

            {/* Input Section */}
            {enabled && (
                <div className="space-y-2 animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="relative">
                        <input
                            id="customCode"
                            type="text"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            onBlur={onBlur}
                            placeholder="abc123"
                            maxLength={8}
                            className={`w-full h-[52px] px-4 pr-16 border-2 rounded-xl focus:ring-4 focus:outline-none transition-all duration-200 font-mono text-[var(--input-text)] placeholder:text-[var(--muted-text)] ${
                                error
                                    ? "border-[var(--error-border)] bg-[var(--error-bg)] focus:border-[var(--error-border)] focus:ring-[var(--error-border)]/20"
                                    : "border-[var(--input-border)] bg-[var(--input-bg)] focus:border-[var(--input-border-focus)] focus:ring-[var(--input-border-focus)]/20 hover:border-[var(--input-border-hover)]"
                            }`}
                        />
                        <div
                            className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded-full ${
                                value.length >= 6
                                    ? "bg-[var(--success-bg)] text-[var(--success-text)]"
                                    : "bg-[var(--input-bg)] text-[var(--muted-text)] border border-[var(--input-border)]"
                            }`}
                        >
                            {value.length}/8
                        </div>
                    </div>
                    {error && (
                        <div className="text-xs text-[var(--error-text)] flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200 pl-1">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            <span className="font-medium">{error}</span>
                        </div>
                    )}
                    {!error && (
                        <p className="text-xs text-[var(--muted-text)] pl-1">
                            6–8 characters, letters & numbers only
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
