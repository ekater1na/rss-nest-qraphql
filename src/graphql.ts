
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
}

export interface IMutation {
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    removeGenre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;
}

type Nullable<T> = T | null;
