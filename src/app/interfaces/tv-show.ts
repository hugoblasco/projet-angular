import { Genre } from './genre';

export interface TvShow {
    backdrop_path?: string;
    created_by?: [];
    episode_run_time?: [];
    first_air_date?: string;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    in_production?: boolean;
    languages?: [];
    last_air_date?: string;
    last_episode_to_air?: {};
    name?: string;
    next_episode_to_air?: null;
    networks?: [];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: [];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: [];
    seasons?: [];
    status?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}
