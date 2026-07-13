import { useEffect, useRef } from "react";
import Section from "./Section.jsx";

const HOBBY_GROUPS = [
  {
    title: "Travelling",
    description: "Discovering new places, stories, and perspectives.",
    images: [
      "/images/hobbies/travel-1.mp4",
      "/images/hobbies/travel-3.png",
      "/images/hobbies/travel-2.png",
      "/images/hobbies/travel-4.png",
    ],
  },
  {
    title: "Music",
    description: "Finding new sounds and playlists for every mood.",
    images: [
      "/images/hobbies/music/music-1.png",
      "/images/hobbies/music/music-2.png",
      "/images/hobbies/music/music-3.png",
      "/images/hobbies/music/music-4.png",
    ],
  },
  {
    title: "Biking",
    description:
      "Exploring the city, clearing the mind, and enjoying the road.",
    images: [
      "/images/hobbies/biking-1.mp4",
      "/images/hobbies/biking-2.png",
      "/images/hobbies/biking-3.png",
      "/images/hobbies/biking-4.png",
    ],
  },
];

function HobbyGroup({ title, description, images, index }) {
  const videoCardRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoCard = videoCardRef.current;
    const video = videoRef.current;
    if (!videoCard || !video) return undefined;

    // Explicitly set these properties before play() so browser autoplay rules
    // permit the muted clip to start without a click.
    video.muted = true;
    video.defaultMuted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    // Observe the card instead of the video: the card has a stable size even
    // while the video metadata is still loading.
    observer.observe(videoCard);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-lg font-semibold text-stone-50">
          {title}
        </h3>
      </div>

      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {images.map((image, i) => {
          const isVideo = /\.(mp4|mov|webm)$/i.test(image);

          return (
            <div
              key={image}
              ref={isVideo ? videoCardRef : undefined}
              className={`surface-card group relative overflow-hidden rounded-xl ${
                i === 0
                  ? "col-span-2 aspect-[2/1] sm:aspect-auto"
                  : "aspect-square"
              }`}
            >
              {isVideo ? (
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src={image}
                    type={
                      image.endsWith(".mov")
                        ? "video/quicktime"
                        : image.endsWith(".webm")
                          ? "video/webm"
                          : "video/mp4"
                    }
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={image}
                  alt={`${title} ${i + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone-100/90">
                  {i === 0
                    ? `${title} moments`
                    : `Moment ${String(i + 1).padStart(2, "0")}`}
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-stone-950/50 font-mono text-[10px] text-stone-100 backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hobbies() {
  return (
    <Section
      id="hobbies"
      tag="05 / OFFLINE"
      title="Beyond the screen"
      description="What I'm doing when I'm not at the keyboard."
      className="border-t border-line"
    >
      <div className="space-y-12">
        {HOBBY_GROUPS.map((group, index) => (
          <div key={group.title}>
            {index > 0 && <div className="mb-12 h-px w-full bg-line" />}
            <HobbyGroup {...group} index={index} />
          </div>
        ))}
      </div>
    </Section>
  );
}
