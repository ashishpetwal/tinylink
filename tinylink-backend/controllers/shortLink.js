import { generateRandomShortCode } from "../utils/helper";
import prismaClient from "../utils/prismaClient"

const getAllShortLinks = async (req, res) => {
    try {
        const shortLinks = await prismaClient.link.findMany();
        if (shortLinks.length === 0) {
            return res.status(404).json({ message: 'No short links found' });
        }
        res.status(200).json(shortLinks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getShortLinkByCode = async (req, res) => {
    try {
        const { code } = req.params;
        const shortLink = await prismaClient.link.findUnique({
            where: { shortCode: code }
        });
        if (!shortLink) {
            return res.status(404).json({ message: 'Short link not found' });
        }
        res.status(200).json(shortLink);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createShortLink = async (req, res) => {
    try {
        const { longUrl, shortCode } = req.body;

        if (!longUrl || !shortCode) {
            return res.status(400).json({ message: 'Both longUrl and shortCode are required' });
        }

        if (longUrl.length > 2048) {
            return res.status(400).json({ message: 'longUrl exceeds maximum length of 2048 characters' });
        }

        if (shortCode && !/^[A-Za-z0-9]{6,8}$/.test(shortCode)) {
            return res.status(400).json({ message: 'shortCode must be alphanumeric and between 6 and 8 characters long' });
        }

        if (shortCode) {
            const existingLink = await prismaClient.link.findUnique({
                where: { shortCode }
            });
            if (existingLink) {
                return res.status(409).json({ message: 'shortCode already in use' });
            }
        }

        const newLink = await prismaClient.link.create({
            data: {
                longUrl,
                shortCode: shortCode || generateRandomShortCode()
            }
        });

        res.status(201).json(newLink);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteShortLink = async (req, res) => {
    try {
        const { code } = req.params;

        const existingLink = await prismaClient.link.findUnique({
            where: { shortCode: code }
        });

        if (!existingLink) {
            return res.status(404).json({ message: 'Short link not found' });
        }
        
        await prismaClient.link.delete({
            where: { shortCode: code }
        });

        res.status(200).json({ message: 'Short link deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllShortLinks,
    getShortLinkByCode,
    createShortLink,
    deleteShortLink
}