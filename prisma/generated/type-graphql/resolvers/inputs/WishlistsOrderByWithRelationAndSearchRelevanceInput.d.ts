import { WishlistsOrderByRelevanceInput } from "../inputs/WishlistsOrderByRelevanceInput";
export declare class WishlistsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    visibility?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    occassions?: "asc" | "desc" | undefined;
    _relevance?: WishlistsOrderByRelevanceInput | undefined;
}
