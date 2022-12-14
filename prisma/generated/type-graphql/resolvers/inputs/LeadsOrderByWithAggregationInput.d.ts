import { LeadsAvgOrderByAggregateInput } from "../inputs/LeadsAvgOrderByAggregateInput";
import { LeadsCountOrderByAggregateInput } from "../inputs/LeadsCountOrderByAggregateInput";
import { LeadsMaxOrderByAggregateInput } from "../inputs/LeadsMaxOrderByAggregateInput";
import { LeadsMinOrderByAggregateInput } from "../inputs/LeadsMinOrderByAggregateInput";
import { LeadsSumOrderByAggregateInput } from "../inputs/LeadsSumOrderByAggregateInput";
export declare class LeadsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    Prefix?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    department?: "asc" | "desc" | undefined;
    account_name?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    postalcode?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    fax?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    mobile?: "asc" | "desc" | undefined;
    job_title?: "asc" | "desc" | undefined;
    alt_address?: "asc" | "desc" | undefined;
    alt_postalcode?: "asc" | "desc" | undefined;
    alt_city?: "asc" | "desc" | undefined;
    alt_state?: "asc" | "desc" | undefined;
    alt_country?: "asc" | "desc" | undefined;
    office_phone?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    status_description?: "asc" | "desc" | undefined;
    opportunity_amount?: "asc" | "desc" | undefined;
    campaign?: "asc" | "desc" | undefined;
    lead_source?: "asc" | "desc" | undefined;
    lead_source_description?: "asc" | "desc" | undefined;
    referred_by?: "asc" | "desc" | undefined;
    customer_name?: "asc" | "desc" | undefined;
    _count?: LeadsCountOrderByAggregateInput | undefined;
    _avg?: LeadsAvgOrderByAggregateInput | undefined;
    _max?: LeadsMaxOrderByAggregateInput | undefined;
    _min?: LeadsMinOrderByAggregateInput | undefined;
    _sum?: LeadsSumOrderByAggregateInput | undefined;
}
