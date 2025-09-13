/* AUDIO CONSTANTS */

const NOISE_CHANNEL = 4;
const C0_FREQ = 16.352;

const SQUARE_ENV = {attack:0, decay:0, sustain:1, release:0};
const PIANO_ENV = {attack:100, decay:2000, sustain:0, release:0};
const STRING_ENV = {attack:100, decay:100, sustain:0.6, release:400};
const TEST_ENV = {attack:1000, decay:1000, sustain:0.2, release:1000};

const NOTE_NAMES = {
    "C":0, "C#":1, "Db":1, "D":2, 
    "D#":3, "Eb":3, "E":4, "F":5, 
    "F#":6, "Gb":6, "G":7, "G#":8, 
    "Ab":8, "A": 9, "A#": 10, "Bb":10,
    "B":11,
}

const test_song = {
    tempo:90,
    divisionsPerBeat:4,
    length:8,
    env1:STRING_ENV,
    env2:STRING_ENV,
    envNoise:PIANO_ENV,
    notes:{
        channel1:{
            0:{pitch:"G4", duration:1},
            1:{pitch:"Bb4", duration:1},
            2:{pitch:"D5", duration:1},
            3:{pitch:"Eb5", duration:1},
            4:{pitch:"G4", duration:1},
            5:{pitch:"Bb4", duration:1},
            6:{pitch:"D5", duration:1},
            7:{pitch:"Eb5", duration:1},
            8:{pitch:"G4", duration:1},
            9:{pitch:"Bb4", duration:1},
            10:{pitch:"D5", duration:1},
            11:{pitch:"Eb5", duration:1},
            12:{pitch:"G4", duration:1},
            13:{pitch:"Bb4", duration:1},
            14:{pitch:"D5", duration:1},
            15:{pitch:"Eb5", duration:1},
            16:{pitch:"F#4", duration:1},
            17:{pitch:"A4", duration:1},
            18:{pitch:"D5", duration:1},
            19:{pitch:"Eb5", duration:1},
            20:{pitch:"F#4", duration:1},
            21:{pitch:"A4", duration:1},
            22:{pitch:"D5", duration:1},
            23:{pitch:"Eb5", duration:1},
            24:{pitch:"F#4", duration:1},
            25:{pitch:"A4", duration:1},
            26:{pitch:"D5", duration:1},
            27:{pitch:"Eb5", duration:1},
            28:{pitch:"F#4", duration:1},
            29:{pitch:"A4", duration:1},
            30:{pitch:"D5", duration:1},
            31:{pitch:"Eb5", duration:1},
        },
        channel2:{
            0:{pitch:"G3", duration:8},
            8:{pitch:"Bb3", duration:4},
            12:{pitch:"D4", duration:4},
            16:{pitch:"C#4", duration:4},
            20:{pitch:"F#3", duration:12},
        },
        channelNoise:{},
    },
};

/* INPUT CONSTANTS */

const KEYS = ["up", "down", "left", "right", "a", "b", "start", "select"];
const DEFAULT_KEYS = ["w", "s", "a", "d", "x", "z", "Enter", "Shift"];

/* GRAPHICS CONSTANTS */

const SCREEN_WIDTH = 160
const SCREEN_HEIGHT = 144
const PIXEL_SIZE = 3
const TILE_SIZE = 16

const canvas = document.getElementById("gameboyCanvas");
const canvasCtx = canvas.getContext("2d");
canvasCtx.canvas.width = SCREEN_WIDTH * PIXEL_SIZE
canvasCtx.canvas.height = SCREEN_HEIGHT * PIXEL_SIZE

const font_bmp = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
const LETTERS = "abcdefghijklmnopqrstuvwxyz.,!?'-";
const LETTER_SIZE = 8;

/* GAME CONSTANTS */

const PLAYER_BASE_FORCE = 3; //2
const PLAYER_DRAG = 1;
const ANIM_DELAY = 167;
const ROOM_CHANGE_DIST = 1;
const TEXT_BOX_HEIGHT = 32;
const TEXT_DELAY = 100;
const TEXT_LINE_LENGTH = 20;
const TEXT_LINES = 4;

class AudioHandler {
    constructor(ctx) {
        this.ctx = ctx;
        this.channels = {};
        this.gains = {};
        this.songIntervalID;

        this.setupOscillatorChannels();
        this.setupNoiseChannel();
    }

    setupOscillatorChannels() {
        for (let i = 1; i <= NOISE_CHANNEL - 1; i++) {
            this.channels[i] = this.ctx.createOscillator();
            this.gains[i] = this.ctx.createGain();
            this.gains[i].connect(this.ctx.destination);
            this.gains[i].gain.value = 0;
            this.channels[i].type = "square";
            this.channels[i].frequency.value = 440;
            this.channels[i].connect(this.gains[i]);
            this.channels[i].start(0);
        }
    }

    setupNoiseChannel() {
        let bufferSize = this.ctx.sampleRate;
        let noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        this.gains[NOISE_CHANNEL] = this.ctx.createGain();
        this.gains[NOISE_CHANNEL].connect(this.ctx.destination);
        this.gains[NOISE_CHANNEL].gain.value = 0;
        let output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        this.channels[NOISE_CHANNEL] = this.ctx.createBufferSource();
        this.channels[NOISE_CHANNEL].buffer = noiseBuffer;
        this.channels[NOISE_CHANNEL].loop = true;
        this.channels[NOISE_CHANNEL].connect(this.gains[NOISE_CHANNEL]);
        this.channels[NOISE_CHANNEL].start(0);
    }

    static noteToFreq(note) {
        let octave = parseInt(note.slice(-1));
        let noteName = NOTE_NAMES[note.slice(0, -1)];
        return C0_FREQ * Math.pow(2, (octave * 12 + noteName) / 12);
    }

    playNote(freq, duration, channel, envelope=SQUARE_ENV) {
        this.gains[channel].gain.cancelScheduledValues(this.ctx.currentTime);
        this.gains[channel].gain.value = 0;
        this.gains[channel].gain.linearRampToValueAtTime(1, this.ctx.currentTime + envelope.attack/1000);
        this.channels[channel].frequency.value = freq;
        setTimeout(() => {
            this.gains[channel].gain.linearRampToValueAtTime(envelope.sustain, this.ctx.currentTime + envelope.decay/1000);
        }, envelope.attack)
        setTimeout(() => {
            this.gains[channel].gain.linearRampToValueAtTime(0, this.ctx.currentTime + envelope.release/1000);
        }, duration - envelope.release)
        setTimeout(() => {
            this.gains[channel].gain.value = 0;
        }, duration)
    }

    playGliss(startF, endF, duration, channel) {
        this.gains[channel].gain.value = 1;
        this.channels[channel].frequency.value = startF;
        this.channels[channel].frequency.linearRampToValueAtTime(endF, this.ctx.currentTime + duration / 1000);
        setTimeout(() => {
            this.gains[channel].gain.value = 0;
        }, duration)
    }

    playNoise(duration, envelope=SQUARE_ENV) {
        this.gains[NOISE_CHANNEL].gain.value = 0;
        this.gains[NOISE_CHANNEL].gain.linearRampToValueAtTime(1, this.ctx.currentTime + envelope.attack/1000);
        setTimeout(() => {
            this.gains[NOISE_CHANNEL].gain.linearRampToValueAtTime(envelope.sustain, this.ctx.currentTime + envelope.decay/1000);
        }, envelope.attack)
        setTimeout(() => {
            this.gains[NOISE_CHANNEL].gain.linearRampToValueAtTime(0, this.ctx.currentTime + envelope.release/1000);
        }, duration - envelope.release)
        setTimeout(() => {
            this.gains[NOISE_CHANNEL].gain.value = 0;
        }, duration)
    }

