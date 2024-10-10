// player.tsx
"use client";

import { Settings, Volume2, VolumeOff } from "lucide-react";
import type { PlayerProps } from "next-video";
import { useRef, useState } from "react";
import { Next, Pause, Play, Previous } from "iconsax-react";
import dynamic from "next/dynamic";
import { formatPlayerTime } from "@/helpers/constants";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function CustomPlayer(props: PlayerProps) {
  let { asset, src, poster, blurDataURL, thumbnailTime, ...rest } = props;
  let config = { file: { attributes: { poster } } };
  const playerRef = useRef<typeof ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);

  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleProgress = (state: any) => {
    setPlayedSeconds(state.playedSeconds);
  };

  // const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const seekTo = parseFloat(event.target.value);
  //   if (playerRef.current) {
  //     playerRef.current.seekTo(seekTo);
  //   }
  // };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <div className="relative group w-full h-full">
      <ReactPlayer
        url={src}
        config={config}
        width="100%"
        height="100%"
        {...rest}
        controls={false}
        playing={playing}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onEnded={() => setPlaying(false)}
      />
      <div className="transition-opacity ease-in-out duration-200 opacity-0 group-hover:opacity-100 flex absolute top-0 flex-col justify-between w-full h-full p-4">
        <button
          className="flex items-center justify-center size-14 rounded-full shadow-2xl border border-gray-200 bg-white self-center my-auto"
          onClick={togglePlayPause}
        >
          {playing ? (
            <Pause variant="Bold" size={28} />
          ) : (
            <Play variant="Bold" size={28} />
          )}
        </button>
        <div className="text-white px-5 py-4 bg-[#5150509c]/45 backdrop-blur absolute bottom-0 right-0 left-0 self-end w-full flex justify-between mt-auto">
          <div className="flex cursor-pointer gap-4 items-center">
            <Previous variant="Bold" size={28} />
            <button onClick={togglePlayPause}>
              {playing ? (
                <Pause variant="Bold" size={28} />
              ) : (
                <Play variant="Bold" size={28} />
              )}
            </button>
            <Next variant="Bold" size={28} />
            <div className="flex items-center gap-2">
              <span>{formatPlayerTime(playedSeconds)}</span>
              <span> / </span>
              <span>{formatPlayerTime(duration)}</span>
            </div>
          </div>

          <div className="flex cursor-pointer gap-4 items-center">
            <div className="flex items-center">
              <button onClick={toggleMute}>
                {muted ? <VolumeOff size={28} /> : <Volume2 size={28} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="h-[6px] cursor-pointer w-[100px] mx-2"
              />
            </div>
            <Settings size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
