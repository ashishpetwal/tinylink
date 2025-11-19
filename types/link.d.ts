export interface Link {
    id: string;
    shortcode: string;
    targetUrl: string;
    totalClicks: number;
    lastClicked: Date | null;
}