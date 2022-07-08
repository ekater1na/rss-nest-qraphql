
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface IQuery {
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(id: number): Nullable<Track> | Promise<Nullable<Track>>;
}

export interface IMutation {
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    removeGenre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;
    removeTrack(id: number): Nullable<Track> | Promise<Nullable<Track>>;
}

export interface Track {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
