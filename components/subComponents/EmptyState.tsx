export default function EmptyState({ hasSearchTerm }: { hasSearchTerm: boolean }) {
    return (
        <div className="text-center py-12 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)] shadow-sm">
            <p className="text-[var(--muted-text)] text-lg">No links found</p>
            <p className="text-[var(--muted-text)] text-sm mt-2">
                {hasSearchTerm ? 'Try adjusting your search' : 'No short links available'}
            </p>
        </div>
    );
}