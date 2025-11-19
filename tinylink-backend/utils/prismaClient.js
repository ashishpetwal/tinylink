const { PrismaClient } = require('@prisma/client');

const prismaClient = new PrismaClient();

const checkDatabaseConnection = async () => {
    try {
        await prismaClient.$queryRaw`SELECT 1`;
        return 'connected';
    } catch (error) {
        return 'disconnected';
    }
};

module.exports = { prismaClient, checkDatabaseConnection };