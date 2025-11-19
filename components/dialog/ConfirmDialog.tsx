export default function ConfirmDialog({ 
    isOpen, 
    onConfirm, 
    onCancel,
    title = "Confirm Deletion",
    message = "Are you sure you want to delete this link? This action cannot be undone."
}: {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title?: string;
    message?: string;
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[var(--card-bg)] rounded-lg p-6 w-full max-w-md shadow-2xl border border-[var(--card-border)]">
                <h3 className="text-lg font-semibold mb-3 text-[var(--foreground)]">{title}</h3>
                <p className="text-[var(--muted-text)] mb-6">{message}</p>
                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="bg-[var(--input-bg)] text-[var(--foreground)] border border-[var(--card-border)] px-4 py-2.5 rounded-lg hover:bg-[var(--input-border)] flex-1 transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-[var(--error-text)] text-white px-4 py-2.5 rounded-lg hover:bg-[var(--error-border)] flex-1 transition-colors font-medium"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}