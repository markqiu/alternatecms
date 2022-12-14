"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCatalog_price_ruleArgs_1 = require("./args/AggregateCatalog_price_ruleArgs");
const CreateManyCatalog_price_ruleArgs_1 = require("./args/CreateManyCatalog_price_ruleArgs");
const CreateOneCatalog_price_ruleArgs_1 = require("./args/CreateOneCatalog_price_ruleArgs");
const DeleteManyCatalog_price_ruleArgs_1 = require("./args/DeleteManyCatalog_price_ruleArgs");
const DeleteOneCatalog_price_ruleArgs_1 = require("./args/DeleteOneCatalog_price_ruleArgs");
const FindFirstCatalog_price_ruleArgs_1 = require("./args/FindFirstCatalog_price_ruleArgs");
const FindManyCatalog_price_ruleArgs_1 = require("./args/FindManyCatalog_price_ruleArgs");
const FindUniqueCatalog_price_ruleArgs_1 = require("./args/FindUniqueCatalog_price_ruleArgs");
const GroupByCatalog_price_ruleArgs_1 = require("./args/GroupByCatalog_price_ruleArgs");
const UpdateManyCatalog_price_ruleArgs_1 = require("./args/UpdateManyCatalog_price_ruleArgs");
const UpdateOneCatalog_price_ruleArgs_1 = require("./args/UpdateOneCatalog_price_ruleArgs");
const UpsertOneCatalog_price_ruleArgs_1 = require("./args/UpsertOneCatalog_price_ruleArgs");
const helpers_1 = require("../../../helpers");
const Catalog_price_rule_1 = require("../../../models/Catalog_price_rule");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCatalog_price_rule_1 = require("../../outputs/AggregateCatalog_price_rule");
const Catalog_price_ruleGroupBy_1 = require("../../outputs/Catalog_price_ruleGroupBy");
let Catalog_price_ruleCrudResolver = class Catalog_price_ruleCrudResolver {
    async aggregateCatalog_price_rule(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async catalog_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async catalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCatalog_price_rule(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCatalog_price_rule_1.AggregateCatalog_price_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCatalog_price_ruleArgs_1.AggregateCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "aggregateCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCatalog_price_ruleArgs_1.CreateManyCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "createManyCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCatalog_price_ruleArgs_1.CreateOneCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "createOneCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCatalog_price_ruleArgs_1.DeleteManyCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "deleteManyCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCatalog_price_ruleArgs_1.DeleteOneCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "deleteOneCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCatalog_price_ruleArgs_1.FindFirstCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "findFirstCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Catalog_price_rule_1.Catalog_price_rule], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCatalog_price_ruleArgs_1.FindManyCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "catalog_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCatalog_price_ruleArgs_1.FindUniqueCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "catalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Catalog_price_ruleGroupBy_1.Catalog_price_ruleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCatalog_price_ruleArgs_1.GroupByCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "groupByCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCatalog_price_ruleArgs_1.UpdateManyCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "updateManyCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCatalog_price_ruleArgs_1.UpdateOneCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "updateOneCatalog_price_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCatalog_price_ruleArgs_1.UpsertOneCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Catalog_price_ruleCrudResolver.prototype, "upsertOneCatalog_price_rule", null);
Catalog_price_ruleCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Catalog_price_rule_1.Catalog_price_rule)
], Catalog_price_ruleCrudResolver);
exports.Catalog_price_ruleCrudResolver = Catalog_price_ruleCrudResolver;
