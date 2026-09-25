"use client";

import UserAvatar from "@/features/people/UserAvatar";
import { getDisplayName } from "@/features/people/userUtils";
import type { UserListItem } from "@/features/people/userTypes";

export default function UserRow({
  user,
  onSelect,
}: {
  user: UserListItem;
  onSelect: (user: UserListItem) => void;
}) {
  const displayName = getDisplayName(user);

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(user)}
        className="group flex w-full flex-col items-center gap-2 rounded-lg p-2 text-center transitionfocus:outline-none"
      >
        <UserAvatar user={user} displayName={displayName} size="large" />
        <span className="w-full min-w-0">
          <span className="block truncate text-base font-semibold text-gray-800">
            {displayName}
          </span>
          <span className="mt-0.5 block truncate text-sm text-gray-500">
            @{user.username}
          </span>
        </span>
      </button>
    </li>
  );
}
