import { Prop, getModelForClass } from '@typegoose/typegoose';

export class Subscription {
  @Prop({ required: true, type: String })
  username!: string;

  @Prop({ required: true, type: Date })
  endAt!: Date;

  @Prop({ required: true, type: String, enum: ['ACTIVE', 'WARNING', 'EXPIRED'], default: 'ACTIVE' })
  status!: 'ACTIVE' | 'WARNING' | 'EXPIRED';
}

// Create a Mongoose model for Subscription
export const SubscriptionModel = getModelForClass(Subscription);
