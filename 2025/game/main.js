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

const PLAYER_BASE_FORCE = 3;
const PLAYER_DRAG = 1;
const ANIM_DELAY = 167;
const ROOM_CHANGE_DIST = 1;
const TEXT_BOX_HEIGHT = 32;
const TEXT_DELAY = 100;
const TEXT_LINE_LENGTH = 20;
const TEXT_LINES = 4;
const POINTER_SPEED = 0.005;
const MARBLE_CURSOR_SPEED = 0.1;

const MARBLE_TYPE_ALLEY = 0;
const MARBLE_TYPE_SHOOTER = 1;
const TURN_PLAYER = 0;
const TURN_OPPONENT = 1;

class AudioHandler {
    constructor(ctx) {
        this.ctx = ctx;
        this.channels = {};
        this.gains = {};
        this.songIntervalID;
        this.volume = 0.1;

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

    playNote(freq, duration, channel, envelope=SQUARE_ENV, volume=1) {
        this.gains[channel].gain.cancelScheduledValues(this.ctx.currentTime);
        this.gains[channel].gain.value = 0;
        this.gains[channel].gain.linearRampToValueAtTime(volume, this.ctx.currentTime + envelope.attack/1000);
        this.channels[channel].frequency.value = freq;
        setTimeout(() => {
            this.gains[channel].gain.linearRampToValueAtTime(envelope.sustain * volume, this.ctx.currentTime + envelope.decay/1000);
        }, envelope.attack)
        setTimeout(() => {
            this.gains[channel].gain.linearRampToValueAtTime(0, this.ctx.currentTime + envelope.release/1000);
        }, duration - envelope.release)
        setTimeout(() => {
            this.gains[channel].gain.value = 0;
        }, duration)
    }

    playGliss(startF, endF, duration, channel, volume=1) {
        this.gains[channel].gain.value = volume;
        this.channels[channel].frequency.value = startF;
        this.channels[channel].frequency.linearRampToValueAtTime(endF, this.ctx.currentTime + duration / 1000);
        setTimeout(() => {
            this.gains[channel].gain.value = 0;
        }, duration)
    }

    playNoise(duration, envelope=SQUARE_ENV, volume=1) {
        this.gains[NOISE_CHANNEL].gain.value = 0;
        this.gains[NOISE_CHANNEL].gain.linearRampToValueAtTime(volume, this.ctx.currentTime + envelope.attack/1000);
        setTimeout(() => {
            this.gains[NOISE_CHANNEL].gain.linearRampToValueAtTime(envelope.sustain * volume, this.ctx.currentTime + envelope.decay/1000);
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
        let volume = this.volume;
        this.songIntervalID = setInterval(() => {
            if (song.notes.channel1.hasOwnProperty(curStep)) {
                let freq = AudioHandler.noteToFreq(song.notes.channel1[curStep].pitch);
                let dur = song.notes.channel1[curStep].duration * stepDur;
                this.playNote(freq, dur, 1, song.env1, volume);
            }
            if (song.notes.channel2.hasOwnProperty(curStep)) {
                let freq = AudioHandler.noteToFreq(song.notes.channel2[curStep].pitch);
                let dur = song.notes.channel2[curStep].duration * stepDur;
                this.playNote(freq, dur, 2, song.env2, volume);
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
        if (x >= 0 && x < SCREEN_WIDTH && y >= 0 && y < SCREEN_HEIGHT) {
            this.currScreen[y][x] = color;
        }
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

    drawCircle(color, x, y, radius) {
        for (let i = 0; i < Math.ceil(radius / Math.SQRT2) + 1; i++) {
            let y_val = Math.round(Math.sqrt(radius * radius - i * i));

            this.drawPixel(color, x + i, y + y_val);
            this.drawPixel(color, x - i, y + y_val);
            this.drawPixel(color, x + i, y - y_val);
            this.drawPixel(color, x - i, y - y_val);

            this.drawPixel(color, x + y_val, y + i);
            this.drawPixel(color, x - y_val, y + i);
            this.drawPixel(color, x + y_val, y - i);
            this.drawPixel(color, x - y_val, y - i);
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

function getDistance(p1, p2) {
    return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
}

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

class MarblePointer {
    constructor(parent, arena, length=10) {
        this.parent = parent;
        this.arena = arena;
        this.length = length;
        this.angle = 0;
    }

    update(deltaT) {
        if (inputHandler.keyPressed.right) {
            this.angle += POINTER_SPEED * deltaT;
        }
        if (inputHandler.keyPressed.left) {
            this.angle -= POINTER_SPEED * deltaT;
        }
        if (inputHandler.keyPressed.a) {
            this.parent.velocity.x = 0.03 * Math.cos(this.angle);
            this.parent.velocity.y = 0.03 * Math.sin(this.angle);
            this.arena.controlling = false;
        }

        let cursorX = Math.round(this.parent.loc.x + this.length * Math.cos(this.angle));
        let cursorY = Math.round(this.parent.loc.y + this.length * Math.sin(this.angle));
        graphicsHandler.drawCircle(2, cursorX, cursorY, 2);
    }
}

class MarbleAiHandler {
    constructor(parent, arena, length=10) {
        this.parent = parent;
        this.arena = arena;
        this.length = length;
        this.angle = 0;
        this.targetAngle = 0;
        this.accuracy = 0;
    }

    pickTargetAngle() {
        let targetMarbleIndex = Math.floor(Math.random() * this.arena.alleys.length);
        let targetMarble = this.arena.alleys[targetMarbleIndex];
        while (!targetMarble.inBounds()) {
            targetMarbleIndex = Math.floor(Math.random() * this.arena.alleys.length);
            targetMarble = this.arena.alleys[targetMarbleIndex];
        }
        let perfectAngle = Math.atan2(targetMarble.loc.y - this.parent.loc.y, targetMarble.loc.x - this.parent.loc.x);
        this.targetAngle = perfectAngle + (Math.random() - 0.5) * this.accuracy;
        this.targetAngle = (this.targetAngle + (2 * Math.PI)) % (2 * Math.PI);
    }

    update(deltaT) {
        this.angle += POINTER_SPEED * deltaT;
        this.angle = this.angle % (Math.PI * 2);

        if (Math.abs(this.angle - this.targetAngle) < 2 * POINTER_SPEED * deltaT) {
            this.parent.velocity.x = 0.03 * Math.cos(this.angle);
            this.parent.velocity.y = 0.03 * Math.sin(this.angle);
            this.arena.controlling = false;
        }

        let cursorX = Math.round(this.parent.loc.x + this.length * Math.cos(this.angle));
        let cursorY = Math.round(this.parent.loc.y + this.length * Math.sin(this.angle));
        graphicsHandler.drawCircle(2, cursorX, cursorY, 2);
    }
}

class Marble {
    constructor(radius, drag=0.001, mass=1) {
        this.radius = radius;
        this.drag = drag;
        this.mass = mass;
        this.loc = {x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2};
        this.velocity = {x: 0, y: 0};
        this.type = MARBLE_TYPE_ALLEY;
        this.arena = null;
    }

    inBounds() {
        let arenaCenter = {x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2};
        return getDistance(this.loc, arenaCenter) <= this.arena.ring_radius + this.radius;
    }

    isTouching(other) {
        return (this.loc != other.loc) && (getDistance(this.loc, other.loc) <= this.radius + other.radius);
    }

    isTouchingAny() {
        for (let i = 0; i < this.arena.alleys.length; i++) {
            if (this.isTouching(this.arena.alleys[i])) {
                return true;
            }
        }
        if (this.type == MARBLE_TYPE_ALLEY) {
            return this.isTouching(this.arena.shooter_opp) || this.isTouching(this.arena.shooter_player);
        }
        return false;
    }

    getSpeedSquared() {
        return this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y;
    }

    setStartPos() {
        let phiRand = Math.random() * (this.arena.ring_radius - this.radius);
        let thetaRand = Math.random() * 2 * Math.PI;
        this.loc.x = Math.round(phiRand * Math.cos(thetaRand) + SCREEN_WIDTH / 2);
        this.loc.y = Math.round(phiRand * Math.sin(thetaRand) + SCREEN_HEIGHT / 2);
        while (this.isTouchingAny()) {
            let phiRand = Math.random() * (this.arena.ring_radius - this.radius);
            let thetaRand = Math.random() * 2 * Math.PI;
            this.loc.x = Math.round(phiRand * Math.cos(thetaRand) + SCREEN_WIDTH / 2);
            this.loc.y = Math.round(phiRand * Math.sin(thetaRand) + SCREEN_HEIGHT / 2);
        }
    }

    update(deltaT) {
        if (this.arena !== null) {
            if (this.type != MARBLE_TYPE_SHOOTER) {
                let shooters = [this.arena.shooter_player, this.arena.shooter_opp];
                for (let i = 0; i < shooters.length; i++) {
                    let shooter = shooters[i];
                    if (this.isTouching(shooter)) {
                        let alpha = (shooter.mass - this.mass) / (shooter.mass + this.mass);
                        let beta = 2 * this.mass / (shooter.mass + this.mass);
                        let tempVelX = shooter.velocity.x;
                        let tempVelY = shooter.velocity.y;
                        shooter.velocity.x = alpha * tempVelX + beta * this.velocity.x;
                        shooter.velocity.y = alpha * tempVelY + beta * this.velocity.y;
                        this.velocity.x = beta * tempVelX + alpha * this.velocity.x;
                        this.velocity.y = beta * tempVelY + alpha * this.velocity.y;
                    }
                }
            }
        }
        this.velocity.x -= this.velocity.x * this.drag * deltaT;
        this.velocity.y -= this.velocity.y * this.drag * deltaT;
        this.loc.x += this.velocity.x * deltaT;
        this.loc.y += this.velocity.y * deltaT;

        graphicsHandler.drawCircle(2, Math.floor(this.loc.x), Math.floor(this.loc.y), this.radius);
    }
}

class MarbleArena {
    constructor(shooter_player, shooter_opp) {
        this.ring_radius = 64
        this.alleys = [];
        this.shooter_player = shooter_player;
        this.shooter_player.type = MARBLE_TYPE_SHOOTER;
        this.shooter_player.arena = this;
        this.shooter_player.setStartPos();
        this.shooter_opp = shooter_opp;
        this.shooter_opp.type = MARBLE_TYPE_SHOOTER;
        this.shooter_opp.arena = this;
        this.shooter_opp.setStartPos();
        this.turn = TURN_PLAYER;
        this.controlling = false;
        this.initialPlacing = true;
        this.pointer = new MarblePointer(this.shooter_player, this);
        this.marbleAiHandler = new MarbleAiHandler(this.shooter_opp, this);
    }

    getTotalMarbleSpeed() {
        let result = 0
        result += this.shooter_player.getSpeedSquared();
        result += this.shooter_opp.getSpeedSquared();
        for (let i = 0; i < this.alleys.length; i++) {
            result += this.alleys[i].getSpeedSquared();
        }
        return result;
    }

    setAlleys(alleys) {
        this.alleys = alleys;
        for (let i = 0; i < this.alleys.length; i++) {
            this.alleys[i].arena = this;
            this.alleys[i].setStartPos();
        }
    }

    update(deltaT) {
        graphicsHandler.fillScreen(1);
        graphicsHandler.drawCircle(2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, this.ring_radius);

        if (this.initialPlacing) {
            if (inputHandler.keyPressed.up) {
                this.shooter_player.loc.y -= MARBLE_CURSOR_SPEED * deltaT;
            }
            if (inputHandler.keyPressed.down) {
                this.shooter_player.loc.y += MARBLE_CURSOR_SPEED * deltaT;
            }
            if (inputHandler.keyPressed.right) {
                this.shooter_player.loc.x += MARBLE_CURSOR_SPEED * deltaT;
            }
            if (inputHandler.keyPressed.left) {
                this.shooter_player.loc.x -= MARBLE_CURSOR_SPEED * deltaT;
            }
            if (inputHandler.keyPressed.start) {
                this.initialPlacing = false;
                this.controlling = true;
            }
        }

        else if (this.controlling) {
            if (this.turn == TURN_PLAYER) {
                this.pointer.update(deltaT);
            }
            else {
                this.marbleAiHandler.update(deltaT);
            }
        }

        else {
            if (this.getTotalMarbleSpeed() < 0.00001) {
                this.turn = (this.turn + 1) % 2;
                this.controlling = true;
                if (this.turn == TURN_OPPONENT) {
                    this.marbleAiHandler.pickTargetAngle();
                }
            }
        }

        this.shooter_player.update(deltaT);
        this.shooter_opp.update(deltaT);
        for (let i = 0; i < this.alleys.length; i++) {
            this.alleys[i].update(deltaT);
        }
    }
}

arena = new MarbleArena(new Marble(10), new Marble(10));
arena.setAlleys([new Marble(6), new Marble(7), new Marble(8)]);

audioHandler.playSong(test_song, loop=true);

var lastTime = 0;
var deltaT = 0;

function gameLoop(now) {
    arena.update(deltaT);

    graphicsHandler.draw();

    requestAnimationFrame(gameLoop);
    deltaT = now - lastTime;
    lastTime = now;
}

requestAnimationFrame(gameLoop);