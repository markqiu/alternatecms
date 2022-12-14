"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateInput_1 = require("../../../inputs/CouponsCreateInput");
let CreateOneCouponsArgs = class CreateOneCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateInput_1.CouponsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsCreateInput_1.CouponsCreateInput)
], CreateOneCouponsArgs.prototype, "data", void 0);
CreateOneCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCouponsArgs);
exports.CreateOneCouponsArgs = CreateOneCouponsArgs;
