//DOOM - E1M1 - At Doom's Gate

setCpm(200/4)

const GUITAR1_PAN = slider(0.4, 0, 1, 0.05);
const GUITAR2_PAN = slider(0.45, 0, 1, 0.05);

//Guitars
const L_GUITAR     = note("e2@0.5 ~@0.5 e2 e3 e2@0.5 ~@0.5 e2 d3 e2@0.5 ~@0.5 e2 c3 e2@0.5 ~@0.5 e2 Bb2 e2@0.5 ~@0.5 [e2, ~ b2 c3]@3 e2@0.5 ~@0.5 e2 e3 e2@0.5 ~@0.5 e2 d3 e2@0.5 ~@0.5 e2 ~@8").color("red");
const L_GUITAR_P1  = stack(L_GUITAR, note("~@24 c3 e2@0.5 ~@0.5 e2 [e2,Bb2]@5")).sound("gm_distortion_guitar").pan(GUITAR1_PAN)
const L_GUITAR_P2  = stack(L_GUITAR, note("~@24 [Gb3 E3  Eb3 Gb3 A3  G3  Gb3 Eb3 Gb3 G3  A3  B3  A3  G3  Gb3 Eb3]@8")).sound("gm_distortion_guitar").pan(GUITAR1_PAN)
const L_GUITAR_P3  = stack(L_GUITAR, note("~@24 [G3  E3  B2  E3  G3  E3  G3  B3  G3  E3  G3  E3  G3  B3  E4  G4 ]@8")).sound("gm_distortion_guitar").pan(GUITAR1_PAN)
const L_GUITAR_P4  = stack(L_GUITAR, note("~@24 [E3  C3  B2  E3  B2  G2  B2  E3  G3  E3  B2  E3  B2  E3  B2  G2 ]@8")).sound("gm_distortion_guitar").pan(GUITAR1_PAN)
const L_GUITAR_P5  = stack(L_GUITAR, note("~@24 [B4  A4  Gb4 Eb4 B3  A3  G3  Eb4 Eb5 Db5 B4  A4  Gb4 Eb4 B3  A3 ]@8")).sound("gm_distortion_guitar").pan(GUITAR1_PAN)

const L_GUITAR2_P1 = L_GUITAR_P1.sound("gm_overdriven_guitar").pan(GUITAR2_PAN).color("orange");
const L_GUITAR2_P2 = L_GUITAR_P2.sound("gm_overdriven_guitar").transpose("0 0 0 12").pan(GUITAR2_PAN).color("orange");
const L_GUITAR2_P3 = L_GUITAR_P3.sound("gm_overdriven_guitar").transpose("0 0 0 12").pan(GUITAR2_PAN).color("orange");
const L_GUITAR2_P4 = L_GUITAR_P4.sound("gm_overdriven_guitar").transpose("0 0 0 12").pan(GUITAR2_PAN).color("orange");
const L_GUITAR2_P5 = L_GUITAR_P5.sound("gm_overdriven_guitar").pan(GUITAR2_PAN);

const B_GUITAR_P1  = note("e1 ~@15 e1 ~@15").sound("gm_electric_bass_pick").color("blue").gain(0.6);
const B_GUITAR_P2  = note("e1 ~@12 e1 e1 e1 e1 ~@12 e1 e1 e1").sound("gm_electric_bass_pick").color("blue").gain(0.6);
const B_GUITAR_P3  = note("[e1 ~]!16").sound("gm_electric_bass_pick").color("blue").gain(0.5);
const B_GUITAR_P4  = note("[e1 ~]!12 [e1@7 ~]@4 ").sound("gm_electric_bass_pick").color("blue").gain(0.6);


//DRUMS
const BASS_DRUM = sound("tr909_bd").color("yellow")._scope();
const BASS_DRUM_P1 = BASS_DRUM.struct("1@16 1@16");
const BASS_DRUM_P2 = BASS_DRUM.struct("1@13 1 1 1 1@13 1 1 1");
const BASS_DRUM_P3 = BASS_DRUM.struct("1@13 1 1 1 1@8 1@2 1@2 1 1 [1 1] [1 1]");
const BASS_DRUM_P4 = BASS_DRUM.struct("1@4 1 1@3 1@4 1 1@3 1@4 1 1@3 1@4 1 1@3");
const BASS_DRUM_P5 = BASS_DRUM.struct("1@4 1 1@3 1@4 1 1@3 1@4 1 1@3 1@4 1 1!3");

const S_DRUM_P1    = sound("tr909_sd").struct("~@28 1 1 [1 1] [1 1]").color("yellow");
const S_DRUM_P2    = sound("tr909_sd").struct("~@2 1@4 1@4 1@4 1@4 1@4 1@4 1@4 1@2").color("yellow");
const S_DRUM_P3    = sound("tr909_sd").struct("~@2 1@4 1@4 1@4 1@4 1@4 1@2 1@2 1@2 1@2 1@2").color("yellow");

//CYMBALS
const CYM_P1       = sound("tr909_cr").struct("1!16").gain(0.05).color("cyan");
const CYM_P2       = sound("tr909_cr").struct("1!12 ~@4").gain(0.05).color("cyan");

//COMPOSED:
$:cat(
  stack(BASS_DRUM_P1,                    B_GUITAR_P1,                L_GUITAR_P1),
  stack(BASS_DRUM_P1,                    B_GUITAR_P1,                L_GUITAR_P1),
  stack(BASS_DRUM_P2,            CYM_P1, B_GUITAR_P2,                L_GUITAR_P1, L_GUITAR2_P1),
  stack(BASS_DRUM_P3, S_DRUM_P1, CYM_P2, B_GUITAR_P2,                L_GUITAR_P2, L_GUITAR2_P2),
  stack(BASS_DRUM_P4, S_DRUM_P2, CYM_P1, B_GUITAR_P3,                L_GUITAR_P1, L_GUITAR2_P1),
  stack(BASS_DRUM_P5, S_DRUM_P3, CYM_P2, B_GUITAR_P3,                L_GUITAR_P3, L_GUITAR2_P3),
  stack(BASS_DRUM_P4, S_DRUM_P2, CYM_P1, B_GUITAR_P3.transpose(-12), L_GUITAR_P1, L_GUITAR2_P1).transpose("5"),
  stack(BASS_DRUM_P5, S_DRUM_P3, CYM_P2, B_GUITAR_P3.transpose(-12), L_GUITAR_P4, L_GUITAR2_P4).transpose("5"),
  stack(BASS_DRUM_P4, S_DRUM_P2, CYM_P1, B_GUITAR_P3,                L_GUITAR_P1, L_GUITAR2_P1),
  stack(BASS_DRUM_P5, S_DRUM_P3, CYM_P2, B_GUITAR_P3,                L_GUITAR_P1, L_GUITAR2_P1),
  stack(BASS_DRUM_P4, S_DRUM_P2, CYM_P1, B_GUITAR_P3.transpose(-12), L_GUITAR_P1, L_GUITAR2_P1).transpose("9 9 7 5"),
  stack(BASS_DRUM_P2, S_DRUM_P3, CYM_P2, B_GUITAR_P4,                L_GUITAR_P5, L_GUITAR2_P5)
 ).slow(4).pianoroll();
