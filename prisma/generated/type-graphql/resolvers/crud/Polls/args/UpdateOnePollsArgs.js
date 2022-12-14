"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsUpdateInput_1 = require("../../../inputs/PollsUpdateInput");
const PollsWhereUniqueInput_1 = require("../../../inputs/PollsWhereUniqueInput");
let UpdateOnePollsArgs = class UpdateOnePollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsUpdateInput_1.PollsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsUpdateInput_1.PollsUpdateInput)
], UpdateOnePollsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereUniqueInput_1.PollsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsWhereUniqueInput_1.PollsWhereUniqueInput)
], UpdateOnePollsArgs.prototype, "where", void 0);
UpdateOnePollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePollsArgs);
exports.UpdateOnePollsArgs = UpdateOnePollsArgs;
