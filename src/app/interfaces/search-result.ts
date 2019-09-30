import { Movie } from './movie';

export interface SearchResult {
    page?: number;
    results?: Movie[];
    total_pages?: number;
    total_results?: number;
}
