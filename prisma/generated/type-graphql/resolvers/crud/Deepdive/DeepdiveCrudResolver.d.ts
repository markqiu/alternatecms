import { GraphQLResolveInfo } from "graphql";
import { AggregateDeepdiveArgs } from "./args/AggregateDeepdiveArgs";
import { CreateManyDeepdiveArgs } from "./args/CreateManyDeepdiveArgs";
import { CreateOneDeepdiveArgs } from "./args/CreateOneDeepdiveArgs";
import { DeleteManyDeepdiveArgs } from "./args/DeleteManyDeepdiveArgs";
import { DeleteOneDeepdiveArgs } from "./args/DeleteOneDeepdiveArgs";
import { FindFirstDeepdiveArgs } from "./args/FindFirstDeepdiveArgs";
import { FindManyDeepdiveArgs } from "./args/FindManyDeepdiveArgs";
import { FindUniqueDeepdiveArgs } from "./args/FindUniqueDeepdiveArgs";
import { GroupByDeepdiveArgs } from "./args/GroupByDeepdiveArgs";
import { UpdateManyDeepdiveArgs } from "./args/UpdateManyDeepdiveArgs";
import { UpdateOneDeepdiveArgs } from "./args/UpdateOneDeepdiveArgs";
import { UpsertOneDeepdiveArgs } from "./args/UpsertOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDeepdive } from "../../outputs/AggregateDeepdive";
import { DeepdiveGroupBy } from "../../outputs/DeepdiveGroupBy";
export declare class DeepdiveCrudResolver {
    aggregateDeepdive(ctx: any, info: GraphQLResolveInfo, args: AggregateDeepdiveArgs): Promise<AggregateDeepdive>;
    createManyDeepdive(ctx: any, info: GraphQLResolveInfo, args: CreateManyDeepdiveArgs): Promise<AffectedRowsOutput>;
    createOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: CreateOneDeepdiveArgs): Promise<Deepdive>;
    deleteManyDeepdive(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDeepdiveArgs): Promise<AffectedRowsOutput>;
    deleteOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDeepdiveArgs): Promise<Deepdive | null>;
    findFirstDeepdive(ctx: any, info: GraphQLResolveInfo, args: FindFirstDeepdiveArgs): Promise<Deepdive | null>;
    deepdives(ctx: any, info: GraphQLResolveInfo, args: FindManyDeepdiveArgs): Promise<Deepdive[]>;
    deepdive(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDeepdiveArgs): Promise<Deepdive | null>;
    groupByDeepdive(ctx: any, info: GraphQLResolveInfo, args: GroupByDeepdiveArgs): Promise<DeepdiveGroupBy[]>;
    updateManyDeepdive(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDeepdiveArgs): Promise<AffectedRowsOutput>;
    updateOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDeepdiveArgs): Promise<Deepdive | null>;
    upsertOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDeepdiveArgs): Promise<Deepdive>;
}
