import { Prisma } from "@prisma/client";
import { Currency_ratesAvgAggregate } from "../outputs/Currency_ratesAvgAggregate";
import { Currency_ratesCountAggregate } from "../outputs/Currency_ratesCountAggregate";
import { Currency_ratesMaxAggregate } from "../outputs/Currency_ratesMaxAggregate";
import { Currency_ratesMinAggregate } from "../outputs/Currency_ratesMinAggregate";
import { Currency_ratesSumAggregate } from "../outputs/Currency_ratesSumAggregate";
export declare class Currency_ratesGroupBy {
    import_service: string;
    usd: Prisma.Decimal | null;
    id: bigint;
    _count: Currency_ratesCountAggregate | null;
    _avg: Currency_ratesAvgAggregate | null;
    _sum: Currency_ratesSumAggregate | null;
    _min: Currency_ratesMinAggregate | null;
    _max: Currency_ratesMaxAggregate | null;
}
