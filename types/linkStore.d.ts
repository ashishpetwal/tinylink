import { Link } from "./link";

export interface LinkStore {
    links: Link[];
    setLinks: (links: Link[]) => void;
    addLink: (link: Link) => void;
    deleteLink: (id: string) => void;
}