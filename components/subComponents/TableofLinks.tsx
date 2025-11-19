'use client';

import { useState } from 'react';
import { Link } from '@/types/link';
import DesktopTable from '../tables/DesktopTable';
import SearchBar from './SearchBar';
import EmptyState from './EmptyState';
import MobileCardList from '../tables/MobileCardList';
import ConfirmDialog from '../dialog/ConfirmDialog';

// Main Component
export function TableofLinks() {
    const [links, setLinks] = useState<Link[]>([
        {
            id: '1',
            shortCode: 'abc123',
            targetUrl: 'https://example.com',
            totalClicks: 42,
            lastClicked: new Date('2024-01-15T10:30:00Z')
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; linkId: string | null }>({
        isOpen: false,
        linkId: null
    });

    const filteredLinks = links.filter(link =>
        link.shortCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.targetUrl.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteClick = (id: string) => {
        setDeleteConfirm({ isOpen: true, linkId: id });
    };

    const handleConfirmDelete = () => {
        if (deleteConfirm.linkId) {
            setLinks(links.filter(link => link.id !== deleteConfirm.linkId));
        }
        setDeleteConfirm({ isOpen: false, linkId: null });
    };

    const handleCancelDelete = () => {
        setDeleteConfirm({ isOpen: false, linkId: null });
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
            {/* Header with search */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>

            {/* Confirm Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirm.isOpen}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />

            {/* Desktop and Mobile Views */}
            {filteredLinks.length > 0 ? (
                <>
                    <DesktopTable links={filteredLinks} onDelete={handleDeleteClick} />
                    <MobileCardList links={filteredLinks} onDelete={handleDeleteClick} />
                </>
            ) : (
                <EmptyState hasSearchTerm={searchTerm.length > 0} />
            )}
        </div>
    );
}