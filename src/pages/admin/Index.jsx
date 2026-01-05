import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, TrendingUp, Users, DollarSign, Settings } from 'lucide-react';
export default function Index() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Overview & quick insights
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value="₦0"
          icon={DollarSign}
          hint="Stripe later"
        />
        <StatCard
          title="Active Users"
          value="0"
          icon={Users}
          hint="Auth system"
        />
        {/* <StatCard
          title="Growth"
          value="0%"
          icon={TrendingUp}
          hint="Analytics"
        /> */}
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
        <Card className="lg:col-span-2">
          <CardContent className="p-5 space-y-4">
            <h2 className="font-medium">Recent Activity</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• User signed up (future)</p>
              <p>• Payment completed (future)</p>
              <p>• Settings updated (future)</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-5 space-y-4">
            <h2 className="font-medium">Quick Actions</h2>
            <Button className="w-full">Create Item</Button>
            <Button variant="outline" className="w-full">
              View Reports
            </Button>
            <Button variant="outline" className="w-full">
              Manage Users
            </Button>

            <Button variant="outline" className="w-full">
              view all orders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder Chart */}
      <Card>
        <CardContent className="p-6">
          <h2 className="font-medium mb-2">Analytics</h2>
          <div className="h-40 flex items-center justify-center text-muted-foreground text-sm">
            Chart goes here (Recharts later)
          </div>
        </CardContent>
      </Card>
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
