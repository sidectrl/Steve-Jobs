import { Result } from "./Data";

type RootStackParams = {
  Home: { typology: string };
  Detail: {
    id?: string;
    name?: string;
    data?: Result
  };
  HomeStack: undefined;
  Profile: undefined;
  Favorite: {
    love: boolean,
    bookmark: number
  };
  Setting: {setting: string};
  HomePage: undefined;
  SignUp: undefined;
  Login: undefined;
  Info: undefined;
  EditProfile: undefined;
};

export default RootStackParams;
