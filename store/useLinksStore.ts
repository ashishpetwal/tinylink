import { Link } from '@/types/link';
import { LinkStore } from '@/types/linkStore';
import { create } from 'zustand';

export const useLinksStore = create<LinkStore>((set) => ({
    links: [],
    setLinks: (links: Link[]) => set({ links }),
    addLink: (link: Link) => set((state) => ({ links: [link, ...state.links] })),
    deleteLink: (id: string) => set((state) => ({ links: state.links.filter(link => link.id !== id) })),
}));

