"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyVendorsArgs_1 = require("./args/FindManyVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let FindManyVendorsResolver = class FindManyVendorsResolver {
    async findManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Vendors_1.Vendors], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVendorsArgs_1.FindManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyVendorsResolver.prototype, "findManyVendors", null);
FindManyVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], FindManyVendorsResolver);
exports.FindManyVendorsResolver = FindManyVendorsResolver;
