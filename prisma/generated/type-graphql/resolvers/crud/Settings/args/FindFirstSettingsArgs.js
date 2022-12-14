"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingsOrderByWithRelationAndSearchRelevanceInput");
const SettingsWhereInput_1 = require("../../../inputs/SettingsWhereInput");
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
const SettingsScalarFieldEnum_1 = require("../../../../enums/SettingsScalarFieldEnum");
let FindFirstSettingsArgs = class FindFirstSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereInput_1.SettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereInput_1.SettingsWhereInput)
], FindFirstSettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsOrderByWithRelationAndSearchRelevanceInput_1.SettingsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], FindFirstSettingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsScalarFieldEnum_1.SettingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingsArgs.prototype, "distinct", void 0);
FindFirstSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSettingsArgs);
exports.FindFirstSettingsArgs = FindFirstSettingsArgs;
