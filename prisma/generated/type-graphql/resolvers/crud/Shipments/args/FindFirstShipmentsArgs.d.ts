import { ShipmentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ShipmentsOrderByWithRelationAndSearchRelevanceInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";
export declare class FindFirstShipmentsArgs {
    where?: ShipmentsWhereInput | undefined;
    orderBy?: ShipmentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ShipmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"product" | "speed_grade" | "ship_date" | "carrier_name" | "transit_time" | "tracking_url" | "image" | "id" | "client_id" | "client_secret" | "country" | "website"> | undefined;
}
