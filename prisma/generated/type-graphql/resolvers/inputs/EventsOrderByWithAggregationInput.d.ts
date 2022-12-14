import { EventsAvgOrderByAggregateInput } from "../inputs/EventsAvgOrderByAggregateInput";
import { EventsCountOrderByAggregateInput } from "../inputs/EventsCountOrderByAggregateInput";
import { EventsMaxOrderByAggregateInput } from "../inputs/EventsMaxOrderByAggregateInput";
import { EventsMinOrderByAggregateInput } from "../inputs/EventsMinOrderByAggregateInput";
import { EventsSumOrderByAggregateInput } from "../inputs/EventsSumOrderByAggregateInput";
export declare class EventsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    tickets?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    start?: "asc" | "desc" | undefined;
    end?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    postalcode?: "asc" | "desc" | undefined;
    _count?: EventsCountOrderByAggregateInput | undefined;
    _avg?: EventsAvgOrderByAggregateInput | undefined;
    _max?: EventsMaxOrderByAggregateInput | undefined;
    _min?: EventsMinOrderByAggregateInput | undefined;
    _sum?: EventsSumOrderByAggregateInput | undefined;
}
