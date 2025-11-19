const prismaClient = require('../utils/prismaClient');
const { generateRandomShortCode } = require('../utils/helper');

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
            where: { shortcode: code }
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
        const { originalUrl, shortcode } = req.body;

        if (!originalUrl) {
            return res.status(400).json({ message: 'originalUrl is required' });
        }

        if (originalUrl.length > 2048) {
            return res.status(400).json({ message: 'originalUrl exceeds maximum length of 2048 characters' });
        }

        if (shortcode && !/^[A-Za-z0-9]{6,8}$/.test(shortcode)) {
            return res.status(400).json({ message: 'shortcode must be alphanumeric and between 6 and 8 characters long' });
        }

        if (shortcode) {
            const existingLink = await prismaClient.link.findUnique({
                where: { shortcode: shortcode }
            });
            if (existingLink) {
                return res.status(409).json({ message: 'shortcode already in use' });
            }
        }

        const newLink = await prismaClient.link.create({
            data: {
                targetUrl: originalUrl,
                shortcode: shortcode || generateRandomShortCode()
            }
        });

        res.status(201).json(newLink);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteShortLink = async (req, res) => {
    try {
        const { code } = req.params;

        const existingLink = await prismaClient.link.findUnique({
            where: { shortcode: code }
        });

        if (!existingLink) {
            return res.status(404).json({ message: 'Short link not found' });
        }
        
        await prismaClient.link.delete({
            where: { shortcode: code }
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