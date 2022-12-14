"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesCreateInput_1 = require("../../../inputs/Cart_price_rulesCreateInput");
const Cart_price_rulesUpdateInput_1 = require("../../../inputs/Cart_price_rulesUpdateInput");
const Cart_price_rulesWhereUniqueInput_1 = require("../../../inputs/Cart_price_rulesWhereUniqueInput");
let UpsertOneCart_price_rulesArgs = class UpsertOneCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput)
], UpsertOneCart_price_rulesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesCreateInput_1.Cart_price_rulesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesCreateInput_1.Cart_price_rulesCreateInput)
], UpsertOneCart_price_rulesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesUpdateInput_1.Cart_price_rulesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesUpdateInput_1.Cart_price_rulesUpdateInput)
], UpsertOneCart_price_rulesArgs.prototype, "update", void 0);
UpsertOneCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCart_price_rulesArgs);
exports.UpsertOneCart_price_rulesArgs = UpsertOneCart_price_rulesArgs;
