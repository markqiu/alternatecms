import { GraphQLResolveInfo } from "graphql";
import { AggregatePluginsArgs } from "./args/AggregatePluginsArgs";
import { CreateManyPluginsArgs } from "./args/CreateManyPluginsArgs";
import { CreateOnePluginsArgs } from "./args/CreateOnePluginsArgs";
import { DeleteManyPluginsArgs } from "./args/DeleteManyPluginsArgs";
import { DeleteOnePluginsArgs } from "./args/DeleteOnePluginsArgs";
import { FindFirstPluginsArgs } from "./args/FindFirstPluginsArgs";
import { FindManyPluginsArgs } from "./args/FindManyPluginsArgs";
import { FindUniquePluginsArgs } from "./args/FindUniquePluginsArgs";
import { GroupByPluginsArgs } from "./args/GroupByPluginsArgs";
import { UpdateManyPluginsArgs } from "./args/UpdateManyPluginsArgs";
import { UpdateOnePluginsArgs } from "./args/UpdateOnePluginsArgs";
import { UpsertOnePluginsArgs } from "./args/UpsertOnePluginsArgs";
import { Plugins } from "../../../models/Plugins";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePlugins } from "../../outputs/AggregatePlugins";
import { PluginsGroupBy } from "../../outputs/PluginsGroupBy";
export declare class PluginsCrudResolver {
    aggregatePlugins(ctx: any, info: GraphQLResolveInfo, args: AggregatePluginsArgs): Promise<AggregatePlugins>;
    createManyPlugins(ctx: any, info: GraphQLResolveInfo, args: CreateManyPluginsArgs): Promise<AffectedRowsOutput>;
    createOnePlugins(ctx: any, info: GraphQLResolveInfo, args: CreateOnePluginsArgs): Promise<Plugins>;
    deleteManyPlugins(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPluginsArgs): Promise<AffectedRowsOutput>;
    deleteOnePlugins(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePluginsArgs): Promise<Plugins | null>;
    findFirstPlugins(ctx: any, info: GraphQLResolveInfo, args: FindFirstPluginsArgs): Promise<Plugins | null>;
    findManyPlugins(ctx: any, info: GraphQLResolveInfo, args: FindManyPluginsArgs): Promise<Plugins[]>;
    findUniquePlugins(ctx: any, info: GraphQLResolveInfo, args: FindUniquePluginsArgs): Promise<Plugins | null>;
    groupByPlugins(ctx: any, info: GraphQLResolveInfo, args: GroupByPluginsArgs): Promise<PluginsGroupBy[]>;
    updateManyPlugins(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPluginsArgs): Promise<AffectedRowsOutput>;
    updateOnePlugins(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePluginsArgs): Promise<Plugins | null>;
    upsertOnePlugins(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePluginsArgs): Promise<Plugins>;
}
