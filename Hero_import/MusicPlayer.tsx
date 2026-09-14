import { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

interface MusicPlayerProps {
  title: string;
  artist: string;
  /** Optional audio source. Leave empty to keep the player decorative. */
  src?: string;
}

export default function MusicPlayer({ title, artist, src }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!src) {
      // No real track wired up — just animate the UI for demo purposes.
      setIsPlaying((p) => !p);
      return;
    }
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }
    setIsPlaying((p) => !p);
  };

  return (
    <div className={styles.player}>
      {src && <audio ref={audioRef} src={src} loop />}
      <button
        type="button"
        className={styles.playButton}
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
      >
        {isPlaying ? (
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <rect x="1" y="0" width="3" height="10" fill="currentColor" />
            <rect x="6" y="0" width="3" height="10" fill="currentColor" />
          </svg>
        ) : (
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <polygon points="0,0 10,5 0,10" fill="currentColor" />
          </svg>
        )}
      </button>

      <div className={styles.meta}>
        <span className={styles.title}>{title}</span>
        <span className={styles.artist}>{artist}</span>
      </div>

      <div
        className={`${styles.bars} ${isPlaying ? styles.barsPlaying : ""}`}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
