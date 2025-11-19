const crypto = require('crypto');

const generateRandomShortCode = () => {
    const length = Math.floor(Math.random() * 3) + 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    
    // Generate cryptographically secure random bytes
    const randomBytes = crypto.randomBytes(length);
    
    for (let i = 0; i < length; i++) {
        // Use modulo to map byte values to character set
        const randomIndex = randomBytes[i] % charactersLength;
        result += characters[randomIndex];
    }
    
    return result;
}

module.exports = {
    generateRandomShortCode
}