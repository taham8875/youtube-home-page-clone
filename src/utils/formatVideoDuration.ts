/**
 * This util function takes a number representing a video duration in seconds and returns a string
 * representing that duration in the format "HH:MM:SS" or "MM:SS" if the duration is less than an hour.
 * e.g. "01:23:45", "12:34", "0:45", "0:05"
 */

const LEADING_ZERO_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumIntegerDigits: 2,
});

const formatVideoDuration = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(
      minutes
    )}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
  } else {
    return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
  }
};

export default formatVideoDuration;
