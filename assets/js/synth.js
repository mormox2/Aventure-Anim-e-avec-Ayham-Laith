import { state } from "./state.js";

/* Audio synthesis engine. Loaded first because other domains use `synth`. */
            /************************************************************
             * 1. Dynamic Synthesizer Engine for Cute Audio Effects (Web Audio API)
             ************************************************************/
            class KidSynth {
                constructor() {
                    this.ctx = null;
                    this.isPlayingMusic = false;
                    this.musicTimeout = null;
                    // Cute, simple melody notes (frequencies) in a happy major scale (C-D-E-G-A)
                    this.melody = [
                        { note: 261.63, dur: 0.5 }, // C4
                        { note: 329.63, dur: 0.5 }, // E4
                        { note: 392.0, dur: 0.5 }, // G4
                        { note: 440.0, dur: 0.5 }, // A4
                        { note: 523.25, dur: 0.8 }, // C5
                        { note: 440.0, dur: 0.5 }, // A4
                        { note: 392.0, dur: 0.5 }, // G4
                        { note: 329.63, dur: 0.8 }, // E4
                    ];
                    this.melodyIndex = 0;
                }

                init() {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    if (!AudioCtx) return;
                    if (!this.ctx) {
                        try {
                            this.ctx = new AudioCtx();
                        } catch (e) {
                            return;
                        }
                    }
                    if (this.ctx && this.ctx.state === "suspended") {
                        this.ctx.resume().catch(() => {});
                    }
                }

                playPop() {
                    this.init();
                    if (!this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "sine";
                    const now = this.ctx.currentTime;
                    osc.frequency.setValueAtTime(350, now);
                    osc.frequency.exponentialRampToValueAtTime(900, now + 0.1);

                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

                    osc.start(now);
                    osc.stop(now + 0.12);
                }

                playBoing() {
                    this.init();
                    if (!this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "triangle";
                    const now = this.ctx.currentTime;
                    osc.frequency.setValueAtTime(120, now);
                    osc.frequency.exponentialRampToValueAtTime(500, now + 0.15);
                    osc.frequency.exponentialRampToValueAtTime(200, now + 0.35);

                    gain.gain.setValueAtTime(0.35, now);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.35);

                    osc.start(now);
                    osc.stop(now + 0.35);
                }

                playTada() {
                    this.init();
                    if (!this.ctx) return;
                    const now = this.ctx.currentTime;
                    const arpeggio = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
                    arpeggio.forEach((freq, idx) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);

                        osc.type = "sine";
                        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

                        gain.gain.setValueAtTime(0.18, now + idx * 0.08);
                        gain.gain.exponentialRampToValueAtTime(0.005, now + idx * 0.08 + 0.25);

                        osc.start(now + idx * 0.08);
                        osc.stop(now + idx * 0.08 + 0.3);
                    });
                }

                playClick() {
                    this.init();
                    if (!this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "sine";
                    const now = this.ctx.currentTime;
                    osc.frequency.setValueAtTime(650, now);
                    osc.frequency.exponentialRampToValueAtTime(150, now + 0.06);

                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);

                    osc.start(now);
                    osc.stop(now + 0.06);
                }

                playDanceMelody(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;
                    
                    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
                    notes.forEach((freq, idx) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);
                        
                        osc.type = "sine";
                        osc.frequency.setValueAtTime(freq * pitchFactor, now + idx * 0.08 * timeFactor);
                        
                        gain.gain.setValueAtTime(0.15, now + idx * 0.08 * timeFactor);
                        gain.gain.exponentialRampToValueAtTime(0.005, now + idx * 0.08 * timeFactor + 0.15 * timeFactor);
                        
                        osc.start(now + idx * 0.08 * timeFactor);
                        osc.stop(now + idx * 0.08 * timeFactor + 0.18 * timeFactor);
                    });
                }

                playJumpSound(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;

                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "triangle";
                    osc.frequency.setValueAtTime(150 * pitchFactor, now);
                    osc.frequency.exponentialRampToValueAtTime(600 * pitchFactor, now + 0.15 * timeFactor);
                    osc.frequency.exponentialRampToValueAtTime(250 * pitchFactor, now + 0.3 * timeFactor);

                    gain.gain.setValueAtTime(0.3, now);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.3 * timeFactor);

                    osc.start(now);
                    osc.stop(now + 0.3 * timeFactor);
                }

                playSpinSound(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;

                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "sine";
                    
                    osc.frequency.setValueAtTime(300 * pitchFactor, now);
                    osc.frequency.linearRampToValueAtTime(800 * pitchFactor, now + 0.1 * timeFactor);
                    osc.frequency.linearRampToValueAtTime(300 * pitchFactor, now + 0.2 * timeFactor);
                    osc.frequency.linearRampToValueAtTime(800 * pitchFactor, now + 0.3 * timeFactor);
                    osc.frequency.linearRampToValueAtTime(100 * pitchFactor, now + 0.4 * timeFactor);

                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.4 * timeFactor);

                    osc.start(now);
                    osc.stop(now + 0.4 * timeFactor);
                }

                playShakeSound(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;

                    const pulses = 5;
                    const pulseDuration = 0.05 * timeFactor;
                    for (let i = 0; i < pulses; i++) {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);

                        osc.type = "triangle";
                        const freq = (i % 2 === 0 ? 440 : 550) * pitchFactor;
                        const pulseStart = now + i * pulseDuration;

                        osc.frequency.setValueAtTime(freq, pulseStart);

                        gain.gain.setValueAtTime(0.18, pulseStart);
                        gain.gain.exponentialRampToValueAtTime(0.005, pulseStart + pulseDuration);

                        osc.start(pulseStart);
                        osc.stop(pulseStart + pulseDuration);
                    }
                }

                playGrowSound(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;

                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "sine";
                    osc.frequency.setValueAtTime(200 * pitchFactor, now);
                    osc.frequency.exponentialRampToValueAtTime(800 * pitchFactor, now + 0.35 * timeFactor);

                    gain.gain.setValueAtTime(0.05, now);
                    gain.gain.linearRampToValueAtTime(0.25, now + 0.35 * timeFactor);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.4 * timeFactor);

                    osc.start(now);
                    osc.stop(now + 0.4 * timeFactor);
                }

                playShrinkSound(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;

                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "sine";
                    osc.frequency.setValueAtTime(800 * pitchFactor, now);
                    osc.frequency.exponentialRampToValueAtTime(150 * pitchFactor, now + 0.35 * timeFactor);

                    gain.gain.setValueAtTime(0.25, now);
                    gain.gain.linearRampToValueAtTime(0.05, now + 0.35 * timeFactor);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.4 * timeFactor);

                    osc.start(now);
                    osc.stop(now + 0.4 * timeFactor);
                }

                playBounceSound(speed = 1) {
                    this.init();
                    if (!this.ctx) return;
                    const pitchFactor = speed === 0.6 ? 0.8 : speed === 1.5 ? 1.3 : 1.0;
                    const timeFactor = 1 / speed;
                    const now = this.ctx.currentTime;

                    const bounces = [
                        { time: 0, freqStart: 180, freqEnd: 400, vol: 0.25, dur: 0.15 },
                        { time: 0.18, freqStart: 150, freqEnd: 320, vol: 0.18, dur: 0.12 }
                    ];

                    bounces.forEach((b) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);

                        osc.type = "triangle";
                        const bounceStart = now + b.time * timeFactor;
                        const bounceDur = b.dur * timeFactor;

                        osc.frequency.setValueAtTime(b.freqStart * pitchFactor, bounceStart);
                        osc.frequency.exponentialRampToValueAtTime(b.freqEnd * pitchFactor, bounceStart + bounceDur);

                        gain.gain.setValueAtTime(b.vol, bounceStart);
                        gain.gain.exponentialRampToValueAtTime(0.005, bounceStart + bounceDur);

                        osc.start(bounceStart);
                        osc.stop(bounceStart + bounceDur);
                    });
                }

                toggleMusic(callback) {
                    this.init();
                    if (this.isPlayingMusic) {
                        this.stopMusic();
                    } else {
                        this.startMusic();
                    }
                    if (callback) callback(this.isPlayingMusic);
                }

                startMusic() {
                    if (this.isPlayingMusic) return;
                    this.isPlayingMusic = true;

                    const playNext = () => {
                        if (!this.isPlayingMusic || !this.ctx) return;
                        const step = this.melody[this.melodyIndex];

                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        const filter = this.ctx.createBiquadFilter();

                        osc.connect(filter);
                        filter.connect(gain);
                        gain.connect(this.ctx.destination);

                        osc.type = "sine";
                        filter.type = "lowpass";
                        filter.frequency.setValueAtTime(700, this.ctx.currentTime);

                        osc.frequency.setValueAtTime(step.note, this.ctx.currentTime);

                        // Gentle attack and decay
                        gain.gain.setValueAtTime(0, this.ctx.currentTime);
                        gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.05);
                        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + step.dur - 0.02);

                        osc.start(this.ctx.currentTime);
                        osc.stop(this.ctx.currentTime + step.dur);

                        this.melodyIndex = (this.melodyIndex + 1) % this.melody.length;

                        this.musicTimeout = setTimeout(playNext, step.dur * 1000);
                    };
                    playNext();
                }

                playMagicChime() {
                    this.init();
                    if (!this.ctx) return;
                    const now = this.ctx.currentTime;
                    // Sparkly rising minor pentatonic arpeggio (magical)
                    const chimeNotes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5]; // C5, D5, E5, G5, A5, C6
                    chimeNotes.forEach((freq, idx) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);

                        osc.type = "sine";
                        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

                        gain.gain.setValueAtTime(0.12, now + idx * 0.05);
                        gain.gain.exponentialRampToValueAtTime(0.002, now + idx * 0.05 + 0.25);

                        osc.start(now + idx * 0.05);
                        osc.stop(now + idx * 0.05 + 0.3);
                    });
                }

                playFunnyGlissando() {
                    this.init();
                    if (!this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "triangle";
                    const now = this.ctx.currentTime;
                    // An amusing up-and-down cartoon pitch bend
                    osc.frequency.setValueAtTime(300, now);
                    osc.frequency.linearRampToValueAtTime(600, now + 0.12);
                    osc.frequency.linearRampToValueAtTime(200, now + 0.25);
                    osc.frequency.linearRampToValueAtTime(450, now + 0.35);

                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.38);

                    osc.start(now);
                    osc.stop(now + 0.38);
                }

                playMiniGrowl() {
                    this.init();
                    if (!this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    const filter = this.ctx.createBiquadFilter();

                    osc.connect(filter);
                    filter.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.type = "sawtooth";
                    filter.type = "lowpass";

                    const now = this.ctx.currentTime;
                    // Low growling frequency sweep
                    osc.frequency.setValueAtTime(80, now);
                    osc.frequency.exponentialRampToValueAtTime(160, now + 0.15);
                    osc.frequency.exponentialRampToValueAtTime(70, now + 0.35);

                    filter.frequency.setValueAtTime(200, now);
                    filter.frequency.exponentialRampToValueAtTime(600, now + 0.15);
                    filter.frequency.exponentialRampToValueAtTime(100, now + 0.35);

                    gain.gain.setValueAtTime(0.25, now);
                    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.38);

                    osc.start(now);
                    osc.stop(now + 0.38);
                }

                stopMusic() {
                    this.isPlayingMusic = false;
                    if (this.musicTimeout) {
                        clearTimeout(this.musicTimeout);
                        this.musicTimeout = null;
                    }
                }
            }

            // Instantiate KidSynth
            const synth = new KidSynth();

            // Init synth on first user action anywhere
            window.addEventListener("pointerdown", () => synth.init(), { once: true });

export { KidSynth, synth };
