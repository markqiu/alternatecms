import { GraphQLResolveInfo } from "graphql";
import { AggregateImportmArgs } from "./args/AggregateImportmArgs";
import { CreateManyImportmArgs } from "./args/CreateManyImportmArgs";
import { CreateOneImportmArgs } from "./args/CreateOneImportmArgs";
import { DeleteManyImportmArgs } from "./args/DeleteManyImportmArgs";
import { DeleteOneImportmArgs } from "./args/DeleteOneImportmArgs";
import { FindFirstImportmArgs } from "./args/FindFirstImportmArgs";
import { FindManyImportmArgs } from "./args/FindManyImportmArgs";
import { FindUniqueImportmArgs } from "./args/FindUniqueImportmArgs";
import { GroupByImportmArgs } from "./args/GroupByImportmArgs";
import { UpdateManyImportmArgs } from "./args/UpdateManyImportmArgs";
import { UpdateOneImportmArgs } from "./args/UpdateOneImportmArgs";
import { UpsertOneImportmArgs } from "./args/UpsertOneImportmArgs";
import { Importm } from "../../../models/Importm";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateImportm } from "../../outputs/AggregateImportm";
import { ImportmGroupBy } from "../../outputs/ImportmGroupBy";
export declare class ImportmCrudResolver {
    aggregateImportm(ctx: any, info: GraphQLResolveInfo, args: AggregateImportmArgs): Promise<AggregateImportm>;
    createManyImportm(ctx: any, info: GraphQLResolveInfo, args: CreateManyImportmArgs): Promise<AffectedRowsOutput>;
    createOneImportm(ctx: any, info: GraphQLResolveInfo, args: CreateOneImportmArgs): Promise<Importm>;
    deleteManyImportm(ctx: any, info: GraphQLResolveInfo, args: DeleteManyImportmArgs): Promise<AffectedRowsOutput>;
    deleteOneImportm(ctx: any, info: GraphQLResolveInfo, args: DeleteOneImportmArgs): Promise<Importm | null>;
    findFirstImportm(ctx: any, info: GraphQLResolveInfo, args: FindFirstImportmArgs): Promise<Importm | null>;
    importms(ctx: any, info: GraphQLResolveInfo, args: FindManyImportmArgs): Promise<Importm[]>;
    importm(ctx: any, info: GraphQLResolveInfo, args: FindUniqueImportmArgs): Promise<Importm | null>;
    groupByImportm(ctx: any, info: GraphQLResolveInfo, args: GroupByImportmArgs): Promise<ImportmGroupBy[]>;
    updateManyImportm(ctx: any, info: GraphQLResolveInfo, args: UpdateManyImportmArgs): Promise<AffectedRowsOutput>;
    updateOneImportm(ctx: any, info: GraphQLResolveInfo, args: UpdateOneImportmArgs): Promise<Importm | null>;
    upsertOneImportm(ctx: any, info: GraphQLResolveInfo, args: UpsertOneImportmArgs): Promise<Importm>;
}