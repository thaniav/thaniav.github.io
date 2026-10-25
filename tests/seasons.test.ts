import assert from "node:assert/strict";
import { test } from "node:test";
import { seasonForDate, previewSeason } from "../src/lib/seasons.ts";

test("season boundaries use the visitor’s local calendar date", () => {
  const cases = [
    [2026, 10, 19, ""],
    [2026, 10, 20, "halloween"],
    [2026, 10, 31, "halloween"],
    [2026, 11, 1, ""],
    [2026, 11, 30, ""],
    [2026, 12, 1, "christmas"],
    [2026, 12, 26, "christmas"],
    [2026, 12, 27, ""],
    [2026, 12, 30, ""],
    [2026, 12, 31, "new-year"],
    [2027, 1, 1, "new-year"],
    [2027, 1, 2, "new-year"],
    [2027, 1, 3, ""],
    [2027, 7, 1, ""],
  ] as const;
  for (const [year, month, day, expected] of cases) {
    assert.equal(seasonForDate(new Date(year, month - 1, day)), expected);
  }
});

test("local previews accept named themes and an explicit normal theme", () => {
  for (const season of ["halloween", "christmas", "new-year"] as const) {
    assert.equal(previewSeason(season), season);
  }
  assert.equal(previewSeason("normal"), "");
  assert.equal(previewSeason(""), undefined);
  assert.equal(previewSeason(undefined), undefined);
  assert.equal(previewSeason("unknown"), undefined);
});