    playSong(song, loop=false) {
        clearInterval(this.songIntervalID);
        let stepDur = (60 * 1000) / (song.tempo * song.divisionsPerBeat);
        let curStep = 0;
        this.songIntervalID = setInterval(() => {
            if (song.notes.channel1.hasOwnProperty(curStep)) {
                let freq = AudioHandler.noteToFreq(song.notes.channel1[curStep].pitch);
                let dur = song.notes.channel1[curStep].duration * stepDur;
                this.playNote(freq, dur, 1, song.env1);
            }
            if (song.notes.channel2.hasOwnProperty(curStep)) {
                let freq = AudioHandler.noteToFreq(song.notes.channel2[curStep].pitch);
                let dur = song.notes.channel2[curStep].duration * stepDur;
                this.playNote(freq, dur, 2, song.env2);
            }
            curStep++;
            if (loop && curStep >= song.divisionsPerBeat * song.length) {
                curStep = 0;
            }
        }, 
        stepDur);
    }
}

class InputHandler {
    constructor(canvas) {
        this.keyPressed = {};
        this.keySelectButtons = {};
        this.keyMap = {};
        this.currSelecting = "";

        this.initializeButtons();
        this.initializeMap();
        this.initializePressed();
        this.initializeListeners(canvas);
    }

    initializeButtons() {
        for (let i = 0; i < KEYS.length; i++) {
            this.keySelectButtons[KEYS[i]] = document.getElementById(KEYS[i] + "Button");
            this.keySelectButtons[KEYS[i]].innerHTML = DEFAULT_KEYS[i];
            this.keySelectButtons[KEYS[i]].addEventListener("click", (e) => {
                this.currSelecting = KEYS[i];
            });
        }
    }

    initializeMap() {
        for (let i = 0; i < KEYS.length; i++) {
            this.keyMap[KEYS[i]] = DEFAULT_KEYS[i];
        }
    }

    initializePressed() {
        for (let i = 0; i < KEYS.length; i++) {
            this.keyPressed[KEYS[i]] = false;
        }
    }

    initializeListeners(canvas) {
        window.addEventListener("keydown", (event) => {
            if (KEYS.includes(this.currSelecting)) {
                this.keyMap[this.currSelecting] = event.key;
                this.keySelectButtons[this.currSelecting].innerHTML = event.key;
            }
            else {
                switch (event.key) {
                    case this.keyMap["up"]:
                        this.keyPressed["up"] = true;
                        break;
                    case this.keyMap["down"]:
                        this.keyPressed["down"] = true;
                        break;
                    case this.keyMap["left"]:
                        this.keyPressed["left"] = true;
                        break;
                    case this.keyMap["right"]:
                        this.keyPressed["right"] = true;
                        break;
                    case this.keyMap["a"]:
                        this.keyPressed["a"] = true;
                        break;
                    case this.keyMap["b"]:
                        this.keyPressed["b"] = true;
                        break;
                    case this.keyMap["start"]:
                        this.keyPressed["start"] = true;
                        break;
                    case this.keyMap["select"]:
                        this.keyPressed["select"] = true;
                        break;
                    default:
                        return;
                }
            }
        });

        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                case this.keyMap["up"]:
                    this.keyPressed["up"] = false;
                    break;
                case this.keyMap["down"]:
                    this.keyPressed["down"] = false;
                    break;
                case this.keyMap["left"]:
                    this.keyPressed["left"] = false;
                    break;
                case this.keyMap["right"]:
                    this.keyPressed["right"] = false;
                    break;
                case this.keyMap["a"]:
                    this.keyPressed["a"] = false;
                    break;
                case this.keyMap["b"]:
                    this.keyPressed["b"] = false;
                    break;
                case this.keyMap["start"]:
                    this.keyPressed["start"] = false;
                    break;
                case this.keyMap["select"]:
                    this.keyPressed["select"] = false;
                    break;
                default:
                    return;  
            }
        });

        canvas.addEventListener("click", (e) => {
            this.currSelecting = "";
        });
    }
}

