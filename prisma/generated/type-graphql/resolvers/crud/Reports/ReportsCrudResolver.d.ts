import { GraphQLResolveInfo } from "graphql";
import { AggregateReportsArgs } from "./args/AggregateReportsArgs";
import { CreateManyReportsArgs } from "./args/CreateManyReportsArgs";
import { CreateOneReportsArgs } from "./args/CreateOneReportsArgs";
import { DeleteManyReportsArgs } from "./args/DeleteManyReportsArgs";
import { DeleteOneReportsArgs } from "./args/DeleteOneReportsArgs";
import { FindFirstReportsArgs } from "./args/FindFirstReportsArgs";
import { FindManyReportsArgs } from "./args/FindManyReportsArgs";
import { FindUniqueReportsArgs } from "./args/FindUniqueReportsArgs";
import { GroupByReportsArgs } from "./args/GroupByReportsArgs";
import { UpdateManyReportsArgs } from "./args/UpdateManyReportsArgs";
import { UpdateOneReportsArgs } from "./args/UpdateOneReportsArgs";
import { UpsertOneReportsArgs } from "./args/UpsertOneReportsArgs";
import { Reports } from "../../../models/Reports";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReports } from "../../outputs/AggregateReports";
import { ReportsGroupBy } from "../../outputs/ReportsGroupBy";
export declare class ReportsCrudResolver {
    aggregateReports(ctx: any, info: GraphQLResolveInfo, args: AggregateReportsArgs): Promise<AggregateReports>;
    createManyReports(ctx: any, info: GraphQLResolveInfo, args: CreateManyReportsArgs): Promise<AffectedRowsOutput>;
    createOneReports(ctx: any, info: GraphQLResolveInfo, args: CreateOneReportsArgs): Promise<Reports>;
    deleteManyReports(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReportsArgs): Promise<AffectedRowsOutput>;
    deleteOneReports(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReportsArgs): Promise<Reports | null>;
    findFirstReports(ctx: any, info: GraphQLResolveInfo, args: FindFirstReportsArgs): Promise<Reports | null>;
    findManyReports(ctx: any, info: GraphQLResolveInfo, args: FindManyReportsArgs): Promise<Reports[]>;
    findUniqueReports(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReportsArgs): Promise<Reports | null>;
    groupByReports(ctx: any, info: GraphQLResolveInfo, args: GroupByReportsArgs): Promise<ReportsGroupBy[]>;
    updateManyReports(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReportsArgs): Promise<AffectedRowsOutput>;
    updateOneReports(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReportsArgs): Promise<Reports | null>;
    upsertOneReports(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReportsArgs): Promise<Reports>;
}