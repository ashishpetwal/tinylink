const { checkDatabaseConnection } = require("../utils/prismaClient");

const healthzController = async(req, res) => {
    const uptime = process.uptime();
    const memUsage = process.memoryUsage();
    
    const healthData = {
        ok: true,
        status: 'healthy',
        uptime: uptime,
        memory: {
            used: memUsage.heapUsed,
            total: memUsage.heapTotal
        },
        cpu: process.cpuUsage().user / 1000000, // Convert microseconds to seconds
        database: await checkDatabaseConnection(),
        lastUpdated: new Date().toISOString()
    };
    
    return res.status(200).json(healthData);
};

module.exports = healthzController;