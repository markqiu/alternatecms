import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_ruleArgs } from "./args/AggregateTax_ruleArgs";
import { CreateManyTax_ruleArgs } from "./args/CreateManyTax_ruleArgs";
import { CreateOneTax_ruleArgs } from "./args/CreateOneTax_ruleArgs";
import { DeleteManyTax_ruleArgs } from "./args/DeleteManyTax_ruleArgs";
import { DeleteOneTax_ruleArgs } from "./args/DeleteOneTax_ruleArgs";
import { FindFirstTax_ruleArgs } from "./args/FindFirstTax_ruleArgs";
import { FindManyTax_ruleArgs } from "./args/FindManyTax_ruleArgs";
import { FindUniqueTax_ruleArgs } from "./args/FindUniqueTax_ruleArgs";
import { GroupByTax_ruleArgs } from "./args/GroupByTax_ruleArgs";
import { UpdateManyTax_ruleArgs } from "./args/UpdateManyTax_ruleArgs";
import { UpdateOneTax_ruleArgs } from "./args/UpdateOneTax_ruleArgs";
import { UpsertOneTax_ruleArgs } from "./args/UpsertOneTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTax_rule } from "../../outputs/AggregateTax_rule";
import { Tax_ruleGroupBy } from "../../outputs/Tax_ruleGroupBy";
export declare class Tax_ruleCrudResolver {
    aggregateTax_rule(ctx: any, info: GraphQLResolveInfo, args: AggregateTax_ruleArgs): Promise<AggregateTax_rule>;
    createManyTax_rule(ctx: any, info: GraphQLResolveInfo, args: CreateManyTax_ruleArgs): Promise<AffectedRowsOutput>;
    createOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: CreateOneTax_ruleArgs): Promise<Tax_rule>;
    deleteManyTax_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTax_ruleArgs): Promise<AffectedRowsOutput>;
    deleteOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTax_ruleArgs): Promise<Tax_rule | null>;
    findFirstTax_rule(ctx: any, info: GraphQLResolveInfo, args: FindFirstTax_ruleArgs): Promise<Tax_rule | null>;
    tax_rules(ctx: any, info: GraphQLResolveInfo, args: FindManyTax_ruleArgs): Promise<Tax_rule[]>;
    tax_rule(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTax_ruleArgs): Promise<Tax_rule | null>;
    groupByTax_rule(ctx: any, info: GraphQLResolveInfo, args: GroupByTax_ruleArgs): Promise<Tax_ruleGroupBy[]>;
    updateManyTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTax_ruleArgs): Promise<AffectedRowsOutput>;
    updateOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTax_ruleArgs): Promise<Tax_rule | null>;
    upsertOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTax_ruleArgs): Promise<Tax_rule>;
}
