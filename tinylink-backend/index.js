require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const shortLinkRoutes = require('./routes/shortLink');
const healthzRoutes = require('./routes/healthz');

app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:3000',
            'https://yourdomain.com'
        ];
        
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/links', shortLinkRoutes);

app.use('/api/healthz', healthzRoutes);

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});