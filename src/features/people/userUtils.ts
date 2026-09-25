import type { UserListItem } from "@/features/people/userTypes";

export function normalizeUsers(payload: unknown): UserListItem[] {
  if (Array.isArray(payload)) return payload as UserListItem[];

  if (!payload || typeof payload !== "object") return [];

  const record = payload as Record<string, unknown>;
  const candidates = [
    record.data,
    record.users,
    record.following,
    record.followers,
    record.results,
    record.items,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate as UserListItem[];

    if (candidate && typeof candidate === "object") {
      const nestedRecord = candidate as Record<string, unknown>;
      const nestedKeys = ["users", "following", "followers"];

      for (const key of nestedKeys) {
        if (Array.isArray(nestedRecord[key])) {
          return nestedRecord[key] as UserListItem[];
        }
      }
    }
  }

  return [];
}

export function getDisplayName(user: UserListItem) {
  return (
    [user.first_name, user.last_name].filter(Boolean).join(" ").trim() ||
    user.username ||
    "Unknown user"
  );
}

export function getInitials(displayName: string) {
  return (
    displayName
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U"
  );
}

export function formatCount(value: number | null | undefined) {
  return new Intl.NumberFormat().format(value ?? 0);
}

export function isHttpUrl(value: unknown): value is string {
  if (typeof value !== "string" || !value.trim()) return false;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
