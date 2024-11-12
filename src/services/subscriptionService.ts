import { SubscriptionModel } from '../models/subscription.model';  

export const getSubscriptions = async () => {
  return SubscriptionModel.find();
};

export const updateSubscriptionStatus = async (id: string, status: 'WARNING' | 'EXPIRED') => {
  return SubscriptionModel.findByIdAndUpdate(id, { status }, { new: true });
};
