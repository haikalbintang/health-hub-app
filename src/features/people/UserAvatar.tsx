"use client";

import Image from "next/image";
import { useState } from "react";

import { getInitials } from "@/features/people/userUtils";
import type { UserListItem } from "@/features/people/userTypes";

export default function UserAvatar({
  user,
  displayName,
  size = "default",
}: {
  user: UserListItem;
  displayName: string;
  size?: "default" | "large";
}) {
  const [imageError, setImageError] = useState(false);
  const isLarge = size === "large";
  const imageSize = isLarge ? 112 : 80;
  const sizeClass = isLarge ? "h-32 w-32" : "h-20 w-20";

  if (!user.image || imageError) {
    return (
      <div
        className={`flex ${sizeClass} shrink-0 items-center justify-center rounded-full bg-orange-200 font-semibold text-orange-700 ring-2 ring-orange-100 transition-all duration-200 hover:ring-4 hover:ring-orange-300 group-hover:ring-4 group-hover:ring-orange-300 ${
          isLarge ? "text-2xl" : "text-xl"
        }`}
      >
        {getInitials(displayName)}
      </div>
    );
  }

  return (
    <Image
      src={user.image}
      alt={`${displayName} profile`}
      width={imageSize}
      height={imageSize}
      sizes={`${imageSize}px`}
      unoptimized
      onError={() => setImageError(true)}
      className={`${sizeClass} shrink-0 rounded-full object-cover ring-2 ring-orange-100 transition-all duration-200 hover:ring-4 hover:ring-orange-200 group-hover:ring-4 group-hover:ring-orange-200`}
    />
  );
}
