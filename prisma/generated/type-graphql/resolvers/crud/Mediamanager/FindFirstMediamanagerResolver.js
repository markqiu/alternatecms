"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstMediamanagerArgs_1 = require("./args/FindFirstMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let FindFirstMediamanagerResolver = class FindFirstMediamanagerResolver {
    async findFirstMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMediamanagerArgs_1.FindFirstMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMediamanagerResolver.prototype, "findFirstMediamanager", null);
FindFirstMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], FindFirstMediamanagerResolver);
exports.FindFirstMediamanagerResolver = FindFirstMediamanagerResolver;
