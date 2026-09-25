export const BADGE_COLORS = {
  A: "bg-emerald-600",
  B: "bg-lime-500",
  C: "bg-amber-500",
  D: "bg-orange-500",
  E: "bg-rose-600",
} as const;

export const NUTRI_LETTERS = ["A", "B", "C", "D", "E"] as const;

const LETTER_BY_SCORE = ["E", "D", "C", "B", "A"] as const;

export function getNutriBadge(value: unknown): {
  letter: string;
  color: string;
} {
  const raw =
    value === null || value === undefined
      ? ""
      : typeof value === "number"
        ? String(value)
        : String(value).trim();
  if (!raw) return { letter: "?", color: "bg-gray-400" };

  const num = Number(raw);
  if (!Number.isFinite(num)) return { letter: "?", color: "bg-gray-400" };

  // Nutri score is a value from 1 to 5; clamp anything outside that range.
  const score = Math.round(Math.min(Math.max(num, 1), 5));
  const letter = LETTER_BY_SCORE[score - 1];

  return { letter, color: BADGE_COLORS[letter] };
}