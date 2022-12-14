import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrency_symbolsArgs } from "./args/AggregateCurrency_symbolsArgs";
import { CreateManyCurrency_symbolsArgs } from "./args/CreateManyCurrency_symbolsArgs";
import { CreateOneCurrency_symbolsArgs } from "./args/CreateOneCurrency_symbolsArgs";
import { DeleteManyCurrency_symbolsArgs } from "./args/DeleteManyCurrency_symbolsArgs";
import { DeleteOneCurrency_symbolsArgs } from "./args/DeleteOneCurrency_symbolsArgs";
import { FindFirstCurrency_symbolsArgs } from "./args/FindFirstCurrency_symbolsArgs";
import { FindManyCurrency_symbolsArgs } from "./args/FindManyCurrency_symbolsArgs";
import { FindUniqueCurrency_symbolsArgs } from "./args/FindUniqueCurrency_symbolsArgs";
import { GroupByCurrency_symbolsArgs } from "./args/GroupByCurrency_symbolsArgs";
import { UpdateManyCurrency_symbolsArgs } from "./args/UpdateManyCurrency_symbolsArgs";
import { UpdateOneCurrency_symbolsArgs } from "./args/UpdateOneCurrency_symbolsArgs";
import { UpsertOneCurrency_symbolsArgs } from "./args/UpsertOneCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCurrency_symbols } from "../../outputs/AggregateCurrency_symbols";
import { Currency_symbolsGroupBy } from "../../outputs/Currency_symbolsGroupBy";
export declare class Currency_symbolsCrudResolver {
    aggregateCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: AggregateCurrency_symbolsArgs): Promise<AggregateCurrency_symbols>;
    createManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: CreateManyCurrency_symbolsArgs): Promise<AffectedRowsOutput>;
    createOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: CreateOneCurrency_symbolsArgs): Promise<Currency_symbols>;
    deleteManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCurrency_symbolsArgs): Promise<AffectedRowsOutput>;
    deleteOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCurrency_symbolsArgs): Promise<Currency_symbols | null>;
    findFirstCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrency_symbolsArgs): Promise<Currency_symbols | null>;
    findManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: FindManyCurrency_symbolsArgs): Promise<Currency_symbols[]>;
    findUniqueCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrency_symbolsArgs): Promise<Currency_symbols | null>;
    groupByCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: GroupByCurrency_symbolsArgs): Promise<Currency_symbolsGroupBy[]>;
    updateManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCurrency_symbolsArgs): Promise<AffectedRowsOutput>;
    updateOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCurrency_symbolsArgs): Promise<Currency_symbols | null>;
    upsertOneCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCurrency_symbolsArgs): Promise<Currency_symbols>;
}
