import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, DollarSign, Settings } from 'lucide-react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useAuth } from '@/store/useAuth';
import { useEffect, useState } from 'react';

export default function DashboardHome() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(useAuth.getState().user);
  }, []);

  return (
    <div className="p-2 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2 sm:gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Overview & quick insights
            </p>
          </div>

          <p className="text-sm text-orange-600 font-medium">
            Welcome back, {user?.name || 'Guest'}!
          </p>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard
          title="Total expenses"
          value="£0"
          icon={DollarSign}
          hint="Stripe later"
        />

        <StatCard
          title="Notifications"
          value="0"
          icon={Bell}
          hint="Real‑time"
        />
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <UserActivityChart />

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-5 space-y-4">
            <h2 className="font-medium">Quick Actions</h2>
            <Button variant="outline" className="w-full">
              ask questions{' '}
            </Button>
            <Button variant="outline" className="w-full">
              ask for catering service
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: _Icon, hint }) {
  const Icon = _Icon;
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  );
}

const userActivityData = [
  { month: 'Jan', value: 2 },
  { month: 'Feb', value: 4 },
  { month: 'Mar', value: 3 },
  { month: 'Apr', value: 6 },
  { month: 'May', value: 5 },
  { month: 'Jun', value: 8 },
];

export function UserActivityChart() {
  return (
    <Card className="rounded-2xl w-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-base">Your Activity</CardTitle>
        <p className="text-sm text-muted-foreground">
          Orders or interactions over time
        </p>
      </CardHeader>
      <CardContent className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%" className="-ml-4 sm:ml-0">
          <LineChart data={userActivityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
