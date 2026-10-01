import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CourseVideo {
  id: string;           // YouTube video ID (the part after ?v= or youtu.be/)
  title: string;
  duration: string;     // e.g. "12:34"
  description?: string;
}

export interface CourseModule {
  moduleId: string;
  moduleName: string;
  videos: CourseVideo[];
}

// ─── Course Library ──────────────────────────────────────────────────────────
// Update these YouTube IDs with real videos. To find the ID:
//   https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  ID = dQw4w9WgXcQ
//   https://youtu.be/dQw4w9WgXcQ                 →  ID = dQw4w9WgXcQ

export const COURSE_VIDEO_LIBRARY: Record<string, CourseModule[]> = {
  "linux-fundamentals": [
    {
      moduleId: "linux-basics",
      moduleName: "Linux Basics",
      videos: [
        {
          id: "ROjZy1WbCIA",
          title: "Linux Command Line Basics",
          duration: "11:45",
          description: "Navigation, file system, and essential commands",
        },
        {
          id: "s3ii48qYBxA",
          title: "File Permissions & Users",
          duration: "14:22",
          description: "chmod, chown, sudo, and user management",
        },
        {
          id: "DP05l_BFQN8",
          title: "Process Management",
          duration: "9:30",
          description: "ps, kill, top, and background jobs",
        },
      ],
    },
    {
      moduleId: "linux-networking",
      moduleName: "Linux Networking",
      videos: [
        {
          id: "tSodBEAJz9Y",
          title: "Networking Commands",
          duration: "13:10",
          description: "netstat, ss, ip, ping, traceroute",
        },
        {
          id: "VywxIQ2ZA_8",
          title: "SSH & Remote Access",
          duration: "10:55",
          description: "SSH keys, config, tunneling, and SCP",
        },
      ],
    },
  ],
  "soc-analyst": [
    {
      moduleId: "soc-intro",
      moduleName: "SOC Foundations",
      videos: [
        {
          id: "a9__D53WsUs",
          title: "What is a SOC Analyst?",
          duration: "8:15",
          description: "Roles, responsibilities, Tier 1/2/3 breakdown",
        },
        {
          id: "LZ3iUl5gB6g",
          title: "SIEM Overview",
          duration: "15:40",
          description: "Security information and event management fundamentals",
        },
      ],
    },
    {
      moduleId: "threat-detection",
      moduleName: "Threat Detection",
      videos: [
        {
          id: "inWWhr5tnEA",
          title: "Log Analysis Fundamentals",
          duration: "12:00",
          description: "Reading and correlating security logs",
        },
        {
          id: "S7mqQkpjt-s",
          title: "Indicators of Compromise",
          duration: "11:20",
          description: "IOCs, IOAs, and threat intelligence basics",
        },
      ],
    },
  ],
  "networking": [
    {
      moduleId: "network-fundamentals",
      moduleName: "Network Fundamentals",
      videos: [
        {
          id: "qiQR5rTSshw",
          title: "OSI Model Explained",
          duration: "14:00",
          description: "All 7 layers with real-world examples",
        },
        {
          id: "L3ZzkOTDPgw",
          title: "TCP/IP & Subnetting",
          duration: "16:30",
          description: "IP addressing, CIDR notation, subnetting practice",
        },
        {
          id: "AEkEFKwkjOA",
          title: "DNS Deep Dive",
          duration: "10:45",
          description: "How DNS works, record types, and attacks",
        },
      ],
    },
    {
      moduleId: "network-security",
      moduleName: "Network Security",
      videos: [
        {
          id: "PuV7RCwUCqI",
          title: "Firewalls & IDS/IPS",
          duration: "13:22",
          description: "Stateful inspection, signatures, anomaly detection",
        },
        {
          id: "ulBBCJ6xqGE",
          title: "Wireshark for Beginners",
          duration: "17:00",
          description: "Packet capture, filters, and protocol analysis",
        },
      ],
    },
  ],
  "security-plus": [
    {
      moduleId: "sec-threats",
      moduleName: "Threats & Attacks",
      videos: [
        {
          id: "hv1cumZthIM",
          title: "CompTIA Security+ SY0-701 Overview",
          duration: "18:55",
          description: "Exam domains, format, and study strategy",
        },
        {
          id: "6Ae7zqwlVNQ",
          title: "Malware Types & Defense",
          duration: "12:10",
          description: "Viruses, ransomware, rootkits, and countermeasures",
        },
      ],
    },
  ],
};

