"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import EmptyUsers from "@/features/people/EmptyUsers";
import LoadingUsers from "@/features/people/LoadingUsers";
import UserDetailModal from "@/features/people/UserDetailModal";
import UserRow from "@/features/people/UserRow";
import useFetch from "@/hooks/useFetch";
import { normalizeUsers } from "@/features/people/userUtils";
import type { UserListItem } from "@/features/people/userTypes";

interface AllUsersProps {
  endpoint?: string;
  emptyOnNotFound?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function AllUsers({
  endpoint = "/users",
  emptyOnNotFound = false,
  emptyTitle = "No users found",
  emptyDescription = "Check back later to discover new people.",
}: AllUsersProps) {
  const { data, error, isLoading, refetch } = useFetch<unknown>(endpoint, {
    emptyOnNotFound,
  });
  const [selectedUser, setSelectedUser] = useState<UserListItem | null>(null);
  const users = normalizeUsers(data);

  if (isLoading) return <LoadingUsers />;

  if (error) {
    return (
      <div
        role="alert"
        className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center"
      >
        <p className="text-sm text-red-600">{error}</p>
        <Button
          type="button"
          variant="outline"
          onClick={() => void refetch()}
          className="mt-4 rounded-full border-red-200 text-red-600 hover:bg-red-100"
        >
          Try again
        </Button>
      </div>
    );
  }

  if (users.length === 0) {
    return <EmptyUsers title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="w-full">
      <ul className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
        {users.map((user) => (
          <UserRow key={user.id} user={user} onSelect={setSelectedUser} />
        ))}
      </ul>
      {selectedUser && (
        <UserDetailModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
