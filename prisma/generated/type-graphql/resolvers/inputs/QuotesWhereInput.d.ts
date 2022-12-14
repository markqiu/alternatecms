import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class QuotesWhereInput {
    AND?: QuotesWhereInput[] | undefined;
    OR?: QuotesWhereInput[] | undefined;
    NOT?: QuotesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    grand_total?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    valid_until?: StringNullableFilter | undefined;
    quote_stage?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    order_id?: IntFilter | undefined;
    account?: StringNullableFilter | undefined;
    approval_issues?: StringNullableFilter | undefined;
    approval_status?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    billing_city?: StringNullableFilter | undefined;
    billing_country?: StringNullableFilter | undefined;
    billing_postal?: StringNullableFilter | undefined;
    billing_state?: StringNullableFilter | undefined;
    billing_street?: StringNullableFilter | undefined;
    contact?: StringNullableFilter | undefined;
    currency?: StringNullableFilter | undefined;
    discount?: StringNullableFilter | undefined;
    invoice_status?: StringNullableFilter | undefined;
    line_item_discount?: StringNullableFilter | undefined;
    line_item_group_total?: StringNullableFilter | undefined;
    line_item_name?: StringNullableFilter | undefined;
    line_item_subtotal?: StringNullableFilter | undefined;
    line_item_tax?: StringNullableFilter | undefined;
    line_item_total?: StringNullableFilter | undefined;
    payment_terms?: StringNullableFilter | undefined;
    shipping?: StringNullableFilter | undefined;
    shipping_city?: StringNullableFilter | undefined;
    shipping_country?: StringNullableFilter | undefined;
    shipping_postal?: StringNullableFilter | undefined;
    shipping_state?: StringNullableFilter | undefined;
    shipping_street?: StringNullableFilter | undefined;
    shipping_tax?: StringNullableFilter | undefined;
    subtotal?: StringNullableFilter | undefined;
    tax?: StringNullableFilter | undefined;
    total?: StringNullableFilter | undefined;
    customers_customersToquotes?: StringNullableFilter | undefined;
    orders?: StringNullableFilter | undefined;
    products_productsToquotes?: StringNullableFilter | undefined;
}
