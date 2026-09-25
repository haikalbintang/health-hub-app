"use client";

import {
  Eye,
  Facebook,
  Instagram,
  MapPin,
  Music2,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAvatar from "@/features/people/UserAvatar";
import {
  formatCount,
  getDisplayName,
  isHttpUrl,
} from "@/features/people/userUtils";
import type { UserListItem } from "@/features/people/userTypes";

export default function UserCard({ user }: { user: UserListItem }) {
  const displayName = getDisplayName(user);
  const socials = [
    {
      label: "Facebook",
      href: user.social_facebook,
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: user.social_instagram,
      Icon: Instagram,
    },
    {
      label: "TikTok",
      href: user.social_tiktok,
      Icon: Music2,
    },
  ].filter((social) => isHttpUrl(social.href));
  const stats = [
    {
      label: "Following",
      value: user.total_following,
      Icon: UserPlus,
    },
    {
      label: "Followers",
      value: user.total_follower,
      Icon: Users,
    },
    {
      label: "Views",
      value: user.view_count,
      Icon: Eye,
    },
  ];

  return (
    <Card className="group flex h-full flex-col border-orange-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="flex-row items-start gap-4 pb-4">
        <UserAvatar user={user} displayName={displayName} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <CardTitle className="truncate text-lg text-gray-900">
                {displayName}
              </CardTitle>
              <p className="truncate text-sm text-gray-500">@{user.username}</p>
            </div>
            {user.role && (
              <span className="shrink-0 rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-700">
                {user.role}
              </span>
            )}
          </div>
          {user.location && (
            <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin size={14} className="shrink-0 text-orange-400" />
              <span className="truncate">{user.location}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="min-h-[3.5rem] break-words text-sm leading-relaxed text-gray-600">
          {user.bio || "No bio yet."}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-orange-50 p-2">
          {stats.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="flex min-w-0 flex-col items-center gap-1 rounded-lg px-1 py-2 text-center"
            >
              <Icon size={16} className="text-orange-500" />
              <span className="text-sm font-bold text-gray-800">
                {formatCount(value)}
              </span>
              <span className="truncate text-[10px] font-medium uppercase tracking-wide text-gray-500">
                {label}
              </span>
            </div>
          ))}
        </div>

        {socials.length > 0 && (
          <div className="mt-4 flex items-center gap-2 border-t border-orange-100 pt-4">
            <span className="mr-auto text-xs font-medium uppercase tracking-wide text-gray-400">
              Social links
            </span>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${displayName} on ${label}`}
                className="rounded-lg p-2 text-gray-400 transition hover:bg-orange-50 hover:text-orange-600"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
