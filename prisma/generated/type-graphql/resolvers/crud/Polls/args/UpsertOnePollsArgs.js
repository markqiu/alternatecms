"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsCreateInput_1 = require("../../../inputs/PollsCreateInput");
const PollsUpdateInput_1 = require("../../../inputs/PollsUpdateInput");
const PollsWhereUniqueInput_1 = require("../../../inputs/PollsWhereUniqueInput");
let UpsertOnePollsArgs = class UpsertOnePollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereUniqueInput_1.PollsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsWhereUniqueInput_1.PollsWhereUniqueInput)
], UpsertOnePollsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsCreateInput_1.PollsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsCreateInput_1.PollsCreateInput)
], UpsertOnePollsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsUpdateInput_1.PollsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsUpdateInput_1.PollsUpdateInput)
], UpsertOnePollsArgs.prototype, "update", void 0);
UpsertOnePollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePollsArgs);
exports.UpsertOnePollsArgs = UpsertOnePollsArgs;
