"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstOrdersArgs_1 = require("./args/FindFirstOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let FindFirstOrdersResolver = class FindFirstOrdersResolver {
    async findFirstOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrdersArgs_1.FindFirstOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstOrdersResolver.prototype, "findFirstOrders", null);
FindFirstOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], FindFirstOrdersResolver);
exports.FindFirstOrdersResolver = FindFirstOrdersResolver;
