import EmptyUsersState from './EmptyUsersState';
import UserCard from './UserCard';
import UsersSkeleton from './UserSkeleton';
import { useUsers } from './useUser';
import { Search } from 'lucide-react';

export default function Users() {
  const { users, loading } = useUsers();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Matured Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-6 border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            {loading ? 'Loading...' : `Managing ${users.length} registered user${users.length === 1 ? '' : 's'}`}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors shadow-sm disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
            disabled
          />
        </div>
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
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 auto-rows-fr">
          {users.map(user => (
            <UserCard key={user._id || user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
