import React, { useState } from 'react';
import { Play, ChevronDown, ChevronRight } from 'lucide-react';
import { Video } from '../types';

interface VideoPlayerProps {
  videos: Video[];
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos, title = 'Video Resources' }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(videos.length > 0 ? videos[0] : null);
  const [expanded, setExpanded] = useState(false);

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="card bg-base-300 overflow-hidden">
        {/* Video Player */}
        {selectedVideo && (
          <div className="bg-black aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {/* Video Info */}
        {selectedVideo && (
          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-base-content text-lg mb-1">
                {selectedVideo.title}
              </h3>
              <p className="text-sm text-base-content/60">
                by <span className="font-medium text-info">{selectedVideo.creator}</span> · {selectedVideo.duration}
              </p>
            </div>

            {selectedVideo.keyPoints && selectedVideo.keyPoints.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-base-content mb-2">Key Points</h4>
                <ul className="space-y-1">
                  {selectedVideo.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-sm text-base-content/70 flex items-start gap-2">
                      <span className="text-info mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {videos.length > 1 && (
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-focus underline inline-flex items-center gap-1"
              >
                Watch on YouTube ↗
              </a>
            )}
          </div>
        )}
      </div>

      {/* Video List */}
      {videos.length > 1 && (
        <div className="card bg-base-300">
          <button
            className="w-full flex items-center justify-between p-4 text-left hover:bg-base-200 transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            <h4 className="font-semibold text-base-content flex items-center gap-2">
              <Play size={16} className="text-info" />
              More Videos ({videos.length})
            </h4>
            {expanded ? (
              <ChevronDown size={18} className="text-base-content/40" />
            ) : (
              <ChevronRight size={18} className="text-base-content/40" />
            )}
          </button>

          {expanded && (
            <div className="px-4 pb-4 space-y-2 border-t border-base-100/20 pt-2">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`w-full p-3 rounded-lg text-left transition-colors text-sm ${
                    selectedVideo?.id === video.id
                      ? 'bg-info/20 border border-info'
                      : 'bg-base-100/50 hover:bg-base-100'
                  }`}
                >
                  <p className="font-medium text-base-content truncate">
                    {video.title}
                  </p>
                  <p className="text-xs text-base-content/60 mt-0.5">
                    {video.creator} · {video.duration}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
