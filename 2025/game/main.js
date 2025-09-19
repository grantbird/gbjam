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

const dojoSong = {
    tempo:54,
    divisionsPerBeat:2,
    length:16,
    env1:STRING_ENV,
    env2:STRING_ENV,
    envNoise:PIANO_ENV,
    notes:{
        channel1:{
            0:{pitch:"D6", duration:1},
            2:{pitch:"F6", duration:1},
            4:{pitch:"E6", duration:1},
            8:{pitch:"D6", duration:1},
            10:{pitch:"F6", duration:1},
            12:{pitch:"G6", duration:1},
            16:{pitch:"Bb5", duration:1},
            18:{pitch:"D6", duration:1},
            20:{pitch:"E6", duration:1},
            22:{pitch:"D6", duration:1},
            24:{pitch:"F6", duration:1},
            26:{pitch:"A6", duration:1},
            28:{pitch:"E6", duration:1},
        },
        channel2:{
            0:{pitch:"F4", duration:1},
            1:{pitch:"D4", duration:1},
            2:{pitch:"A4", duration:1},
            3:{pitch:"D5", duration:1},
            4:{pitch:"Bb4", duration:1},
            5:{pitch:"D5", duration:1},
            6:{pitch:"Bb4", duration:1},
            7:{pitch:"A4", duration:1},
            8:{pitch:"F4", duration:1},
            9:{pitch:"D4", duration:1},
            10:{pitch:"A4", duration:1},
            11:{pitch:"D5", duration:1},
            12:{pitch:"Bb4", duration:1},
            13:{pitch:"D5", duration:1},
            14:{pitch:"Bb4", duration:1},
            15:{pitch:"A4", duration:1},
            16:{pitch:"E4", duration:1},
            17:{pitch:"D4", duration:1},
            18:{pitch:"F4", duration:1},
            19:{pitch:"A4", duration:1},
            20:{pitch:"Bb4", duration:1},
            21:{pitch:"A4", duration:1},
            22:{pitch:"F4", duration:1},
            23:{pitch:"A4", duration:1},
            24:{pitch:"F4", duration:1},
            25:{pitch:"D4", duration:1},
            26:{pitch:"A4", duration:1},
            27:{pitch:"D5", duration:1},
            28:{pitch:"Bb4", duration:1},
            29:{pitch:"D5", duration:1},
            30:{pitch:"Bb4", duration:1},
            31:{pitch:"A4", duration:1},
        },
        channelNoise:{},
    },
};

const gamblingSong = {
    tempo:120,
    divisionsPerBeat:2,
    length:48,
    env1:STRING_ENV,
    env2:STRING_ENV,
    envNoise:PIANO_ENV,
    notes:{
        channel1:{
            0:{pitch:"G#5", duration:1},
            1:{pitch:"A5", duration:1},
            2:{pitch:"G#5", duration:1},
            3:{pitch:"A5", duration:1},
            5:{pitch:"C5", duration:1},
            6:{pitch:"F5", duration:1},
            7:{pitch:"G5", duration:1},
            8:{pitch:"G#5", duration:1},
            9:{pitch:"A5", duration:1},
            10:{pitch:"G#5", duration:1},
            11:{pitch:"A5", duration:1},
            15:{pitch:"C6", duration:1},
            17:{pitch:"A5", duration:1},
            18:{pitch:"G5", duration:1},
            19:{pitch:"F5", duration:1},
            20:{pitch:"G5", duration:1},
            21:{pitch:"F5", duration:1},
            22:{pitch:"D5", duration:1},
            23:{pitch:"F5", duration:1},
            26:{pitch:"Eb6", duration:1},
            27:{pitch:"F6", duration:1},
            29:{pitch:"F5", duration:1},
            30:{pitch:"G5", duration:1},
            31:{pitch:"G#5", duration:1},
            32:{pitch:"A5", duration:1},
            33:{pitch:"Bb5", duration:1},
            34:{pitch:"A5", duration:1},
            35:{pitch:"Bb5", duration:1},
            37:{pitch:"F5", duration:1},
            38:{pitch:"G5", duration:1},
            39:{pitch:"G#5", duration:1},
            40:{pitch:"A5", duration:1},
            41:{pitch:"Bb5", duration:1},
            42:{pitch:"A5", duration:1},
            43:{pitch:"Bb5", duration:1},
            47:{pitch:"C6", duration:1},
            49:{pitch:"A5", duration:1},
            50:{pitch:"G5", duration:1},
            51:{pitch:"F5", duration:1},
            52:{pitch:"G5", duration:1},
            53:{pitch:"F5", duration:1},
            54:{pitch:"D5", duration:1},
            55:{pitch:"F5", duration:1},
            58:{pitch:"Eb6", duration:1},
            59:{pitch:"F6", duration:1},
            64:{pitch:"B5", duration:1},
            65:{pitch:"C6", duration:1},
            66:{pitch:"B5", duration:1},
            67:{pitch:"C6", duration:1},
            68:{pitch:"F5", duration:1},
            71:{pitch:"F5", duration:1},
            72:{pitch:"A5", duration:1},
            73:{pitch:"Bb5", duration:1},
            74:{pitch:"A5", duration:1},
            75:{pitch:"F5", duration:1},
            79:{pitch:"C6", duration:1},
            81:{pitch:"A5", duration:1},
            82:{pitch:"G5", duration:1},
            83:{pitch:"F5", duration:1},
            84:{pitch:"G5", duration:1},
            85:{pitch:"F5", duration:1},
            86:{pitch:"D5", duration:1},
            87:{pitch:"F5", duration:1},
            90:{pitch:"Eb6", duration:1},
            91:{pitch:"F6", duration:1},
        },
        channel2:{
            0:{pitch:"F3", duration:1},
            1:{pitch:"F3", duration:1},
            2:{pitch:"G#3", duration:1},
            3:{pitch:"A3", duration:1},
            4:{pitch:"C4", duration:1},
            5:{pitch:"C4", duration:1},
            6:{pitch:"D4", duration:1},
            7:{pitch:"F4", duration:1},
            8:{pitch:"F3", duration:1},
            9:{pitch:"F3", duration:1},
            10:{pitch:"G#3", duration:1},
            11:{pitch:"A3", duration:1},
            12:{pitch:"C4", duration:1},
            13:{pitch:"C4", duration:1},
            14:{pitch:"D4", duration:1},
            15:{pitch:"F4", duration:1},
            16:{pitch:"F3", duration:1},
            17:{pitch:"F3", duration:1},
            18:{pitch:"G#3", duration:1},
            19:{pitch:"A3", duration:1},
            20:{pitch:"C4", duration:1},
            21:{pitch:"C4", duration:1},
            22:{pitch:"D4", duration:1},
            23:{pitch:"F4", duration:1},
            24:{pitch:"F3", duration:1},
            25:{pitch:"F3", duration:1},
            26:{pitch:"Eb3", duration:1},
            27:{pitch:"F3", duration:1},
            32:{pitch:"Bb3", duration:1},
            33:{pitch:"Bb3", duration:1},
            34:{pitch:"C#4", duration:1},
            35:{pitch:"D4", duration:1},
            36:{pitch:"F4", duration:1},
            37:{pitch:"F4", duration:1},
            38:{pitch:"G4", duration:1},
            39:{pitch:"Bb4", duration:1},
            40:{pitch:"Bb3", duration:1},
            41:{pitch:"Bb3", duration:1},
            42:{pitch:"C#4", duration:1},
            43:{pitch:"D4", duration:1},
            44:{pitch:"F4", duration:1},
            45:{pitch:"F4", duration:1},
            46:{pitch:"G4", duration:1},
            47:{pitch:"Bb4", duration:1},
            48:{pitch:"F3", duration:1},
            49:{pitch:"F3", duration:1},
            50:{pitch:"G#3", duration:1},
            51:{pitch:"A3", duration:1},
            52:{pitch:"C4", duration:1},
            53:{pitch:"C4", duration:1},
            54:{pitch:"D4", duration:1},
            55:{pitch:"F4", duration:1},
            56:{pitch:"F3", duration:1},
            57:{pitch:"F3", duration:1},
            58:{pitch:"Eb3", duration:1},
            59:{pitch:"F3", duration:1},
            64:{pitch:"C4", duration:1},
            65:{pitch:"C4", duration:1},
            66:{pitch:"D4", duration:1},
            67:{pitch:"D#4", duration:1},
            68:{pitch:"E4", duration:1},
            69:{pitch:"E4", duration:1},
            70:{pitch:"D#4", duration:1},
            71:{pitch:"D4", duration:1},
            72:{pitch:"Bb3", duration:1},
            73:{pitch:"Bb3", duration:1},
            74:{pitch:"C#4", duration:1},
            75:{pitch:"D4", duration:1},
            76:{pitch:"F4", duration:1},
            77:{pitch:"F4", duration:1},
            78:{pitch:"G4", duration:1},
            79:{pitch:"Bb4", duration:1},
            80:{pitch:"F3", duration:1},
            81:{pitch:"F3", duration:1},
            82:{pitch:"G#3", duration:1},
            83:{pitch:"A3", duration:1},
            84:{pitch:"C4", duration:1},
            85:{pitch:"C4", duration:1},
            86:{pitch:"D4", duration:1},
            87:{pitch:"F4", duration:1},
            88:{pitch:"F3", duration:1},
            89:{pitch:"F3", duration:1},
            90:{pitch:"Eb3", duration:1},
            91:{pitch:"F3", duration:1},
        },
        channelNoise:{},
    },
};

