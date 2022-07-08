
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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

export interface Artist {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    artists(): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;
    artist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Band>[] | Promise<Nullable<Band>[]>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(id: number): Nullable<Track> | Promise<Nullable<Track>>;
}

export interface IMutation {
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    removeArtist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(createBandInput: CreateBandInput): Band | Promise<Band>;
    updateBand(updateBandInput: UpdateBandInput): Band | Promise<Band>;
    removeBand(id: number): Nullable<Band> | Promise<Nullable<Band>>;
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    removeGenre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;
    removeTrack(id: number): Nullable<Track> | Promise<Nullable<Track>>;
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

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Track {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
