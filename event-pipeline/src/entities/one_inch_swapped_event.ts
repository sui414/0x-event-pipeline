import { BigNumber } from '@0x/utils';
import { Column, Entity } from 'typeorm';

import { Event } from '@0x/pipeline-utils';
import { bigNumberTransformer } from '@0x/pipeline-utils';


@Entity({ name: 'oneinch_swapped_events', schema: 'events' })
export class OneInchSwappedEvent extends Event {
    // The address of the from token
    @Column({ name: 'src_token', type: 'varchar' })
    public srcToken!: string;
    // The address of the to token
    @Column({ name: 'dst_token', type: 'varchar' })
    public dstToken!: string;
    @Column({ name: 'spent_amount', type: 'numeric', transformer: bigNumberTransformer })
    public spentAmount!: BigNumber;
    @Column({ name: 'return_amount', type: 'numeric', transformer: bigNumberTransformer })
    public returnAmount!: BigNumber;
}