const bossSong = {
    tempo:156,
    divisionsPerBeat:3,
    length:64,
    env1:STRING_ENV,
    env2:STRING_ENV,
    envNoise:PIANO_ENV,
    notes:{
        channel1:{
            0:{pitch:"D3", duration:2},
            2:{pitch:"D3", duration:1},
            3:{pitch:"F3", duration:1},
            4:{pitch:"E3", duration:1},
            5:{pitch:"F3", duration:1},
            6:{pitch:"E3", duration:2},
            8:{pitch:"C3", duration:2},
            10:{pitch:"A2", duration:2},
            12:{pitch:"D3", duration:2},
            14:{pitch:"D3", duration:1},
            15:{pitch:"F3", duration:1},
            16:{pitch:"E3", duration:1},
            17:{pitch:"F3", duration:1},
            18:{pitch:"G3", duration:2},
            20:{pitch:"E3", duration:2},
            22:{pitch:"C3", duration:2},
            24:{pitch:"D3", duration:2},
            26:{pitch:"D3", duration:1},
            27:{pitch:"F3", duration:1},
            28:{pitch:"E3", duration:1},
            29:{pitch:"F3", duration:1},
            30:{pitch:"E3", duration:2},
            32:{pitch:"C3", duration:2},
            34:{pitch:"A2", duration:2},
            36:{pitch:"Bb2", duration:2},
            38:{pitch:"A2", duration:1},
            39:{pitch:"G2", duration:2},
            41:{pitch:"Bb2", duration:1},
            42:{pitch:"C3", duration:1},
            43:{pitch:"Bb2", duration:1},
            44:{pitch:"C3", duration:1},
            45:{pitch:"A2", duration:2},
            47:{pitch:"C3", duration:1},
            48:{pitch:"D3", duration:2},
            50:{pitch:"D3", duration:1},
            51:{pitch:"F3", duration:1},
            52:{pitch:"E3", duration:1},
            53:{pitch:"F3", duration:1},
            54:{pitch:"E3", duration:2},
            56:{pitch:"C3", duration:2},
            58:{pitch:"A2", duration:2},
            60:{pitch:"D3", duration:2},
            62:{pitch:"D3", duration:1},
            63:{pitch:"F3", duration:1},
            64:{pitch:"E3", duration:1},
            65:{pitch:"F3", duration:1},
            66:{pitch:"G3", duration:2},
            68:{pitch:"E3", duration:2},
            70:{pitch:"C3", duration:2},
            72:{pitch:"D3", duration:2},
            74:{pitch:"D3", duration:1},
            75:{pitch:"F3", duration:1},
            76:{pitch:"E3", duration:1},
            77:{pitch:"F3", duration:1},
            78:{pitch:"E3", duration:2},
            80:{pitch:"C3", duration:2},
            82:{pitch:"A2", duration:2},
            84:{pitch:"Bb2", duration:2},
            86:{pitch:"A2", duration:1},
            87:{pitch:"G2", duration:2},
            89:{pitch:"Bb2", duration:1},
            90:{pitch:"C3", duration:1},
            91:{pitch:"Bb2", duration:1},
            92:{pitch:"C3", duration:1},
            93:{pitch:"A2", duration:2},
            95:{pitch:"C3", duration:1},
            96:{pitch:"D4", duration:3},
            99:{pitch:"F4", duration:3},
            102:{pitch:"E4", duration:3},
            105:{pitch:"G4", duration:2},
            107:{pitch:"E4", duration:1},
            108:{pitch:"C4", duration:3},
            111:{pitch:"E4", duration:2},
            113:{pitch:"C4", duration:1},
            114:{pitch:"D4", duration:3},
            120:{pitch:"D4", duration:3},
            123:{pitch:"F4", duration:3},
            126:{pitch:"E4", duration:3},
            129:{pitch:"G4", duration:3},
            132:{pitch:"C4", duration:4},
            136:{pitch:"D4", duration:1},
            137:{pitch:"E4", duration:1},
            138:{pitch:"D4", duration:3},
            144:{pitch:"D4", duration:3},
            147:{pitch:"F4", duration:3},
            150:{pitch:"E4", duration:3},
            153:{pitch:"G4", duration:2},
            155:{pitch:"E4", duration:1},
            156:{pitch:"C4", duration:3},
            159:{pitch:"E4", duration:2},
            161:{pitch:"C4", duration:1},
            162:{pitch:"D4", duration:3},
            168:{pitch:"D4", duration:3},
            171:{pitch:"A4", duration:3},
            174:{pitch:"G4", duration:3},
            177:{pitch:"F4", duration:3},
            180:{pitch:"E4", duration:4},
            184:{pitch:"C4", duration:1},
            185:{pitch:"A3", duration:1},
            186:{pitch:"D4", duration:3},
        },
        channel2:{
            0:{pitch:"D2", duration:2},
            2:{pitch:"D2", duration:1},
            3:{pitch:"D2", duration:1},
            4:{pitch:"D2", duration:1},
            5:{pitch:"D2", duration:1},
            6:{pitch:"D2", duration:2},
            8:{pitch:"D2", duration:1},
            9:{pitch:"D2", duration:1},
            10:{pitch:"D2", duration:1},
            11:{pitch:"D2", duration:1},
            12:{pitch:"D2", duration:2},
            14:{pitch:"D2", duration:1},
            15:{pitch:"D2", duration:1},
            16:{pitch:"D2", duration:1},
            17:{pitch:"D2", duration:1},
            18:{pitch:"D2", duration:2},
            20:{pitch:"D2", duration:1},
            21:{pitch:"D2", duration:1},
            22:{pitch:"D2", duration:1},
            23:{pitch:"D2", duration:1},
            24:{pitch:"D2", duration:2},
            26:{pitch:"D2", duration:1},
            27:{pitch:"D2", duration:1},
            28:{pitch:"D2", duration:1},
            29:{pitch:"D2", duration:1},
            30:{pitch:"D2", duration:2},
            32:{pitch:"D2", duration:1},
            33:{pitch:"D2", duration:1},
            34:{pitch:"D2", duration:1},
            35:{pitch:"D2", duration:1},
            36:{pitch:"Bb1", duration:2},
            38:{pitch:"Bb1", duration:1},
            39:{pitch:"Bb1", duration:1},
            40:{pitch:"Bb1", duration:1},
            41:{pitch:"Bb1", duration:1},
            42:{pitch:"C2", duration:2},
            44:{pitch:"C2", duration:1},
            45:{pitch:"A1", duration:1},
            46:{pitch:"A1", duration:1},
            47:{pitch:"A1", duration:1},
            48:{pitch:"D2", duration:2},
            50:{pitch:"D2", duration:1},
            51:{pitch:"D2", duration:1},
            52:{pitch:"D2", duration:1},
            53:{pitch:"D2", duration:1},
            54:{pitch:"D2", duration:2},
            56:{pitch:"D2", duration:1},
            57:{pitch:"D2", duration:1},
            58:{pitch:"D2", duration:1},
            59:{pitch:"D2", duration:1},
            60:{pitch:"D2", duration:2},
            62:{pitch:"D2", duration:1},
            63:{pitch:"D2", duration:1},
            64:{pitch:"D2", duration:1},
            65:{pitch:"D2", duration:1},
            66:{pitch:"D2", duration:2},
            68:{pitch:"D2", duration:1},
            69:{pitch:"D2", duration:1},
            70:{pitch:"D2", duration:1},
            71:{pitch:"D2", duration:1},
            72:{pitch:"D2", duration:2},
            74:{pitch:"D2", duration:1},
            75:{pitch:"D2", duration:1},
            76:{pitch:"D2", duration:1},
            77:{pitch:"D2", duration:1},
            78:{pitch:"D2", duration:2},
            80:{pitch:"D2", duration:1},
            81:{pitch:"D2", duration:1},
            82:{pitch:"D2", duration:1},
            83:{pitch:"D2", duration:1},
            84:{pitch:"Bb1", duration:2},
            86:{pitch:"Bb1", duration:1},
            87:{pitch:"Bb1", duration:1},
            88:{pitch:"Bb1", duration:1},
            89:{pitch:"Bb1", duration:1},
            90:{pitch:"C2", duration:2},
            92:{pitch:"C2", duration:1},
            93:{pitch:"A1", duration:1},
            94:{pitch:"A1", duration:1},
            95:{pitch:"A1", duration:1},
            96:{pitch:"D2", duration:2},
            98:{pitch:"D2", duration:1},
            99:{pitch:"D2", duration:1},
            100:{pitch:"D2", duration:1},
            101:{pitch:"D2", duration:1},
            102:{pitch:"D2", duration:2},
            104:{pitch:"D2", duration:1},
            105:{pitch:"D2", duration:1},
            106:{pitch:"D2", duration:1},
            107:{pitch:"D2", duration:1},
            108:{pitch:"D2", duration:2},
            110:{pitch:"D2", duration:1},
            111:{pitch:"D2", duration:1},
            112:{pitch:"D2", duration:1},
            113:{pitch:"D2", duration:1},
            114:{pitch:"D2", duration:2},
            116:{pitch:"D2", duration:1},
            117:{pitch:"D2", duration:1},
            118:{pitch:"D2", duration:1},
            119:{pitch:"D2", duration:1},
            120:{pitch:"D2", duration:2},
            122:{pitch:"D2", duration:1},
            123:{pitch:"D2", duration:1},
            124:{pitch:"D2", duration:1},
            125:{pitch:"D2", duration:1},
            126:{pitch:"D2", duration:2},
            128:{pitch:"D2", duration:1},
            129:{pitch:"D2", duration:1},
            130:{pitch:"D2", duration:1},
            131:{pitch:"D2", duration:1},
            132:{pitch:"Bb1", duration:2},
            134:{pitch:"Bb1", duration:1},
            135:{pitch:"C2", duration:1},
            136:{pitch:"C2", duration:1},
            137:{pitch:"C2", duration:1},
            138:{pitch:"D2", duration:2},
            140:{pitch:"D2", duration:1},
            141:{pitch:"A1", duration:1},
            142:{pitch:"A1", duration:1},
            143:{pitch:"A1", duration:1},
            144:{pitch:"D2", duration:2},
            146:{pitch:"D2", duration:1},
            147:{pitch:"D2", duration:1},
            148:{pitch:"D2", duration:1},
            149:{pitch:"D2", duration:1},
            150:{pitch:"D2", duration:2},
            152:{pitch:"D2", duration:1},
            153:{pitch:"D2", duration:1},
            154:{pitch:"D2", duration:1},
            155:{pitch:"D2", duration:1},
            156:{pitch:"D2", duration:2},
            158:{pitch:"D2", duration:1},
            159:{pitch:"D2", duration:1},
            160:{pitch:"D2", duration:1},
            161:{pitch:"D2", duration:1},
            162:{pitch:"D2", duration:2},
            164:{pitch:"D2", duration:1},
            165:{pitch:"D2", duration:1},
            166:{pitch:"D2", duration:1},
            167:{pitch:"D2", duration:1},
            168:{pitch:"D2", duration:2},
            170:{pitch:"D2", duration:1},
            171:{pitch:"D2", duration:1},
            172:{pitch:"D2", duration:1},
            173:{pitch:"D2", duration:1},
            174:{pitch:"D2", duration:2},
            176:{pitch:"D2", duration:1},
            177:{pitch:"D2", duration:1},
            178:{pitch:"D2", duration:1},
            179:{pitch:"D2", duration:1},
            180:{pitch:"Bb1", duration:2},
            182:{pitch:"Bb1", duration:1},
            183:{pitch:"C2", duration:1},
            184:{pitch:"C2", duration:1},
            185:{pitch:"C2", duration:1},
            186:{pitch:"D2", duration:2},
            188:{pitch:"D2", duration:1},
            189:{pitch:"A1", duration:1},
            190:{pitch:"A1", duration:1},
            191:{pitch:"A1", duration:1},
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
const WINDOW_OVERWORLD = 0;
const WINDOW_ARENA = 1;
const SEQUENCE_PLACE_SHOOTER = 0;
const SEQUENCE_PLACE_ALLEYS = 1;
const SEQUENCE_FLIP_COIN = 2;
const SEQUENCE_PLAYER_TURN = 3;
const SEQUENCE_AI_TURN = 4;
const SEQUENCE_MARBLE_RESOLVE = 5;
const SEQUENCE_GAME_OVER = 6;

/* SPRITES */

const column_bmp = [
    [1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 1, 4, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1]
];
const corner_bottom_left_bmp = [
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const corner_bottom_right_bmp = [
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const corner_top_left_bmp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
];
const corner_top_right_bmp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
];
const kakejiku_bottom_left_bmp = [
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 1, 1, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const kakejiku_bottom_right_bmp = [
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const kakejiku_top_left_bmp = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1]
];
const kakejiku_top_right_bmp = [
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 1, 1, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1]
];
const marble_stand_bmp = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 4, 1, 1, 4, 4, 4, 1, 1, 4, 4, 4, 1, 1, 4, 3], 
    [3, 1, 4, 2, 1, 4, 1, 4, 3, 1, 4, 1, 4, 3, 1, 3], 
    [3, 1, 2, 2, 1, 4, 1, 3, 3, 1, 4, 1, 3, 3, 1, 3], 
    [3, 4, 1, 1, 4, 4, 4, 1, 1, 4, 4, 4, 1, 1, 4, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 3], 
    [3, 1, 4, 3, 1, 4, 4, 4, 4, 4, 4, 1, 4, 2, 1, 3], 
    [3, 1, 3, 3, 1, 4, 4, 4, 4, 4, 4, 1, 2, 2, 1, 3], 
    [3, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 4, 1, 1, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 3], 
    [3, 1, 4, 2, 1, 4, 1, 4, 3, 1, 4, 4, 4, 4, 4, 3], 
    [3, 1, 2, 2, 1, 4, 1, 3, 3, 1, 4, 4, 4, 4, 4, 3], 
    [3, 4, 1, 1, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];
const morihei_bmp = [
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], 
    [0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 0], 
    [0, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0], 
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], 
    [1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1], 
    [1, 3, 4, 1, 1, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1], 
    [1, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 1], 
    [0, 1, 3, 3, 1, 4, 4, 1, 1, 4, 4, 1, 3, 3, 1, 0], 
    [0, 0, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 0, 1, 4, 1, 4, 4, 4, 4, 1, 4, 1, 0, 0, 0], 
    [0, 0, 1, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 0, 0], 
    [0, 1, 4, 1, 4, 4, 4, 1, 1, 4, 4, 4, 1, 4, 1, 0], 
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0], 
    [0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0], 
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];
const ring_bottom_left_bmp = [
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4], 
    [2, 4, 4, 4, 2, 4, 4, 4, 4, 4, 1, 4, 2, 1, 4, 4], 
    [2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 1, 2, 2, 1, 4, 4], 
    [2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const ring_bottom_right_bmp = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const ring_top_left_bmp = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2], 
    [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 4, 2, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 2, 4, 1, 4, 3, 1, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 4, 2, 4, 1, 3, 3, 1, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];
