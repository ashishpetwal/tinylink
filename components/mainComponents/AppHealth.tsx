import { HealthData } from '@/types/heath'
import { formatUptime, getStatusColor } from '@/utils/utils'
import { Clock, Cpu, Database, HardDrive } from 'lucide-react'

interface AppHealthProps {
    healthData: HealthData | null
}

export default function AppHealth({ healthData }: AppHealthProps) {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">System Health Monitor</h1>

                <div className="mb-8">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(healthData?.status || 'unknown')}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${healthData?.status === 'healthy' ? 'bg-green-600' : healthData?.status === 'warning' ? 'bg-yellow-600' : 'bg-red-600'}`}></div>
                        System Status: {healthData?.status?.toUpperCase() || 'UNKNOWN'}
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Uptime</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {formatUptime(healthData?.uptime || 0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Cpu className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">CPU Usage</p>
                                <p className="text-2xl font-semibold text-gray-900">{healthData?.cpu ? healthData.cpu.toFixed(2) : '0.00'}%</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <HardDrive className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Memory</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {healthData ? Math.round((healthData.memory?.used || 0) / (healthData.memory?.total || 1) * 100) : 0}%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className={`p-2 rounded-lg ${healthData?.database === 'connected' ? 'bg-green-100' : 'bg-red-100'}`}>
                                <Database className={`w-6 h-6 ${healthData?.database === 'connected' ? 'text-green-600' : 'text-red-600'}`} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Database</p>
                                <p className={`uppercase text-sm font-semibold ${healthData?.database === 'connected' ? 'text-green-600' : 'text-red-600'}`}>
                                    {healthData?.database || 'Unknown'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Last Updated */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Last updated: {healthData?.lastUpdated ? new Date(healthData.lastUpdated).toLocaleString() : 'Never'}
                    </p>
                </div>
            </div>
        </div>
    )
}