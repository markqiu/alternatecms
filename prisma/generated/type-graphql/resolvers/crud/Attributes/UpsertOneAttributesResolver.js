"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneAttributesArgs_1 = require("./args/UpsertOneAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const helpers_1 = require("../../../helpers");
let UpsertOneAttributesResolver = class UpsertOneAttributesResolver {
    async upsertOneAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attributes_1.Attributes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAttributesArgs_1.UpsertOneAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneAttributesResolver.prototype, "upsertOneAttributes", null);
UpsertOneAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], UpsertOneAttributesResolver);
exports.UpsertOneAttributesResolver = UpsertOneAttributesResolver;
