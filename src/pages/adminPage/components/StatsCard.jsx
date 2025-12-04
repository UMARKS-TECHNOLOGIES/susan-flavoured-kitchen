import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const StatsCard = ({ title, value, bgColor, icon: Icon }) => {
  return (
      <Card className={`${bgColor}`}>
          <CardContent className="p-6">
              <div className="flex items-center justify-between">
                  <div>
                      <p className="text-sm text-gray-600 mb-2">{title}</p>
                      <p className="text-4xl font-bold">{value}</p>
                  </div>
                  {Icon && <Icon className="w-12 h-12 text-gray-400 opacity-50" />}
              </div>
          </CardContent>
      </Card>
  )
}

export default StatsCard