const ring_top_right_bmp = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 2], 
    [2, 2, 2, 2, 4, 4, 4, 4, 4, 1, 4, 2, 1, 4, 4, 2], 
    [4, 4, 4, 4, 2, 2, 4, 4, 4, 1, 2, 2, 1, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 1, 1, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2]
];
const squatter_bmp = [
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 3, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0], 
    [0, 1, 3, 3, 1, 1, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0], 
    [0, 1, 3, 3, 3, 4, 1, 1, 3, 2, 2, 0, 0, 0, 0, 0], 
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0], 
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 1, 2, 3, 3, 3, 3, 1, 3, 3, 3, 1, 0, 0, 0], 
    [0, 0, 1, 2, 2, 3, 3, 1, 3, 3, 3, 3, 1, 0, 0, 0], 
    [0, 1, 3, 3, 2, 3, 3, 1, 3, 1, 3, 3, 1, 0, 0, 0], 
    [0, 1, 2, 3, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 0, 0], 
    [0, 1, 2, 2, 3, 3, 1, 3, 3, 1, 3, 1, 0, 0, 0, 0], 
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1, 1, 0, 0, 0], 
    [0, 0, 1, 2, 2, 2, 3, 3, 3, 1, 3, 3, 3, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
];
const sword_bmp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 4, 1, 4, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2], 
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2], 
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2], 
    [2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2], 
    [2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const tatami_bottom_bmp = [
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const tatami_left_bmp = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const tatami_right_bmp = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const tatami_top_bmp = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], 
    [2, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 2], 
    [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2]
];
const wall_horizontal_bmp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const wall_vertical_bmp = [
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
];
const bottle_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0], 
    [0, 0, 1, 3, 3, 3, 3, 2, 2, 2, 1, 0, 0, 0, 0, 0], 
    [0, 0, 1, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const cliff_bottom_bmp = [
    [1, 2, 4, 1, 1, 4, 4, 1, 2, 2, 4, 1, 1, 4, 4, 1], 
    [1, 2, 2, 1, 1, 2, 4, 1, 2, 2, 2, 1, 1, 2, 4, 1], 
    [1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1], 
    [1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 2, 1], 
    [1, 2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 4, 1, 1, 2, 1], 
    [1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 1, 1], 
    [1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 2, 2, 4, 1], 
    [1, 2, 4, 1, 1, 1, 2, 1, 1, 4, 4, 1, 1, 1, 1, 1], 
    [1, 1, 2, 1, 1, 1, 2, 4, 1, 2, 4, 1, 1, 2, 4, 1], 
    [1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1], 
    [1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 2, 4, 1, 1, 2, 1], 
    [1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1], 
    [1, 2, 2, 1, 1, 2, 2, 4, 1, 2, 2, 1, 1, 1, 2, 1], 
    [1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const cliff_top_bmp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 2, 4, 1, 1, 1, 2, 2, 4, 1, 2, 1, 1, 4, 4, 1], 
    [1, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1, 1, 2, 4, 1], 
    [1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 1], 
    [1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1], 
    [1, 1, 2, 1, 1, 2, 2, 1, 2, 4, 4, 1, 1, 1, 2, 1], 
    [1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 4, 4, 1, 1, 1], 
    [1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 4, 4, 1], 
    [1, 1, 1, 1, 2, 4, 1, 2, 2, 1, 1, 2, 2, 2, 4, 1], 
    [1, 2, 4, 2, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 1, 1], 
    [1, 2, 2, 1, 1, 2, 2, 4, 1, 1, 1, 1, 2, 2, 1, 1], 
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 4, 4, 1, 1, 1, 1], 
    [1, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 4, 1, 1, 1, 1], 
    [1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 1], 
    [1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const flower_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 4, 4, 0, 4, 4, 4, 0, 4, 4, 0, 0, 0, 0], 
    [0, 0, 0, 0, 4, 4, 3, 3, 3, 4, 4, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 4, 4, 3, 3, 3, 4, 4, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const grass_1_bmp = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];
const grass_2_bmp = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];
const grass_sand_1_bmp = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3], 
    [3, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 4], 
    [4, 3, 3, 4, 4, 3, 3, 3, 4, 4, 3, 4, 4, 3, 3, 4], 
    [4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const grass_sand_2_bmp = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3], 
    [4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 4], 
    [4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const plank_left_bmp = [
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const plank_right_bmp = [
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const rock_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 2, 2, 4, 4, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 4, 1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 4, 1, 0, 0, 0], 
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 4, 1, 0, 0, 0], 
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 0, 0], 
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0], 
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0], 
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0], 
    [0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0], 
    [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const sand_1_bmp = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const sand_2_bmp = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const shell_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 0, 0], 
    [0, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
    [0, 0, 0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const shore_bmp = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3], 
    [4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4], 
    [4, 4, 4, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4], 
    [4, 4, 3, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 3, 4, 4], 
    [3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [4, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3], 
    [3, 4, 3, 4, 3, 4, 3, 4, 4, 4, 3, 4, 3, 4, 3, 4], 
    [3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];
const shore_corner_bmp = [
    [3, 3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3], 
    [3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3, 4], 
    [3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4], 
    [3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4], 
    [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3], 
    [3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 4, 3, 4], 
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];
const shore_vertical_bmp = [
    [3, 3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 2, 4], 
    [3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 2, 4, 4], 
    [3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4],
];
const store_bottom_left_bmp = [
    [0, 0, 1, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 2, 2, 2, 4, 4, 2, 2, 4, 4, 4], 
    [0, 0, 1, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4], 
    [0, 0, 1, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4], 
    [0, 0, 1, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4], 
    [0, 0, 1, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4], 
    [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const store_bottom_middle_bmp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 2, 2, 4, 4, 4, 2, 1, 1, 2, 2, 4, 4, 4, 2, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 3, 2, 1, 1, 2, 3, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 3, 2, 1, 1, 2, 3, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 4, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const store_bottom_right_bmp = [
    [4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 2, 2, 2, 4, 4, 2, 2, 4, 4, 4, 1, 0, 0], 
    [4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 1, 0, 0], 
    [4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 1, 0, 0], 
    [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1, 0, 0], 
    [4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
];
const store_top_left_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 4], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 4, 3, 2, 4], 
    [0, 0, 0, 0, 1, 1, 1, 1, 2, 4, 3, 2, 4, 3, 2, 4], 
    [0, 0, 1, 1, 1, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4], 
    [0, 1, 1, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4], 
    [1, 2, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4], 
    [1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [0, 0, 1, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const store_top_middle_bmp = [
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1], 
    [1, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 1], 
    [3, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 3], 
    [3, 2, 2, 2, 2, 4, 2, 4, 4, 4, 4, 2, 2, 2, 2, 3], 
    [3, 2, 2, 2, 2, 4, 2, 4, 4, 2, 4, 2, 2, 2, 2, 3], 
    [3, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 3], 
    [3, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 3], 
    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const store_top_right_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [4, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [4, 2, 3, 4, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
    [4, 2, 3, 4, 2, 3, 4, 2, 1, 1, 1, 1, 0, 0, 0, 0], 
    [4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 1, 1, 1, 0, 0], 
    [4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 1, 1, 0], 
    [4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 2, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0], 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
];
const tree_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0], 
    [2, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 2, 2, 3, 2, 2, 3, 2, 2, 1, 0, 0, 0], 
    [0, 0, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 0, 0], 
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0], 
    [0, 1, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 1, 0], 
    [0, 1, 2, 2, 3, 3, 2, 2, 2, 2, 3, 3, 2, 2, 1, 0], 
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
    [1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1], 
    [0, 1, 1, 0, 1, 4, 1, 1, 1, 1, 4, 1, 0, 1, 1, 0], 
    [0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 4, 4, 2, 4, 4, 2, 4, 4, 1, 0, 0, 0], 
    [0, 0, 1, 4, 4, 4, 2, 4, 4, 2, 4, 4, 4, 1, 0, 0], 
    [0, 1, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 4, 1, 0], 
    [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
];
const water_bmp = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4], 
    [4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4], 
    [4, 4, 3, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 3, 4, 4], 
    [3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 
    [4, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3], 
    [3, 4, 3, 4, 3, 4, 3, 4, 4, 4, 3, 4, 3, 4, 3, 4], 
    [3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];
const gato_fl_neutral_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 2, 2, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 2, 2, 0, 0], 
    [0, 0, 0, 1, 0, 0, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 0, 0, 0], 
    [0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 0, 0, 0, 1], 
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], 
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
    [1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 0, 0], 
    [0, 0, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], 
    [1, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 1, 0], 
    [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
];
const gato_fl_walk_down_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 2, 2, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 2, 2, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 4, 4, 0, 0, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 0, 4, 4, 0, 1, 1, 0, 0, 0, 1], 
    [0, 1, 0, 0, 1, 1, 4, 4, 4, 1, 1, 1, 0, 0, 1, 0], 
    [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0], 
    [0, 0, 0, 0, 1, 3, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], 
    [0, 1, 0, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 1, 1, 0], 
    [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 1], 
    [0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
];
const gato_fl_walk_up_bmp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 4, 4, 0, 0, 1, 2, 2, 0, 0], 
    [0, 0, 0, 0, 1, 1, 4, 4, 4, 0, 1, 1, 0, 0, 0, 1], 
    [0, 1, 0, 0, 1, 1, 4, 4, 4, 1, 1, 1, 0, 0, 1, 0], 
    [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [1, 0, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0], 
    [0, 1, 0, 0, 1, 3, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], 
    [0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 0, 1, 1, 0], 
    [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 1], 
    [0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
];
const gato_fr_neutral_bmp = [
    [0, 0, 2, 2, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 2, 2, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 4, 4, 4, 0, 0, 1, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 0, 0], 
    [1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 0, 0], 
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
    [0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], 
    [0, 1, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 1], 
    [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0], 
    [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
const gato_fr_walk_down_bmp = [
    [0, 0, 2, 2, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 2, 2, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 4, 4, 4, 0, 1, 0, 0, 0, 0], 
    [1, 0, 0, 0, 1, 1, 0, 4, 4, 4, 1, 1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 1, 1, 1, 4, 4, 4, 1, 1, 0, 0, 0, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 0, 0], 
    [1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 3, 1, 0, 0, 0, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], 
    [0, 1, 1, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0], 
    [1, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0], 
    [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
];
const gato_fr_walk_up_bmp = [
    [0, 0, 2, 2, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 2, 2, 1, 0, 0, 4, 4, 0, 0, 1, 0, 0, 0, 0], 
    [1, 0, 0, 0, 1, 1, 0, 4, 4, 0, 1, 1, 0, 0, 0, 0], 
    [0, 1, 0, 0, 1, 1, 1, 4, 4, 4, 1, 1, 0, 0, 1, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], 
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], 
    [0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 0, 0], 
    [1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 3, 1, 0, 0, 1, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 1, 1, 0, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0], 
    [1, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
];

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
        for (let i = 0; i < this.rooms.length; i++) {
            for (let j = 0; j < this.rooms[i].length; j++) {
                if (this.rooms[i][j] !== null) {
                    this.rooms[i][j].world = this;
                }
            }
        }
        this.currentRoom = {x:startX, y:startY};
        this.game = null;
    }

    getCurrRoom() {
        return this.rooms[this.currentRoom.y][this.currentRoom.x];
    }

    update() {
        graphicsHandler.fillScreen(this.getCurrRoom().bgColor);

        for (let i = 0; i < SCREEN_HEIGHT / TILE_SIZE; i++) {
            for (let j = 0; j < SCREEN_WIDTH / TILE_SIZE; j++) {
                let currTile = this.getCurrRoom().tiles[i][j];
                graphicsHandler.drawBitmap(currTile.img, j * TILE_SIZE, i * TILE_SIZE);
            }
        }

        for (let i = 0; i < this.getCurrRoom().characters.length; i++) {
            this.getCurrRoom().characters[i].update();
        }
    }
}

class Character {
    constructor(frames, startX, startY, delay=ANIM_DELAY, fFrames=4, dialogue="") {
        this.frames = frames;
        this.loc = {x: startX, y: startY};
        this.currFrame = 0;
        this.animType = "f";
        this.dialogue = dialogue;
        setInterval(() => {this.currFrame = (this.currFrame + 1) % fFrames}, delay);
        this.room = null;
    }
    onInteract() {
        this.room.world.game.displayTextBox(this.dialogue, () => {
            this.room.world.game.startMarbleGame();
            audioHandler.playSong(bossSong, loop=true);
        });
        audioHandler.playGliss(1000, 2000, 100, 3, 0.1);
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
                this.loc.y < loc.y + h && this.loc.y + TILE_SIZE > loc.y);
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
    constructor(tiles, bgColor=3, characters=[], music=dojoSong) {
        this.tiles = tiles;
        this.bgColor = bgColor;
        this.characters = characters;
        for (let i = 0; i < this.characters.length; i++) {
            this.characters[i].room = this;
        }
        this.music = music
        this.world = null;
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
            this.arena.currSequence = SEQUENCE_MARBLE_RESOLVE;
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
            this.arena.currSequence = SEQUENCE_MARBLE_RESOLVE;
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
                        audioHandler.playNote(1661.2, 100, 3, SQUARE_ENV, 0.1);
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
        this.shooter_player.loc.x = SCREEN_WIDTH / 2;
        this.shooter_player.loc.y = SCREEN_HEIGHT / 2;
        this.shooter_opp = shooter_opp;
        this.shooter_opp.type = MARBLE_TYPE_SHOOTER;
        this.shooter_opp.arena = this;
        this.shooter_opp.loc.x = -SCREEN_WIDTH;
        this.shooter_opp.loc.y = -SCREEN_HEIGHT;
        this.currSequence = SEQUENCE_PLACE_SHOOTER;
        this.turn = TURN_PLAYER;
        this.pointer = new MarblePointer(this.shooter_player, this);
        this.marbleAiHandler = new MarbleAiHandler(this.shooter_opp, this);
        this.game = null;
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

    allMarblesOut() {
        for (let i = 0; i < this.alleys.length; i++) {
            if (this.alleys[i].inBounds()) {
                return false;
            }
        }
        return true;
    }

    update(deltaT) {
        graphicsHandler.fillScreen(1);
        graphicsHandler.drawCircle(2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, this.ring_radius);

        if (this.currSequence == SEQUENCE_PLACE_SHOOTER) {
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
                this.currSequence = SEQUENCE_PLACE_ALLEYS;
                this.shooter_opp.setStartPos();
                this.game.displayTextBox("Placing alleys...");
                this.setAlleys([new Marble(6), new Marble(7), new Marble(8)]);
            }
        }

        else if (this.currSequence == SEQUENCE_PLAYER_TURN) {
            this.pointer.update(deltaT);
        }

        else if (this.currSequence == SEQUENCE_AI_TURN) {
            this.marbleAiHandler.update(deltaT);
        }

        else if (this.currSequence == SEQUENCE_PLACE_ALLEYS) {
            if (inputHandler.keyPressed.start) {
                this.currSequence = SEQUENCE_PLAYER_TURN;
            }
        }

        else if (this.currSequence == SEQUENCE_MARBLE_RESOLVE) {
            if (this.getTotalMarbleSpeed() < 0.00001) {
                if (this.allMarblesOut()) {
                    this.currSequence = SEQUENCE_GAME_OVER;
                    this.game.displayTextBox("All the alleys have been knocked out.");
                }
                else if (this.turn == TURN_PLAYER) {
                    this.currSequence = SEQUENCE_AI_TURN;
                    this.turn = TURN_OPPONENT;
                }
                else if (this.turn == TURN_OPPONENT) {
                    this.currSequence = SEQUENCE_PLAYER_TURN;
                    this.turn = TURN_PLAYER;
                    this.marbleAiHandler.pickTargetAngle()
                }
            }
        }

        else if (this.currSequence == SEQUENCE_GAME_OVER) {
            if (inputHandler.keyPressed.b) {
                this.game.startOverworld();
            }
        }

        this.shooter_player.update(deltaT);
        this.shooter_opp.update(deltaT);
        for (let i = 0; i < this.alleys.length; i++) {
            this.alleys[i].update(deltaT);
        }
    }
}

class Game {
    constructor(overworld, player) {
        this.overworld = overworld;
        this.overworld.game = this;
        this.player = player;
        this.currWindow = WINDOW_OVERWORLD;
        this.arena = null;
        this.text = "";
        this.textOpen = false;
        this.textChars = 0;
        this.intervalCode;
        this.onTextFinish = () => {};
    }

    displayTextBox(text, onTextFinish = () => {}) {
        clearInterval(this.intervalCode);
        this.textOpen = true;
        this.text = text;
        this.textChars = 0;
        this.intervalCode = setInterval(() => {this.textChars++}, TEXT_DELAY);
        this.onTextFinish = onTextFinish;
    }

    startMarbleGame() {
        this.arena = new MarbleArena(new Marble(10), new Marble(10));
        //this.arena.setAlleys([new Marble(6), new Marble(7), new Marble(8)]);
        this.arena.game = this;
        this.currWindow = WINDOW_ARENA;
        this.displayTextBox("Place your shooter and press Start.");
    }

    startOverworld() {
        this.currWindow = WINDOW_OVERWORLD;
        audioHandler.playSong(this.overworld.getCurrRoom().music, loop=true);
    }

    update(deltaT) {
        if (this.currWindow == WINDOW_OVERWORLD) {
            this.overworld.update();
            this.player.update();
        }

        else if (this.currWindow == WINDOW_ARENA) {
            this.arena.update(deltaT);
        }

        if (this.textOpen) {
            graphicsHandler.fillRect(4, 0, SCREEN_HEIGHT - TEXT_BOX_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT);
            let currText = this.text.substring(0, this.textChars);
            for (let i = 0; i < TEXT_LINES; i++) {
                graphicsHandler.drawText(currText.slice(i * TEXT_LINE_LENGTH, (i + 1) * TEXT_LINE_LENGTH), 0, SCREEN_HEIGHT - TEXT_BOX_HEIGHT + i * 8);
            }
            if ((inputHandler.keyPressed.a || inputHandler.keyPressed.b) && this.textChars != 0) {
                this.textOpen = false;
                clearInterval(this.intervalCode);
                this.onTextFinish();
            }
        }
    }
}

const columnTile = new Tile(column_bmp, true);
const cornerBottomLeftTile = new Tile(corner_bottom_left_bmp, true);
const cornerBottomRightTile = new Tile(corner_bottom_right_bmp, true);
const cornerTopLeftTile = new Tile(corner_top_left_bmp, true);
const cornerTopRightTile = new Tile(corner_top_right_bmp, true);
const kakejikuBottomLeftTile = new Tile(kakejiku_bottom_left_bmp, true);
const kakejikuBottomRightTile = new Tile(kakejiku_bottom_right_bmp, true);
const kakejikuTopLeftTile = new Tile(kakejiku_top_left_bmp, true);
const kakejikuTopRightTile = new Tile(kakejiku_top_right_bmp, true);
const marbleStandTile = new Tile(marble_stand_bmp, true);
const ringBottomLeftTile = new Tile(ring_bottom_left_bmp, false);
const ringBottomRightTile = new Tile(ring_bottom_right_bmp, false);
const ringTopLeftTile = new Tile(ring_top_left_bmp, false);
const ringTopRightTile = new Tile(ring_top_right_bmp, false);
const swordTile = new Tile(sword_bmp, true);
const tatamiBottomTile = new Tile(tatami_bottom_bmp, false);
const tatamiTopTile = new Tile(tatami_top_bmp, false);
const tatamiLeftTile = new Tile(tatami_left_bmp, false);
const tatamiRightTile = new Tile(tatami_right_bmp, false);
const wallHorizontalTile = new Tile(wall_horizontal_bmp, true);
const wallVerticalTile = new Tile(wall_vertical_bmp, true);
const treeTile = new Tile(tree_bmp, true);
const bottleTile = new Tile(bottle_bmp, false);
const cliffBottomTile = new Tile(cliff_bottom_bmp, true);
const cliffTopTile = new Tile(cliff_top_bmp, true);
const flowerTile = new Tile(flower_bmp, false);
const grass1Tile = new Tile(grass_1_bmp, false);
const grass2Tile = new Tile(grass_2_bmp, false);
const grassSand1Tile = new Tile(grass_sand_1_bmp, false);
const grassSand2Tile = new Tile(grass_sand_2_bmp, false);
const plankLeftTile = new Tile(plank_left_bmp, false);
const plankRightTile = new Tile(plank_right_bmp, false);
const rockTile = new Tile(rock_bmp, true);
const sand1Tile = new Tile(sand_1_bmp, false);
const sand2Tile = new Tile(sand_2_bmp, false);
const shellTile = new Tile(shell_bmp, false);
const shoreTile = new Tile(shore_bmp, false);
const shoreCornerTile = new Tile(shore_corner_bmp, false);
const shoreVerticalTile = new Tile(shore_vertical_bmp, false);
const storeBottomLeftTile = new Tile(store_bottom_left_bmp, true);
const storeBottomMiddleTile = new Tile(store_bottom_middle_bmp, true);
storeBottomMiddleTile.onTouch = () => {
    world.currentRoom = {x:1, y:0};
    player.loc = {x:80, y:110};
    audioHandler.playSong(world.getCurrRoom().music, loop=true);
};
const storeBottomRightTile = new Tile(store_bottom_right_bmp, true);
const storeTopLeftTile = new Tile(store_top_left_bmp, true);
const storeTopMiddleTile = new Tile(store_top_middle_bmp, true);
const storeTopRightTile = new Tile(store_top_right_bmp, true);
const waterTile = new Tile(water_bmp, true);

const dojoRoomTiles = [
    [wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, columnTile, kakejikuTopLeftTile, kakejikuTopRightTile, columnTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile], 
    [cornerTopLeftTile, wallHorizontalTile, swordTile, columnTile, kakejikuBottomLeftTile, kakejikuBottomRightTile, columnTile, marbleStandTile, wallHorizontalTile, cornerTopRightTile], 
    [wallVerticalTile, tatamiTopTile, tatamiLeftTile, tatamiRightTile, tatamiLeftTile, tatamiRightTile, tatamiLeftTile, tatamiRightTile, tatamiTopTile, wallVerticalTile], 
    [wallVerticalTile, tatamiBottomTile, tatamiTopTile, tatamiLeftTile, tatamiRightTile, tatamiLeftTile, tatamiRightTile, tatamiTopTile, tatamiBottomTile, wallVerticalTile], 
    [wallVerticalTile, tatamiTopTile, tatamiBottomTile, tatamiTopTile, ringTopLeftTile, ringTopRightTile, tatamiTopTile, tatamiBottomTile, tatamiTopTile, wallVerticalTile], 
    [wallVerticalTile, tatamiBottomTile, tatamiTopTile, tatamiBottomTile, ringBottomLeftTile, ringBottomRightTile, tatamiBottomTile, tatamiTopTile, tatamiBottomTile, wallVerticalTile], 
    [wallVerticalTile, tatamiTopTile, tatamiBottomTile, tatamiLeftTile, tatamiRightTile, tatamiLeftTile, tatamiRightTile, tatamiBottomTile, tatamiTopTile, wallVerticalTile], 
    [wallVerticalTile, tatamiBottomTile, tatamiLeftTile, tatamiRightTile, tatamiLeftTile, tatamiRightTile, tatamiLeftTile, tatamiRightTile, tatamiBottomTile, wallVerticalTile], 
    [cornerBottomLeftTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, wallHorizontalTile, cornerBottomRightTile]
];
const overworldTopTiles = [
    [treeTile, treeTile, treeTile, treeTile, treeTile, treeTile, treeTile, treeTile, treeTile, treeTile], 
    [treeTile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, treeTile], 
    [treeTile, grass2Tile, storeTopLeftTile, storeTopMiddleTile, storeTopRightTile, grass2Tile, grass1Tile, treeTile, treeTile, treeTile], 
    [treeTile, grass1Tile, storeBottomLeftTile, storeBottomMiddleTile, storeBottomRightTile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, treeTile], 
    [treeTile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, treeTile], 
    [treeTile, flowerTile, flowerTile, flowerTile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, treeTile], 
    [treeTile, flowerTile, flowerTile, flowerTile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, treeTile], 
    [treeTile, flowerTile, flowerTile, flowerTile, grass2Tile, grass1Tile, grass2Tile, grass1Tile, grass2Tile, treeTile], 
    [cliffTopTile, cliffTopTile, grassSand1Tile, grassSand2Tile, grassSand1Tile, grassSand2Tile, grassSand1Tile, grassSand2Tile, cliffTopTile, cliffTopTile]
]

const morihei = new Character({f0:morihei_bmp}, 64, 32, delay=10000, fFrames=1, dialogue="Today you defeat the person who was you yesterday.");

const dojoRoom = new Room(dojoRoomTiles, 3, [morihei], dojoSong);
const overworldTopRoom = new Room(overworldTopTiles, 3, [], gamblingSong);

const world = new World([[overworldTopRoom, dojoRoom]], 0, 0);

const player = new Player({
    idleR:gato_fr_neutral_bmp, 
    idleL:gato_fl_neutral_bmp, 
    f0R:gato_fr_walk_down_bmp, 
    f1R:gato_fr_walk_up_bmp, 
    f2R:gato_fr_walk_down_bmp, 
    f3R:gato_fr_walk_up_bmp, 
    f0L:gato_fl_walk_down_bmp, 
    f1L:gato_fl_walk_up_bmp, 
    f2L:gato_fl_walk_down_bmp, 
    f3L:gato_fl_walk_up_bmp
}, 64, 64, world);

const game = new Game(world, player);

audioHandler.playSong(world.getCurrRoom().music, loop=true);

var lastTime = 0;
var deltaT = 0;

function gameLoop(now) {
    game.update(deltaT);

    graphicsHandler.draw();

    requestAnimationFrame(gameLoop);
    deltaT = now - lastTime;
    lastTime = now;
}

requestAnimationFrame(gameLoop);