export enum LayoutValue {
  Grid,
  Line,
}

export const formatPlayerTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return h > 0
    ? `${h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
    : `${m}:${s < 10 ? `0${s}` : s}`;
};

export const loremValue = `
                It doe gillywater snape back black charm them. Feint out sirius
                bat together bean crossbow spider banana. Bezoar scabbers
                blubber to potter. Clean which so mimbletonia creature you
                leprechaun would full-moon. Palominos snitch which cabbage
                bertie squashy glory turban. Soul blood servant nose doe. Duel
                tart shunpike hippogriff scarlet fenrir. Sight knew brass die
                yaxley forbidden marauder’s for padma hiya.`;
