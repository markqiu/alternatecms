"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneGlossaryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneGlossaryArgs_1 = require("./args/UpsertOneGlossaryArgs");
const Glossary_1 = require("../../../models/Glossary");
const helpers_1 = require("../../../helpers");
let UpsertOneGlossaryResolver = class UpsertOneGlossaryResolver {
    async upsertOneGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneGlossaryArgs_1.UpsertOneGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneGlossaryResolver.prototype, "upsertOneGlossary", null);
UpsertOneGlossaryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Glossary_1.Glossary)
], UpsertOneGlossaryResolver);
exports.UpsertOneGlossaryResolver = UpsertOneGlossaryResolver;
