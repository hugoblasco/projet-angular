import { Movie } from './movie';
import { TvShow } from './tv-show';

export interface Discovery {
    page?: number;
    total_results?: number;
    total_pages?: number;
    results?: Movie[]|TvShow[];
}
