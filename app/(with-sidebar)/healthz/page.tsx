'use client'

import { useState, useEffect } from 'react'
import AppHealth from '../../../components/mainComponents/AppHealth'
import { HealthData } from '@/types/heath'
import { getHealthStatus } from '@/services/health'

export default function HealthPage() {
    const [healthData, setHealthData] = useState<HealthData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchHealthData = async () => {
            try {
                const response = await getHealthStatus();
                setHealthData(response)
            } catch (error) {
                console.error('Failed to fetch health data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchHealthData()
        const interval = setInterval(fetchHealthData, 30000)

        return () => clearInterval(interval)
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    return (
        <AppHealth healthData={healthData} />
    )
}
