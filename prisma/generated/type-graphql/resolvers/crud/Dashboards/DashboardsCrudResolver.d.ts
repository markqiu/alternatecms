import { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardsArgs } from "./args/AggregateDashboardsArgs";
import { CreateManyDashboardsArgs } from "./args/CreateManyDashboardsArgs";
import { CreateOneDashboardsArgs } from "./args/CreateOneDashboardsArgs";
import { DeleteManyDashboardsArgs } from "./args/DeleteManyDashboardsArgs";
import { DeleteOneDashboardsArgs } from "./args/DeleteOneDashboardsArgs";
import { FindFirstDashboardsArgs } from "./args/FindFirstDashboardsArgs";
import { FindManyDashboardsArgs } from "./args/FindManyDashboardsArgs";
import { FindUniqueDashboardsArgs } from "./args/FindUniqueDashboardsArgs";
import { GroupByDashboardsArgs } from "./args/GroupByDashboardsArgs";
import { UpdateManyDashboardsArgs } from "./args/UpdateManyDashboardsArgs";
import { UpdateOneDashboardsArgs } from "./args/UpdateOneDashboardsArgs";
import { UpsertOneDashboardsArgs } from "./args/UpsertOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDashboards } from "../../outputs/AggregateDashboards";
import { DashboardsGroupBy } from "../../outputs/DashboardsGroupBy";
export declare class DashboardsCrudResolver {
    aggregateDashboards(ctx: any, info: GraphQLResolveInfo, args: AggregateDashboardsArgs): Promise<AggregateDashboards>;
    createManyDashboards(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardsArgs): Promise<AffectedRowsOutput>;
    createOneDashboards(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardsArgs): Promise<Dashboards>;
    deleteManyDashboards(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardsArgs): Promise<AffectedRowsOutput>;
    deleteOneDashboards(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardsArgs): Promise<Dashboards | null>;
    findFirstDashboards(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardsArgs): Promise<Dashboards | null>;
    findManyDashboards(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardsArgs): Promise<Dashboards[]>;
    findUniqueDashboards(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardsArgs): Promise<Dashboards | null>;
    groupByDashboards(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardsArgs): Promise<DashboardsGroupBy[]>;
    updateManyDashboards(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardsArgs): Promise<AffectedRowsOutput>;
    updateOneDashboards(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardsArgs): Promise<Dashboards | null>;
    upsertOneDashboards(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardsArgs): Promise<Dashboards>;
}