// ─── Storage helpers ──────────────────────────────────────────────────────────

const STORAGE_KEY = "cyberforge_video_progress";

function getWatched(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function markWatched(videoId: string) {
  const watched = getWatched();
  watched.add(videoId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...watched]));
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function VideoThumbnail({ videoId }: { videoId: string }) {
  return (
    <img
      src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 drop-shadow-lg">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 flex-shrink-0">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface Props {
  courseId: string;   // key from COURSE_VIDEO_LIBRARY
  courseName: string;
}

export default function CourseVideoPlayer({ courseId, courseName }: Props) {
  const modules = COURSE_VIDEO_LIBRARY[courseId] ?? [];
  const allVideos = modules.flatMap((m) => m.videos);

  const [activeVideo, setActiveVideo] = useState<CourseVideo | null>(
    allVideos[0] ?? null
  );
  const [watched, setWatched] = useState<Set<string>>(getWatched);
  const [autoplay, setAutoplay] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Re-read localStorage when active video changes (cross-tab support)
  useEffect(() => {
    setWatched(getWatched());
  }, [activeVideo]);

  function handleSelect(video: CourseVideo) {
    setActiveVideo(video);
  }

  function handleMarkWatched() {
    if (!activeVideo) return;
    markWatched(activeVideo.id);
    setWatched(getWatched());

    // Auto-advance to next video
    if (autoplay) {
      const idx = allVideos.findIndex((v) => v.id === activeVideo.id);
      if (idx >= 0 && idx < allVideos.length - 1) {
        setActiveVideo(allVideos[idx + 1]);
      }
    }
  }

  const watchedCount = allVideos.filter((v) => watched.has(v.id)).length;
  const progress = allVideos.length > 0 ? (watchedCount / allVideos.length) * 100 : 0;

  if (modules.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
        No videos configured for this course yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* ── Left: Video player ── */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* YouTube embed */}
        {activeVideo && (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              ref={playerRef}
              key={activeVideo.id} // Force remount on video change
              className="absolute inset-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Video info & controls */}
        {activeVideo && (
          <div className="mt-3 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {activeVideo.title}
                </h3>
                {activeVideo.description && (
                  <p className="text-sm text-gray-400 mt-0.5">{activeVideo.description}</p>
                )}
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap mt-1">
                {activeVideo.duration}
              </span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handleMarkWatched}
                disabled={watched.has(activeVideo.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  watched.has(activeVideo.id)
                    ? "bg-green-900/40 text-green-400 border border-green-800 cursor-default"
                    : "bg-cyan-600 hover:bg-cyan-500 text-white border border-cyan-500"
                }`}
              >
                {watched.has(activeVideo.id) ? "✓ Watched" : "Mark as watched"}
              </button>

              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                  className="accent-cyan-500"
                />
                Auto-advance
              </label>
            </div>

            {/* Course progress bar */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{courseName} progress</span>
                <span>{watchedCount} / {allVideos.length} videos</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Right: Playlist ── */}
      <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 overflow-y-auto max-h-[560px] space-y-4 pr-1">
        {modules.map((mod) => (
          <div key={mod.moduleId}>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 px-1">
              {mod.moduleName}
            </p>
            <div className="space-y-1.5">
              {mod.videos.map((video) => {
                const isActive = activeVideo?.id === video.id;
                const isWatched = watched.has(video.id);

                return (
                  <button
                    key={video.id}
                    onClick={() => handleSelect(video)}
                    className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-all group ${
                      isActive
                        ? "bg-cyan-900/40 border border-cyan-700/50"
                        : "hover:bg-gray-800/60 border border-transparent"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-800">
                      <VideoThumbnail videoId={video.id} />
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                          isActive ? "opacity-100 text-cyan-400" : "opacity-0 group-hover:opacity-100 text-white"
                        }`}
                      >
                        <PlayIcon />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs font-medium leading-snug truncate ${
                          isActive ? "text-cyan-300" : "text-gray-300"
                        }`}
                      >
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{video.duration}</p>
                    </div>

                    {isWatched && <CheckCircle />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
