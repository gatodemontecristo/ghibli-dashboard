export const formatMinutesToTime = (minutes: string): string => {
  const hours = Math.floor(Number(minutes) / 60);
  const mins = Number(minutes) % 60;

  const hoursText = hours === 1 ? "1 hour" : `${hours} hours`;
  const minutesText = mins === 1 ? "1 minute" : `${mins} minutes`;

  if (hours === 0) return minutesText;
  if (mins === 0) return hoursText;

  return `${hoursText}, ${minutesText}`;
};
