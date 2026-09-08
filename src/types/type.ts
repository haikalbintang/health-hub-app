export type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean),
) => void;
