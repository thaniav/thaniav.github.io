export type Season = "" | "halloween" | "christmas" | "new-year";

export function seasonForDate(date: Date): Season {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if (month === 10 && day >= 20) return "halloween";
  if (month === 12 && day <= 26) return "christmas";
  if ((month === 12 && day === 31) || (month === 1 && day <= 2))
    return "new-year";
  return "";
}

export function previewSeason(value: string | undefined): Season | undefined {
  if (value === "normal") return "";
  if (value === "halloween" || value === "christmas" || value === "new-year")
    return value;
  return undefined;
}
