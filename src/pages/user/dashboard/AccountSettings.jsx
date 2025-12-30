import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { API } from '@/lib/endpoints';
import api from '@/lib/api';

const AccountSettings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: ''
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  //fetch user info
  useEffect(() => {
    const userData = async () => {
      const response = await api.get(`${API.USER}/me`);

      if (response.status !== 200) return;
      const data = response.data.data;

      setProfile({
        name: data.name,
        email: data.email,
      });
    };
    userData();
  }, []);

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      {/* PROFILE */}
      <section className="bg-white border rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>

        <div className="grid gap-4">
          <Input
            label="Full Name"
            value={profile.name}
            onChange={e => setProfile({ ...profile, name: e.target.value })}
          />

          <Input
            label="Email Address"
            type="email"
            value={profile.email}
            onChange={e => setProfile({ ...profile, email: e.target.value })}
            disabled
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Save Changes
          </Button>
        </div>
      </section>

      {/* PASSWORD */}
      <section className="bg-white border rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>

        <div className="grid gap-4">
          <Input
            label="Current Password"
            type="password"
            value={password.current}
            onChange={e =>
              setPassword({ ...password, current: e.target.value })
            }
          />
          <Input
            label="New Password"
            type="password"
            value={password.new}
            onChange={e => setPassword({ ...password, new: e.target.value })}
          />
          <Input
            label="Confirm New Password"
            type="password"
            value={password.confirm}
            onChange={e =>
              setPassword({ ...password, confirm: e.target.value })
            }
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Update Password
          </Button>
        </div>
      </section>

      {/* DANGER ZONE */}
      <section className="border border-red-200 bg-red-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h2>
        <p className="text-sm text-red-500 mb-4">
          These actions are irreversible. Please proceed with caution.
        </p>

        <Separator className="mb-4" />

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="border-red-300 text-red-600">
            Logout
          </Button>

          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Delete Account
          </Button>
        </div>
      </section>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

export default AccountSettings;
