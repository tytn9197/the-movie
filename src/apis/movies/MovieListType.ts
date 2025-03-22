import { MovieDetailsType } from "./MovieDetailsType";

export type ResultType = Pick<MovieDetailsType, 'adult' | 'backdrop_path' | 'genre_ids' | 'id' | 'original_language' | 'original_title' | 'overview' | 'popularity' | 'poster_path' | 'release_date' | 'title' | 'video' | 'vote_average' | 'vote_count'>;

export type MovieListType = {
    dates: {
        maximum: string;
        minimum: string;
    }
    page: number;
    results: ResultType[];
    total_pages: number;
    total_results: number;
}
