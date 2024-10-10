"use client";

import { Settings, Volume2, VolumeOff } from "lucide-react";
import type { PlayerProps } from "next-video";
import { useState } from "react";
import { Next, Pause, Play, Previous } from "iconsax-react";
import dynamic from "next/dynamic";
import { formatPlayerTime } from "@/helpers/constants";
import { OnProgressProps } from "react-player/base";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function CustomPlayer(props: PlayerProps) {
  const { src, poster, ...rest } = props;
  const config = { file: { attributes: { poster } } };
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

  const handleProgress = (playedSeconds: number) => {
    setPlayedSeconds(playedSeconds);
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
        onProgress={(state: OnProgressProps) =>
          handleProgress(state.playedSeconds)
        }
        onDuration={handleDuration}
        onEnded={() => setPlaying(false)}
      />
      <div className="transition-opacity ease-in-out duration-200 opacity-0 group-hover:opacity-100 flex absolute top-0 flex-col justify-between w-full h-full p-4">
        <button
          className="flex items-center justify-center size-14 rounded-full shadow-2xl border border-gray-200 bg-white self-center my-auto"
          onClick={togglePlayPause}
        >
          {playing ? <Pause variant="Bold" /> : <Play variant="Bold" />}
        </button>
        <div className="text-white px-3 lg:px-5 py-2 lg:py-4 bg-[#5150509c]/45 backdrop-blur absolute bottom-0 right-0 left-0 self-end w-full flex justify-between mt-auto">
          <div className="flex cursor-pointer gap-2 md:gap-4 items-center">
            <Previous variant="Bold" />
            <button onClick={togglePlayPause}>
              {playing ? <Pause variant="Bold" /> : <Play variant="Bold" />}
            </button>
            <Next variant="Bold" />
            <div className="flex items-center gap-1">
              <span>{formatPlayerTime(playedSeconds)}</span>
              <span> / </span>
              <span>{formatPlayerTime(duration)}</span>
            </div>
          </div>

          <div className="flex cursor-pointer gap-2 md:gap-4 items-center">
            <div className="flex items-center">
              <button onClick={toggleMute}>
                {muted ? <VolumeOff /> : <Volume2 />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="h-[6px] cursor-pointer w-14 md:w-[100px] mx-2"
              />
            </div>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