class GraphicsHandler {
    constructor() {
        this.currPalette = {1: "#7D4F50", 2:"#CC8B86", 3:"#D1BE9C", 4:"#F9EAE1"};
        this.currScreen = Array.from(Array(SCREEN_HEIGHT), _ => Array(SCREEN_WIDTH).fill(1));
    }

    drawPixel(color, x, y) {
        this.currScreen[y][x] = color;
    }

    fillScreen(color) {
        for (let i = 0; i < this.currScreen.length; i++) {
            for (let j = 0; j < this.currScreen[i].length; j++) {
                this.currScreen[i][j] = color;
            }
        }
    }

    fillRect(color, x, y, w, h) {
        for (let i = y; i < h; i++) {
            for (let j = x; j < w; j++) {
                this.currScreen[i][j] = color;
            }
        } 
    }

    drawBitmap(map, x, y) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (y + i < this.currScreen.length && x + j < this.currScreen[i].length) {
                    if (map[i][j] > 0) {
                        this.currScreen[y + i][x + j] = map[i][j];
                    }
                }
            }
        }
    }

    drawText(text, x, y) {
        for (let i = 0; i < text.length; i++) {
            let letterIndex = LETTERS.indexOf(text[i].toLowerCase());
            let letterMap = font_bmp.slice(letterIndex * LETTER_SIZE, (letterIndex + 1) * LETTER_SIZE);
            this.drawBitmap(letterMap, x + LETTER_SIZE * i, y);
        }
    }

    draw() {
        canvasCtx.fillStyle = this.currPalette[1];
        canvasCtx.fillRect(0, 0, SCREEN_WIDTH * PIXEL_SIZE, SCREEN_HEIGHT * PIXEL_SIZE);

        for (let i = 0; i < SCREEN_HEIGHT; i++) {
            for (let j = 0; j < SCREEN_WIDTH; j++) {
                canvasCtx.fillStyle = this.currPalette[this.currScreen[i][j]];
                canvasCtx.fillRect(j * PIXEL_SIZE, i * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
            }
        }
    }
}

const muteButton = document.getElementById("muteButton");
var AudioContext = window.AudioContext || window.webkitAudioContext || false;
if (AudioContext) {
    let audioCtx = new AudioContext;
    var audioHandler = new AudioHandler(audioCtx);
} else {
    alert("Your browser doesn't seem to support the Web Audio API. To hear this game's sound, upgrade your browser to the most recent version or download Chrome or Firefox.");
}

var inputHandler = new InputHandler(canvas);

var graphicsHandler = new GraphicsHandler();

muteButton.addEventListener("click", (e) => {
    if (audioHandler.ctx.state === 'running') {
        audioHandler.ctx.suspend().then(() => {
            muteButton.innerHTML = "Unmute";
        });
    } else if (audioHandler.ctx.state === 'suspended') {
        audioHandler.ctx.resume().then(() => {
            muteButton.innerHTML = "Mute";
        });
    }
});

class World {
    constructor(rooms, startX, startY) {
        this.rooms = rooms;
        this.currentRoom = {x:startX, y:startY};
        this.text = "";
        this.textOpen = false;
        this.textChars = 0;
        this.intervalCode;
        this.titleOpen = true;
        this.endOpen = false;
    }

    getCurrRoom() {
        return this.rooms[this.currentRoom.y][this.currentRoom.x];
    }

    displayTextBox(text) {
        this.textOpen = true;
        this.text = text;
        this.textChars = 0;
        this.intervalCode = setInterval(() => {this.textChars++}, TEXT_DELAY);
    }

