export type Character = {
    id: number;
    name: string;
    status: "unknown" | "alive" | "dead";
    species: string;
    type: string;
    gender: "unknown" | "female" | "male" | "genderless";
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  };