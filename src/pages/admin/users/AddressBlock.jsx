export default function AddressBlock({ address }) {
  if (!address) return null;

  return (
    <div className="text-sm text-gray-600">
      <p>{address.street}</p>
      <p>
        {address.city}, {address.state}
      </p>
    </div>
  );
}
