import { redirectShortLink } from "@/services/shortLink";
import { notFound, redirect } from "next/navigation";

export default async function RedirectPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;

    let targetUrl: string | null = null;

    try {
        const data = await redirectShortLink(code);
        targetUrl = data.targetUrl;
    } catch (error) {
        notFound();
    }

    if (targetUrl) {
        redirect(targetUrl);
    } else {
        notFound();
    }
}