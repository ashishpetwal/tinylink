"use client";
import { Zap } from "lucide-react";

interface SubmitButtonProps {
    disabled: boolean;
    loading?: boolean;
}

export default function SubmitButton({ disabled, loading = false }: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={disabled || loading}
            className="w-full sm:w-auto h-[52px] bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold px-8 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-[var(--primary)]/30 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group whitespace-nowrap"
            style={{
                boxShadow: disabled ? "none" : "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
            }}
        >
            <Zap className={`w-5 h-5 transition-transform ${loading ? "animate-spin" : "group-hover:scale-110"}`} />
            <span>{loading ? "Shortening..." : "Shorten Link"}</span>
        </button>
    );
}
