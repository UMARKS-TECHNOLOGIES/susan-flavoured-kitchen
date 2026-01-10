import EmptyUsersState from './EmptyUsersState';
import UserCard from './UserCard';
import UsersSkeleton from './UserSkeleton';
import { useUsers } from './useUser';

export default function Users() {
  const { users, loading } = useUsers();

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            {loading ? 'Loading users...' : `${users.length} user(s) found`}
          </p>
        </div>

        {/* Future search / filter placeholder */}
        <input
          type="text"
          placeholder="Search users..."
          className="px-4 py-2 border rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          disabled
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center min-h-[300px]">
          <UsersSkeleton />
        </div>
      )}

      {/* Empty state */}
      {!loading && users.length === 0 && (
        <div className="flex justify-center items-center min-h-[300px]">
          <EmptyUsersState />
        </div>
      )}

      {/* Users Grid */}
      {!loading && users.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {users.map(user => (
            <UserCard key={user._id || user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
