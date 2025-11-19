export interface Link {
    id: string;
    shortCode: string;
    targetUrl: string;
    totalClicks: number;
    lastClicked: Date | null;
}