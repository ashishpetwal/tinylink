import { Link } from "@/types/link";
import { formatDate } from "@/utils/utils";
import { Copy, ExternalLink, Trash2 } from "lucide-react";

export default function MobileCardList({ links, onDelete }: { links: Link[]; onDelete: (id: string) => void }) {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="md:hidden space-y-4">
            {links.map((link) => (
                <div 
                    key={link.id} 
                    className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="bg-[var(--input-bg)] px-2 py-1 rounded text-[var(--primary)] font-medium text-sm">
                                    {link.shortcode}
                                </code>
                                <button 
                                    onClick={() => handleCopy(link.shortcode)}
                                    className="text-[var(--muted-text)] hover:text-[var(--primary)] transition-colors"
                                    title="Copy short code"
                                >
                                    <Copy className="h-4 w-4" />
                                </button>
                            </div>
                            <a 
                                href={link.targetUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-[var(--muted-text)] hover:text-[var(--primary)] flex items-center gap-1 group break-all"
                            >
                                <span className="line-clamp-2">{link.targetUrl}</span>
                                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                        <button
                            onClick={() => onDelete(link.id)}
                            className="text-[var(--error-text)] hover:text-[var(--error-border)] ml-3 p-2 hover:bg-[var(--error-bg)] rounded transition-colors"
                            title="Delete link"
                        >
                            <Trash2 className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[var(--muted-text)] pt-3 border-t border-[var(--card-border)]">
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-[var(--foreground)]">{link.totalClicks}</span>
                            <span>clicks</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[var(--muted-text)]">Last:</span>
                            <span className="font-medium text-[var(--foreground)]">
                                {formatDate(link.lastClicked)}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}