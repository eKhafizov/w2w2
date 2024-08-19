import { AuthorizationStatus } from '../store/const';



//AFTER OPTIMIZATION
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type MovieType = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  id: number;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  videoLink: string;
  starring: string[];
}
export type MoviesArray = MovieType[];

export type CommentType = {
  id: number;
  rating: number;
  date: string;
  comment: string;
}
export type Comments = CommentType[];

export type Login = {
  password: string;
  login: string;
}
export type UserData = {
  id: number;
  email: string;
  token: string;
}

export type PassedPropMovie = {
  movie: MovieType;
}
