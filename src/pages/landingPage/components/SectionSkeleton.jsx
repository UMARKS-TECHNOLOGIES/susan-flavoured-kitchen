const SectionSkeleton = ({ height = "300px" }) => {
  return (
    <div
      className="w-full rounded-lg bg-gray-200 animate-pulse my-8"
      style={{ height }}
    />
  );
};

export default SectionSkeleton;
