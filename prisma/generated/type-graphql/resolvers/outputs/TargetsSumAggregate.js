"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let TargetsSumAggregate = class TargetsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TargetsSumAggregate.prototype, "id", void 0);
TargetsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TargetsSumAggregate", {
        isAbstract: true
    })
], TargetsSumAggregate);
exports.TargetsSumAggregate = TargetsSumAggregate;
