
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbumInput {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbumInput {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateArtistInput {
    firstName: string;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtistInput {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBandInput {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateFavouritesInput {
    exampleField?: Nullable<number>;
}

export interface UpdateFavouritesInput {
    id: string;
}

export interface CreateGenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface CreateTrackInput {
    title: string;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrackInput {
    id: string;
    title?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUserInput {
    id: string;
}

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(): Nullable<Nullable<Favourites>[]> | Promise<Nullable<Nullable<Favourites>[]>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(updateAlbumInput: UpdateAlbumInput): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(createArtistInput: CreateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(updateArtistInput: UpdateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(createBandInput: CreateBandInput): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(updateBandInput: UpdateBandInput): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    createFavourites(createFavouritesInput: CreateFavouritesInput): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    updateFavourites(updateFavouritesInput: UpdateFavouritesInput): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    removeFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(createGenreInput: CreateGenreInput): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(updateGenreInput: UpdateGenreInput): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(createTrackInput: CreateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(updateTrackInput: UpdateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password: string;
    email: string;
}

export interface JWT {
    jwt?: Nullable<string>;
}

type Nullable<T> = T | null;
