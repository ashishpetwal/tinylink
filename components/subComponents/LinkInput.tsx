"use client";
import { useState } from "react";
import URLInput from "./URLInput";
import CustomCodeInput from "./CustomCodeInput";
import SubmitButton from "./SubmitButton";

interface LinkInputProps {}

export default function LinkInput({}: LinkInputProps) {
    const [url, setUrl] = useState("");
    const [customCode, setCustomCode] = useState("");
    const [useCustomCode, setUseCustomCode] = useState(false);
    const [errors, setErrors] = useState<{ url?: string; customCode?: string }>({});

    const validateUrl = (url: string): string | undefined => {
        if (!url.trim()) return "URL is required";
        try {
            new URL(url);
            return undefined;
        } catch {
            return "Please enter a valid URL (e.g., https://example.com)";
        }
    };

    const validateCustomCode = (code: string): string | undefined => {
        if (!useCustomCode) return undefined;
        if (!code.trim()) return "Custom code is required when enabled";
        if (!/^[A-Za-z0-9]{6,8}$/.test(code)) {
            return "Custom code must be 6-8 characters long and contain only letters and numbers";
        }
        return undefined;
    };

    const runValidation = (nextUrl: string, nextCustomCode: string, nextUseCustom: boolean) => {
        const urlError = validateUrl(nextUrl);
        const customCodeError = nextUseCustom ? validateCustomCode(nextCustomCode) : undefined;
        setErrors({
            url: urlError,
            customCode: customCodeError,
        });
        return { urlError, customCodeError };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { urlError, customCodeError } = runValidation(url, customCode, useCustomCode);

        if (!urlError && !customCodeError) {
            // onSubmit?.(url, useCustomCode ? customCode : undefined);
            console.log("Submitting:", { url, customCode: useCustomCode ? customCode : undefined });
        }
    };

    const isSubmitDisabled = !!validateUrl(url) || (useCustomCode && !!validateCustomCode(customCode));

    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-[var(--card-bg)] rounded-2xl shadow-xl border border-[var(--card-border)] p-6 sm:p-8">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
                        Shorten Your Link
                    </h2>
                    <p className="text-[var(--muted-text)] text-sm sm:text-base">
                        Create a tiny link in seconds. Customize it or let us generate one for you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* URL Input + Submit Button Row */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <URLInput
                            value={url}
                            onChange={(value) => {
                                setUrl(value);
                                runValidation(value, customCode, useCustomCode);
                            }}
                            onBlur={() => runValidation(url, customCode, useCustomCode)}
                            error={errors.url}
                        />
                        <SubmitButton disabled={isSubmitDisabled} />
                    </div>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[var(--card-border)]"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[var(--card-bg)] px-3 text-[var(--muted-text)] font-medium">
                                Optional
                            </span>
                        </div>
                    </div>

                    {/* Custom Code Section */}
                    <CustomCodeInput
                        enabled={useCustomCode}
                        value={customCode}
                        onToggle={(checked) => {
                            setUseCustomCode(checked);
                            if (!checked) {
                                setCustomCode("");
                                setErrors((prev) => ({ ...prev, customCode: undefined }));
                            } else {
                                runValidation(url, customCode, checked);
                            }
                        }}
                        onChange={(value) => {
                            setCustomCode(value);
                            runValidation(url, value, true);
                        }}
                        onBlur={() => runValidation(url, customCode, true)}
                        error={errors.customCode}
                    />
                </form>
            </div>
        </div>
    );
}