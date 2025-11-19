export const getStatusColor = (status: string) => {
    switch (status) {
        case 'healthy': return 'text-green-600 bg-green-100'
        case 'warning': return 'text-yellow-600 bg-yellow-100'
        case 'critical': return 'text-red-600 bg-red-100'
        default: return 'text-gray-600 bg-gray-100'
    }
}