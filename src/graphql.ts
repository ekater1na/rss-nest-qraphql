
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbumInput {
    exampleField?: Nullable<number>;
}

export interface UpdateAlbumInput {
    id: number;
}

export interface CreateArtistInput {
    exampleField?: Nullable<number>;
}

export interface UpdateArtistInput {
    id: number;
}

export interface CreateBandInput {
    exampleField?: Nullable<number>;
}

export interface UpdateBandInput {
    id: number;
}

export interface CreateFavouritesInput {
    exampleField?: Nullable<number>;
}

export interface UpdateFavouritesInput {
    id: number;
}

export interface CreateGenreInput {
    exampleField?: Nullable<number>;
}

export interface UpdateGenreInput {
    id: number;
}

export interface CreateTrackInput {
    exampleField?: Nullable<number>;
}

export interface UpdateTrackInput {
    id: number;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUserInput {
    id: number;
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
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Album>[] | Promise<Nullable<Album>[]>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Band>[] | Promise<Nullable<Band>[]>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(): Nullable<Favourites>[] | Promise<Nullable<Favourites>[]>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;
    updateAlbum(updateAlbumInput: UpdateAlbumInput): Album | Promise<Album>;
    removeAlbum(id: number): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    removeArtist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(createBandInput: CreateBandInput): Band | Promise<Band>;
    updateBand(updateBandInput: UpdateBandInput): Band | Promise<Band>;
    removeBand(id: number): Nullable<Band> | Promise<Nullable<Band>>;
    createFavourites(createFavouritesInput: CreateFavouritesInput): Favourites | Promise<Favourites>;
    updateFavourites(updateFavouritesInput: UpdateFavouritesInput): Favourites | Promise<Favourites>;
    removeFavourites(id: number): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    removeGenre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;
    removeTrack(id: number): Nullable<Track> | Promise<Nullable<Track>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
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
    members?: Nullable<Nullable<Member>[]>;
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
    album?: Nullable<Album>;
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
