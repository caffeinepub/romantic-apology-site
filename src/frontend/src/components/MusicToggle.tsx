import { useCallback, useRef, useState } from "react";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const oscRefs = useRef<OscillatorNode[]>([]);

  const startMusic = useCallback(() => {
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.04, ctx.currentTime);
    master.connect(ctx.destination);
    gainRef.current = master;

    // Soft ambient chord: C4, E4, G4, C5
    const frequencies = [261.63, 329.63, 392.0, 523.25];
    const oscs: OscillatorNode[] = [];

    for (let i = 0; i < frequencies.length; i++) {
      const freq = frequencies[i];
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Slight vibrato
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(4 + i * 0.5, ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.025 - i * 0.003, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(master);
      osc.start();
      oscs.push(osc);
    }

    oscRefs.current = oscs;
  }, []);

  const stopMusic = useCallback(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.linearRampToValueAtTime(
        0,
        audioCtxRef.current.currentTime + 0.3,
      );
      setTimeout(() => {
        for (const osc of oscRefs.current) {
          try {
            osc.stop();
          } catch (_) {
            /* ignore */
          }
        }
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        oscRefs.current = [];
      }, 350);
    }
  }, []);

  const toggle = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      startMusic();
      setIsPlaying(true);
    }
  };

  return (
    <button
      type="button"
      className="music-toggle"
      onClick={toggle}
      aria-label={isPlaying ? "Mute music" : "Play music"}
      data-ocid="music.toggle"
    >
      {isPlaying ? "🔇 Mute" : "🎵 Music"}
    </button>
  );
}
