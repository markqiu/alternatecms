"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Credit_memosOrderByWithRelationAndSearchRelevanceInput");
const Credit_memosWhereInput_1 = require("../../../inputs/Credit_memosWhereInput");
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
const Credit_memosScalarFieldEnum_1 = require("../../../../enums/Credit_memosScalarFieldEnum");
let FindManyCredit_memosArgs = class FindManyCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], FindManyCredit_memosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosOrderByWithRelationAndSearchRelevanceInput_1.Credit_memosOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCredit_memosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], FindManyCredit_memosArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCredit_memosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCredit_memosArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosScalarFieldEnum_1.Credit_memosScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCredit_memosArgs.prototype, "distinct", void 0);
FindManyCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCredit_memosArgs);
exports.FindManyCredit_memosArgs = FindManyCredit_memosArgs;
