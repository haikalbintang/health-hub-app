"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

import Modal from "@/features/navbar/Modal";
import UserCard from "@/features/people/UserCard";
import type { UserListItem } from "@/features/people/userTypes";

export default function UserDetailModal({
  user,
  onClose,
}: {
  user: UserListItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Modal setShowModal={() => onClose()}>
      <div className="max-h-[90vh] w-[min(92vw,44rem)] overflow-y-auto p-4 sm:p-6 sm:pr-14">
        <UserCard user={user} />
        <div className="mt-4 flex justify-end border-t border-orange-100 pt-4">
          <Link
            href={`/profile-detail/${user.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            View profile
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Modal>
  );
}
