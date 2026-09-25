import { Users } from "lucide-react";

export default function EmptyUsers({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      role="status"
      className="flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 px-6 py-16 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
        <Users size={28} className="text-orange-500" />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-1 max-w-sm text-sm text-gray-500">{description}</p>
    </div>
  );
}
