import { KeyboardEvent } from "react";

/** Arrow / Home / End navigation for a WAI-ARIA tablist; moves focus and selection together. */
export function onTabListKeyDown(event: KeyboardEvent<HTMLElement>, count: number, active: number, select: (index: number) => void) {
  const keys: Record<string, number> = {
    ArrowRight: active + 1, ArrowDown: active + 1,
    ArrowLeft: active - 1, ArrowUp: active - 1,
    Home: 0, End: count - 1,
  };
  if (!(event.key in keys)) return;
  event.preventDefault();
  const next = (keys[event.key] + count) % count;
  select(next);
  event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
