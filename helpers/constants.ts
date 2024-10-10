export enum LayoutValue {
  Grid,
  Line,
}

export const formatPlayerTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return h > 0
    ? `${h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
    : `${m}:${s < 10 ? `0${s}` : s}`;
};
