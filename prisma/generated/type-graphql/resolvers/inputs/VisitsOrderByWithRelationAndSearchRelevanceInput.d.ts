import { VisitsOrderByRelevanceInput } from "../inputs/VisitsOrderByRelevanceInput";
export declare class VisitsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    reason?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    emergency?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    task?: "asc" | "desc" | undefined;
    meeting?: "asc" | "desc" | undefined;
    _relevance?: VisitsOrderByRelevanceInput | undefined;
}
