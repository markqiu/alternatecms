"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneDashboardsArgs_1 = require("./args/UpdateOneDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const helpers_1 = require("../../../helpers");
let UpdateOneDashboardsResolver = class UpdateOneDashboardsResolver {
    async updateOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardsArgs_1.UpdateOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDashboardsResolver.prototype, "updateOneDashboards", null);
UpdateOneDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], UpdateOneDashboardsResolver);
exports.UpdateOneDashboardsResolver = UpdateOneDashboardsResolver;
