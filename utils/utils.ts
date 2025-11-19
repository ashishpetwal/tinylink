export const getStatusColor = (status: string) => {
    switch (status) {
        case 'healthy': return 'text-green-600 bg-green-100'
        case 'warning': return 'text-yellow-600 bg-yellow-100'
        case 'critical': return 'text-red-600 bg-red-100'
        default: return 'text-gray-600 bg-gray-100'
    }
}

export const formatUptime = (uptimeInSeconds: number) => {
    const days = Math.floor(uptimeInSeconds / 86400);
    const hours = Math.floor((uptimeInSeconds % 86400) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    
    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''}, ${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    
    if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
    
    if (minutes > 0) {
        return `${minutes} min${minutes > 1 ? 's' : ''}`;
    }
    
    return 'Less than a minute';
}

export const formatDate = (dateString: string | null) => {
    if (dateString === null) {
        return 'Never';
    }
    
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}