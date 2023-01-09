export type Review = {
    rank: number;
    description: string;
    author: string;
}

type Movie = {
    id : string;
    name : string;
    duration : number;
    typologies : string[];
    categories : string[];
    lenguages : string[];
    reviews : Review[];
    type : string;
    description : string;

}