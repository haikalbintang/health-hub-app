export type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean),
) => void;

export interface ProfileType {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  image: string;
  role: string;
  bio: string;
}
