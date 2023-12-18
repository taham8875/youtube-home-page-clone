import { videos } from "../data/videos";
import VideoGridItem from "../components/VideoGridItem";

const VideoGridItems = () => {
  return (
    <div className="grid gap-4 col-span-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((video) => (
          <VideoGridItem key={video.id} {...video} />
        ))}
    </div>
  );
};

export default VideoGridItems;
