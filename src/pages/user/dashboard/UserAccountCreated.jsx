import React from 'react';
import {
  formatDate,
  memberDuration,
  joinedAgo,
} from './accountDates';

const UserAccountCreated = ({ user }) => {
  if (!user?.createdAt) return null;

  return (
    <section className="mt-10 flex justify-center">
      <div className="w-full max-w-md border-t pt-6 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Account Information
        </h2>

        <div className="space-y-1">
          <p className="text-sm text-gray-500">Account created</p>

          <p className="text-base font-medium text-gray-800">
            {formatDate(user.createdAt)}
          </p>

          <p className="text-sm text-gray-600">
            {memberDuration(user.createdAt)}
          </p>

          <p className="text-xs text-gray-400">
            {joinedAgo(user.createdAt)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserAccountCreated;