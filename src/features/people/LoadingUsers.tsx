export default function LoadingUsers() {
  return (
    <div className="w-full" role="status" aria-live="polite">
      <div className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-2"
          >
            <div className="h-32 w-32 animate-pulse rounded-full bg-orange-100" />
            <div className="h-4 w-24 animate-pulse rounded bg-orange-100" />
            <div className="h-3 w-16 animate-pulse rounded bg-orange-50" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading users...</span>
    </div>
  );
}
