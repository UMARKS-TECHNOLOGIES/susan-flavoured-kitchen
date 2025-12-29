import { Skeleton } from '@/components/ui/skeleton';

const PageSkeleton = () => {
  return (
    <div className="min-h-screen px-10 py-12 bg-[#fffcfa] flex gap-8">
      <Skeleton className="hidden lg:block w-1/2 h-[500px] rounded-lg" />

      <div className="w-full lg:w-1/2 max-w-md mx-auto space-y-4">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
};

export default PageSkeleton;
