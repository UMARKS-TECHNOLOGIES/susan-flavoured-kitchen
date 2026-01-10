import { useAuth } from '@/store/useAuth';
import { Button } from '@/components/ui/button';

export const DangerZone = () => {
  const { logout } = useAuth();

  return (
    <section className="border border-red-200 bg-red-50 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-red-600 mb-2">
        Danger Zone
      </h2>

      <p className="text-sm text-red-500 mb-4">
        These actions are irreversible. Please proceed with caution.
      </p>

      <Button
        variant="outline"
        className="border-red-300 text-red-600"
        onClick={logout}
      >
        Logout
      </Button>
    </section>
  );
};
