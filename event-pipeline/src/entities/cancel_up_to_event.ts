import { Column, Entity } from 'typeorm';
import { BigNumber } from '@0x/utils';

import { Event } from '@0x/pipeline-utils';
import { bigNumberTransformer } from '@0x/pipeline-utils';

// These events come directly from the Exchange contract and are fired for meta transactions
@Entity({ name: 'cancel_up_to_events', schema: 'events' })
export class CancelUpToEvent extends Event {
    // maker address of orders to cancel
    @Column({ name: 'maker_address', type: 'varchar' })
    public makerAddress!: string;
    // sender address of orders to cancel
    @Column({ name: 'sender_address', type: 'varchar' })
    public senderAddress!: string;
    // order epoch to cancel up to
    @Column({ name: 'order_epoch', type: 'numeric', transformer: bigNumberTransformer })
    public orderEpoch!: BigNumber;
}
