export default function UserActions({ user }) {
  return (
    <div className="flex gap-3 mt-2">
      <button
        className="text-sm text-blue-600 hover:underline"
        onClick={() => console.log('View user', user.id)}
      >
        View Profile
      </button>

      <button
        className="text-sm text-red-600 hover:underline"
        onClick={() => console.log('Disable user', user.id)}
      >
        Disable
      </button>
    </div>
  );
}
