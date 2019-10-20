import { TvShow } from './tv-show';
import { Movie } from './movie';

export interface Trending {
    page?: number;
    results?: Movie[]|TvShow[];
    total_pages?: number;
    total_results?: number;
}
