import formatVideoDuration from "../utils/formatVideoDuration";
import VIDEO_VIEWS_FORMATTER from "../utils/formatVideoViews";
import formatTimeAgo from "../utils/formatRelativeTimeAgo";
import { useEffect, useRef, useState } from "react";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == undefined) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch/${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt={title}
          className={`w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-2xl"
          }`}
        />
        <div className="absolute bottom-2.5 right-2.5 rounded p-1 bg-secondary-dark text-white text-sm">
          {formatVideoDuration(duration)}
        </div>
        <video
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "delay-200 opacity-100" : "opacity-0"
          }`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="shrink-0">
          <img
            src={channel.profileUrl}
            alt={channel.name}
            className="w-12 h-12 rounded-full"
          />
        </a>
        <div className="flex flex-col">
          <a href={`/watch/${id}`} className="font-medium">
            {title}
          </a>
          <a
            href={`/@${channel.id}`}
            className="text-sm text-secondary-text font-normal"
          >
            {channel.name}
          </a>
          <span className="text-sm text-secondary-text font-normal">
            {VIDEO_VIEWS_FORMATTER.format(views)} views •{" "}
            {formatTimeAgo(postedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
