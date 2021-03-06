import { Movie } from './movie';
import { TvShow } from './tv-show';

export interface SearchResult {
    page?: number;
    results?: Movie[]|TvShow[];
    total_pages?: number;
    total_results?: number;
}
