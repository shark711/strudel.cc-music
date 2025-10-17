setCpm(140/4)

const MAIN_KICK = sound("bd").struct          ("1   [~ 1] 1   ~        ").color("red");
const Q_KICK    = sound("bd").struct          ("1   1   1   1").color("red");
const Q_KICK2   = sound("bd").struct          ("1 1 1 1 1 1 1 1 1 1 1 1 [~ 1] 1*2 [~ 1] 1*4").color("red").slow(4);
const HATS      = sound("tr909_hh").struct    ("~   1   ~   1        ");
const OHATS     = sound("tr909_oh").struct    ("[~ 1] [~ 1]     1   1       [~ 1] [~ 1]     1   [1 1 1 ~]       ").slow(2).gain(0.6);
const DRUMS     = stack(MAIN_KICK, HATS)
const SHAKER    = sound("shaker_large").struct("1 1*2 1 1*2  1 1*2 1 1*2").gain(1)
const CLAPS     = sound("tr909_cp").struct    ("~ 1*2 ~ 1 ~ 1*2 ~ 1 ~ 1*2 ~ 1 [~ 1] 1*2 [~ 1] 1*2").slow(4)
const RIMS      = sound("tr909_rim").struct   ("1 1 1 1").gain(0.4)   
const TIKS      =  note("~ c d ~ c c ~ ~").sound("akailinn_cb").gain(0.1)
const BASS_FLAT =  note("Bb1 Bb2 Bb1 Bb2 Bb1 Bb2 Bb1 Bb2") //FLAT, stay in same cord
  .sound("saw")
  .lpf("300 500 800 1000 2000 3000 1000 800".slow(4)); //low pass filter
const BASS      = BASS_FLAT.transpose("<0 0 0 0 5 7 0 0>".fast(2)).color("green") //BASS_FLAT but with transpose (used with RIFT is played)
const BASS_P5   = BASS.stack(BASS.transpose("P5").gain(0.5)) //Bass played in Perfect 5th (i.e key + offset by 7.. i think)
const RIFT      = note("~ Bb3 Db4 Eb4 F4 ~ ~ ~ ~ Bb3 Db4 Eb4 F4 Gb4 F4 Db4 Eb4 ~ ~ ~ Db4 ~ F4 Bb3 ~ ~ ~ ~ ~ ~ ~ ~ ")
  .delay(0.3)
  .room(0.7)
  .sound("sawtooth")
  .lpf(4000)
  .slow(4)
  .color("yellow")
  ._pianoroll()

const VOCALS = note("[G4,G3] [Gb4,G3] ~ ~ ~ ~ ~ ~ [G4,G3] [Gb4,G3] ~ ~ ~ ~ ~ ~ [G4,G3] [Gb4,G3] ~ ~ ~ ~ ~ ~ [G4,G3] [Gb4,G3] D4 C4 ~ ~ ~ ~").sound("gm_voice_oohs").slow(4);

//COMPOSITION:
$:cat(
  DRUMS.gain("0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8".slow(4)).fast(4),
  stack(DRUMS, BASS_FLAT).fast(4),
  stack(DRUMS, OHATS, BASS_FLAT, VOCALS).fast(4),
  DRUMS.fast(4).lpf("4000 3000 2000 1500 500 50 0"),
  stack(Q_KICK, BASS_FLAT).fast(4),
  stack(Q_KICK, BASS_FLAT, TIKS).fast(4),
  stack(BASS_P5, RIFT).fast(4),
  stack(BASS_P5, RIFT).fast(4),
  stack(CLAPS, BASS_P5, RIFT).fast(4),
  stack(CLAPS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, CLAPS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, CLAPS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, SHAKER, CLAPS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK2, SHAKER, CLAPS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, SHAKER, BASS_FLAT, VOCALS).fast(4),
  stack(Q_KICK.gain("1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0".slow(4)), SHAKER.gain("1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0".slow(4)), BASS_FLAT, VOCALS).fast(4),
  stack(DRUMS, RIFT.lpf("4000 2500 1000 400".slow(4))).fast(4),
  stack(DRUMS, RIMS, BASS_P5.gain(0.8), RIFT.lpf("400 400 400 1000 2000 3000 4000 5000".slow(4))).fast(4),
  stack(RIMS, BASS_P5.gain(1), RIFT).fast(4),
  stack(RIMS, BASS_P5.gain(1), RIFT).fast(4),
  stack(Q_KICK, RIMS, SHAKER, CLAPS, HATS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, RIMS, SHAKER, CLAPS, HATS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, RIMS, SHAKER, CLAPS, HATS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK2, RIMS, SHAKER, CLAPS, HATS, BASS_P5, RIFT).fast(4),
  stack(Q_KICK, CLAPS, SHAKER, BASS_FLAT.gain(0.4)).fast(4),
  stack(Q_KICK, CLAPS, SHAKER, BASS_FLAT.gain(0.4)).fast(4),
  stack(Q_KICK, BASS_FLAT.gain(0.4)).fast(4),
  stack(Q_KICK, BASS_FLAT.gain(0.4)).fast(4),
  stack(DRUMS, BASS_FLAT).fast(4),
  stack(DRUMS.gain("0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1".slow(4)), BASS_FLAT.gain("0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1".slow(4))).fast(4),
  SHAKER.gain(0)     
 //*/
).slow(4).fscope()
