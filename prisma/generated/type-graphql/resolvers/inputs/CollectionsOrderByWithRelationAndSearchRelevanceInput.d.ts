import { CollectionsOrderByRelevanceInput } from "../inputs/CollectionsOrderByRelevanceInput";
export declare class CollectionsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    product?: "asc" | "desc" | undefined;
    meta_title?: "asc" | "desc" | undefined;
    meta_keywords?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    _relevance?: CollectionsOrderByRelevanceInput | undefined;
}
