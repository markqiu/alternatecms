import { GraphQLResolveInfo } from "graphql";
import { AggregateDigiboardArgs } from "./args/AggregateDigiboardArgs";
import { CreateManyDigiboardArgs } from "./args/CreateManyDigiboardArgs";
import { CreateOneDigiboardArgs } from "./args/CreateOneDigiboardArgs";
import { DeleteManyDigiboardArgs } from "./args/DeleteManyDigiboardArgs";
import { DeleteOneDigiboardArgs } from "./args/DeleteOneDigiboardArgs";
import { FindFirstDigiboardArgs } from "./args/FindFirstDigiboardArgs";
import { FindManyDigiboardArgs } from "./args/FindManyDigiboardArgs";
import { FindUniqueDigiboardArgs } from "./args/FindUniqueDigiboardArgs";
import { GroupByDigiboardArgs } from "./args/GroupByDigiboardArgs";
import { UpdateManyDigiboardArgs } from "./args/UpdateManyDigiboardArgs";
import { UpdateOneDigiboardArgs } from "./args/UpdateOneDigiboardArgs";
import { UpsertOneDigiboardArgs } from "./args/UpsertOneDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDigiboard } from "../../outputs/AggregateDigiboard";
import { DigiboardGroupBy } from "../../outputs/DigiboardGroupBy";
export declare class DigiboardCrudResolver {
    aggregateDigiboard(ctx: any, info: GraphQLResolveInfo, args: AggregateDigiboardArgs): Promise<AggregateDigiboard>;
    createManyDigiboard(ctx: any, info: GraphQLResolveInfo, args: CreateManyDigiboardArgs): Promise<AffectedRowsOutput>;
    createOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: CreateOneDigiboardArgs): Promise<Digiboard>;
    deleteManyDigiboard(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDigiboardArgs): Promise<AffectedRowsOutput>;
    deleteOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDigiboardArgs): Promise<Digiboard | null>;
    findFirstDigiboard(ctx: any, info: GraphQLResolveInfo, args: FindFirstDigiboardArgs): Promise<Digiboard | null>;
    digiboards(ctx: any, info: GraphQLResolveInfo, args: FindManyDigiboardArgs): Promise<Digiboard[]>;
    digiboard(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDigiboardArgs): Promise<Digiboard | null>;
    groupByDigiboard(ctx: any, info: GraphQLResolveInfo, args: GroupByDigiboardArgs): Promise<DigiboardGroupBy[]>;
    updateManyDigiboard(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDigiboardArgs): Promise<AffectedRowsOutput>;
    updateOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDigiboardArgs): Promise<Digiboard | null>;
    upsertOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDigiboardArgs): Promise<Digiboard>;
}