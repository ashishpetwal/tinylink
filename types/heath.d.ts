export interface HealthData {
    status: 'healthy' | 'warning' | 'critical'
    uptime: number
    memory: { used: number; total: number }
    cpu: number
    database: 'connected' | 'disconnected'
    lastUpdated: string
}