    update() {
        graphicsHandler.fillScreen(this.getCurrRoom().bgColor);
        if (this.titleOpen && (inputHandler.keyPressed.start || inputHandler.keyPressed.select)) {
            this.titleOpen = false;
        }
        for (let i = 0; i < SCREEN_HEIGHT / TILE_SIZE; i++) {
            for (let j = 0; j < SCREEN_WIDTH / TILE_SIZE; j++) {
                let currTile = this.getCurrRoom().tiles[i][j];
                graphicsHandler.drawBitmap(currTile.img, j * TILE_SIZE, i * TILE_SIZE);
            }
        }
        for (let i = 0; i < this.getCurrRoom().characters.length; i++) {
            this.getCurrRoom().characters[i].update();
        }
        if (this.textOpen) {
            graphicsHandler.fillRect(4, 0, SCREEN_HEIGHT - TEXT_BOX_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT);
            let currText = this.text.substring(0, this.textChars);
            for (let i = 0; i < TEXT_LINES; i++) {
                graphicsHandler.drawText(currText.slice(i * TEXT_LINE_LENGTH, (i + 1) * TEXT_LINE_LENGTH), 0, SCREEN_HEIGHT - TEXT_BOX_HEIGHT + i * 8);
            }
            if (inputHandler.keyPressed.a || inputHandler.keyPressed.b) {
                this.textOpen = false;
                clearInterval(this.intervalCode);
            }
        }
        if (this.titleOpen) {
            graphicsHandler.drawBitmap(title_bmp, 0, 0);
        }
        if (this.endOpen) {
            graphicsHandler.drawBitmap(end_bmp, 0, 0);
        }
    }
}

class Character {
    constructor(frames, startX, startY, world, delay=ANIM_DELAY, fFrames=4, dialogue="") {
        this.world = world;
        this.frames = frames;
        this.loc = {x: startX, y: startY};
        this.currFrame = 0;
        this.animType = "f";
        this.dialogue = dialogue;
        setInterval(() => {this.currFrame = (this.currFrame + 1) % fFrames}, delay);
    }
    onInteract() {
        this.world.displayTextBox(this.dialogue);
        audioHandler.playGliss(1000, 2000, 100, 3);
    }
    update() {
        graphicsHandler.drawBitmap(this.frames[this.animType + this.currFrame], Math.round(this.loc.x), Math.round(this.loc.y));
    }
}

