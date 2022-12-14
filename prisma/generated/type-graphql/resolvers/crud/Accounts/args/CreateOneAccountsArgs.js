"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsCreateInput_1 = require("../../../inputs/AccountsCreateInput");
let CreateOneAccountsArgs = class CreateOneAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsCreateInput_1.AccountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsCreateInput_1.AccountsCreateInput)
], CreateOneAccountsArgs.prototype, "data", void 0);
CreateOneAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAccountsArgs);
exports.CreateOneAccountsArgs = CreateOneAccountsArgs;
