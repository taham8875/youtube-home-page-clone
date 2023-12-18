/**
 * This util function takes a number representing a video view count and returns a string
 * representing that view count in a compact format.
 * e.g. "1.2M", "3.4K", "5.6M", "7.8B"
 */

const VIDEO_VIEWS_FORMATTER = new Intl.NumberFormat("en-US", {
  notation: "compact",
});

export default VIDEO_VIEWS_FORMATTER