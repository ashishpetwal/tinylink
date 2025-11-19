import { Link } from "@/types/link";
import { Copy, ExternalLink, Trash2 } from "lucide-react";

export default function DesktopTable({ links, onDelete }: { links: Link[]; onDelete: (id: string) => void }) {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="hidden md:block bg-[var(--card-bg)] rounded-lg shadow-lg border border-[var(--card-border)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[var(--card-border)]">
                    <thead className="bg-[var(--input-bg)]">
                        <tr>
                            <th className="px-6 py-3.5 text-left text-xs font-semibold text-[var(--label-text)] uppercase tracking-wider">
                                Short Code
                            </th>
                            <th className="px-6 py-3.5 text-left text-xs font-semibold text-[var(--label-text)] uppercase tracking-wider">
                                Target URL
                            </th>
                            <th className="px-6 py-3.5 text-left text-xs font-semibold text-[var(--label-text)] uppercase tracking-wider">
                                Clicks
                            </th>
                            <th className="px-6 py-3.5 text-left text-xs font-semibold text-[var(--label-text)] uppercase tracking-wider">
                                Last Clicked
                            </th>
                            <th className="px-6 py-3.5 text-left text-xs font-semibold text-[var(--label-text)] uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[var(--card-bg)] divide-y divide-[var(--card-border)]">
                        {links.map((link) => (
                            <tr key={link.id} className="hover:bg-[var(--input-bg)] transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--foreground)]">
                                    <div className="flex items-center gap-2">
                                        <code className="bg-[var(--input-bg)] px-2 py-1 rounded text-[var(--primary)]">
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
                                </td>
                                <td className="px-6 py-4 text-sm text-[var(--muted-text)] max-w-xs">
                                    <a 
                                        href={link.targetUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:text-[var(--primary)] flex items-center gap-1 group truncate"
                                    >
                                        <span className="truncate">{link.targetUrl}</span>
                                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--foreground)]">
                                    <span className="bg-[var(--input-bg)] px-3 py-1 rounded-full font-medium">
                                        {link.totalClicks}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--muted-text)]">
                                    {link.lastClicked ? link.lastClicked.toLocaleDateString() : 'Never'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => onDelete(link.id)}
                                        className="cursor-pointer text-[var(--error-text)] hover:text-[var(--error-border)] transition-colors p-1 hover:bg-[var(--error-bg)] rounded"
                                        title="Delete link"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}