class Player {
    constructor(frames, startX, startY, world) {
        this.world = world;
        this.frames = frames;
        this.loc = {x: startX, y: startY};
        this.velocity = {x: 0, y: 0};
        this.force = {x: 0, y: 0};
        this.currFrame = 0;
        this.animType = "idle";
        this.animDir = "R";
        setInterval(() => {this.currFrame = (this.currFrame + 1) % 4}, ANIM_DELAY);
    }
    isTouching(loc, w, h) {
        return (this.loc.x < loc.x + w && this.loc.x + TILE_SIZE > loc.x && 
                this.loc.y < loc.y + h && this.loc.y + TILE_SIZE > loc.x);
    }
    update() {
        if (!this.world.textOpen && !this.world.titleOpen && !this.world.endOpen) {
            if (inputHandler.keyPressed.up && !inputHandler.keyPressed.down) {
                this.force.y = -PLAYER_BASE_FORCE;
                this.animType = "f";
            }
            else if (inputHandler.keyPressed.down && !inputHandler.keyPressed.up) {
                this.force.y = PLAYER_BASE_FORCE;
                this.animType = "f";
            }
            else {
                this.force.y = 0;
            }
            if (inputHandler.keyPressed.left && !inputHandler.keyPressed.right) {
                this.force.x = -PLAYER_BASE_FORCE;
                this.animType = "f";
                this.animDir = "L";
            }
            else if (inputHandler.keyPressed.right && !inputHandler.keyPressed.left) {
                this.force.x = PLAYER_BASE_FORCE;
                this.animType = "f";
                this.animDir = "R";
            }
            else {
                this.force.x = 0;
            }
            if (inputHandler.keyPressed.a) {
                for (let i = 0; i < this.world.getCurrRoom().characters.length; i++) {
                    if (this.isTouching(this.world.getCurrRoom().characters[i].loc, TILE_SIZE, TILE_SIZE)) {
                        this.world.getCurrRoom().characters[i].onInteract();
                    }
                }
            }
            if (this.force.x == 0 && this.force.y == 0) {
                this.animType = "idle";
            }
            this.velocity.x += this.force.x - this.velocity.x * PLAYER_DRAG;
            this.velocity.y += this.force.y - this.velocity.y * PLAYER_DRAG;
            let oldMusic = this.world.getCurrRoom().music;
            if (this.loc.y + this.velocity.y < ROOM_CHANGE_DIST) {
                this.world.currentRoom.y -= 1;
                if (this.world.getCurrRoom().music != oldMusic) {
                    audioHandler.playSong(this.world.getCurrRoom().music, loop=true);
                }
                this.world.getCurrRoom().onEnter(this.world.getCurrRoom());
                this.loc.y = SCREEN_HEIGHT - TILE_SIZE - ROOM_CHANGE_DIST;
            }
            if (this.loc.y + this.velocity.y > SCREEN_HEIGHT - TILE_SIZE - ROOM_CHANGE_DIST) {
                this.world.currentRoom.y += 1;
                if (this.world.getCurrRoom().music != oldMusic) {
                    audioHandler.playSong(this.world.getCurrRoom().music, loop=true);
                }
                this.world.getCurrRoom().onEnter(this.world.getCurrRoom());
                this.loc.y = ROOM_CHANGE_DIST;
            }
            if (this.loc.x + this.velocity.x < ROOM_CHANGE_DIST) {
                this.world.currentRoom.x -= 1;
                if (this.world.getCurrRoom().music != oldMusic) {
                    audioHandler.playSong(this.world.getCurrRoom().music, loop=true);
                }
                this.world.getCurrRoom().onEnter(this.world.getCurrRoom());
                this.loc.x = SCREEN_WIDTH - TILE_SIZE - ROOM_CHANGE_DIST;
            }
            if (this.loc.x + this.velocity.x > SCREEN_WIDTH - TILE_SIZE - ROOM_CHANGE_DIST) {
                this.world.currentRoom.x += 1;
                if (this.world.getCurrRoom().music != oldMusic) {
                    audioHandler.playSong(this.world.getCurrRoom().music, loop=true);
                }
                this.world.getCurrRoom().onEnter(this.world.getCurrRoom());
                this.loc.x = ROOM_CHANGE_DIST;
            }
            let nextTileTouching = this.world.getCurrRoom().tiles[Math.round((this.loc.y + this.velocity.y) / TILE_SIZE)][Math.round((this.loc.x + this.velocity.x) / TILE_SIZE)];
            if (nextTileTouching.rigid) {
                this.velocity.x = 0;
                this.velocity.y = 0;
                this.force.x = 0;
                this.force.y = 0;
            }
            if (Object.hasOwn(nextTileTouching, "onTouch")) {
                nextTileTouching.onTouch();
            }
            this.loc.x += this.velocity.x;
            this.loc.y += this.velocity.y;
        }
        if (this.animType == "idle") {
            graphicsHandler.drawBitmap(this.frames[this.animType + this.animDir], Math.round(this.loc.x), Math.round(this.loc.y));
        }
        else {
            graphicsHandler.drawBitmap(this.frames[this.animType + this.currFrame + this.animDir], Math.round(this.loc.x), Math.round(this.loc.y));
        }
    }
}

class Tile {
    constructor(img, rigid=false) {
        this.img = img;
        this.rigid = rigid;
    }
}

class Room {
    constructor(tiles, bgColor=3, characters=[], music=test_song) {
        this.tiles = tiles;
        this.bgColor = bgColor;
        this.characters = characters;
        this.music = music
    }

    onEnter() {}
}

audioHandler.playSong(test_song, loop=true);

function update() {

    graphicsHandler.draw();

    requestAnimationFrame(update);
}

requestAnimationFrame(update);