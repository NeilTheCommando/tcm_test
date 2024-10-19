import React, { useState } from 'react';
import { Laptop, Plus, RefreshCw } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  status: 'online' | 'offline';
  lastActive: string;
}

const DeviceManagement: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([
    { id: '1', name: 'Device 001', status: 'online', lastActive: '2023-03-15 10:30:00' },
    { id: '2', name: 'Device 002', status: 'offline', lastActive: '2023-03-14 15:45:00' },
    { id: '3', name: 'Device 003', status: 'online', lastActive: '2023-03-15 09:15:00' },
  ]);

  const [showAddDevice, setShowAddDevice] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');

  const handleAddDevice = () => {
    if (newDeviceName) {
      const newDevice: Device = {
        id: (devices.length + 1).toString(),
        name: newDeviceName,
        status: 'online',
        lastActive: new Date().toISOString(),
      };
      setDevices([...devices, newDevice]);
      setNewDeviceName('');
      setShowAddDevice(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Device Management</h1>
        <button
          onClick={() => setShowAddDevice(true)}
          className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Device
        </button>
      </div>

      {showAddDevice && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Add New Device</h2>
          <div className="flex items-center">
            <input
              type="text"
              value={newDeviceName}
              onChange={(e) => setNewDeviceName(e.target.value)}
              placeholder="Enter device name"
              className="flex-grow mr-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <button
              onClick={handleAddDevice}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {devices.map((device) => (
            <li key={device.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <Laptop className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <div className="ml-4">
                      <p className="font-medium text-indigo-600 truncate">{device.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          device.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {device.status}
                        </span>
                        <span className="ml-2">Last active: {device.lastActive}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RefreshCw className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeviceManagement;