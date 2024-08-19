
/*

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RootState, AppDispatch, MoviesArray, UserData, CommentType, MovieType } from '../../types/types';
import { ApiRootes } from '../const';
import { Login } from '../../types/types';
import { dropToken, saveToken } from '../../api/token';
import { redirectAction } from '../actions/actions';
import { AppRoutes } from '../../utils/utils';
import { ServerResponse } from 'http';

// /login
// /comments/${id}
// /favorite/${id}/0
// /favorite/${id}/1
// /films/promo


export const fetchFilms = createAsyncThunk<
  MoviesArray,
  undefined,
  {dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  }
  >(
    'data/fetchFilms',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<MoviesArray>(ApiRootes.Movies);
      return data;
    }
  );

export const fetchPromo = createAsyncThunk<
  MovieType,
  undefined,
  {dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  }
  >(
    'data/fetchPromo',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<MovieType>(ApiRootes.Promo);
      return data;
    }
  );

export const fetchFilmComment = createAsyncThunk<
  CommentType[],
  number,
  {dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  }
  >(
    'data/fetchComment',
    async (id, {extra: api}) => {
      const {data} = await api.get<CommentType[]>(ApiRootes.Comments + id.toString());
      return data;
    }
  );

export const fetchAddComment = createAsyncThunk<
    CommentType,
    {rating: number; comment: string; id: number},
    {dispatch: AppDispatch;
      state: RootState;
      extra: AxiosInstance;
    }>(
      'data/addComment',
      async ({rating, comment, id}, {extra: api}) => {
        const {data} = await api.post<CommentType>(`${ApiRootes.Comments}${id.toString()}` , {rating, comment} );
        return data;
      }
    );

export const fetchFavorites = createAsyncThunk<
MoviesArray,
undefined,
{dispatch: AppDispatch;
state: RootState;
extra: AxiosInstance;
}
>(
  'data/fetchFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<MoviesArray>(ApiRootes.Favorite);
    return data;
  }
);

export const fetchAddFavorite = createAsyncThunk<
  ServerResponse,
  number,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
  >(
    'data/addFavorite',
    async ( id, {extra: api}) => {
      const {data} = await api.post<ServerResponse>(`${ApiRootes.Favorite}/${id.toString()}/1`);
      return data;
    }
  );

export const fetchRemoveFavorite = createAsyncThunk<
  ServerResponse,
  number,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
  >(
    'data/removeFavorite',
    async ( id, {extra: api}) => {
      const {data} = await api.post<ServerResponse>(`${ApiRootes.Favorite}/${id.toString()}/0`);
      return data;
    }
  );


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(ApiRootes.Login);
  },
);

export const loginAuthAction = createAsyncThunk<void, Login, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkLogin',
  async ( {login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRootes.Login, {email, password});
    saveToken(token);
    dispatch(redirectAction(AppRoutes.MAIN));
  }
);
export const logoutAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/Logout',
  async ( _arg, {extra: api}) => {
    await api.delete(ApiRootes.Logout);
    dropToken();
  }
);


*/
