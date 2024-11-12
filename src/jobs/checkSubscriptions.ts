import { getSubscriptions, updateSubscriptionStatus } from '../services/subscriptionService';
import { Subscription } from '../models/subscription.model';

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;
const WARNING_DAYS = 5;

export const checkSubscriptions = async () => {
  try {
    const subscriptions = await getSubscriptions(); 
    const currentDate = new Date();

    for (const subscription of subscriptions) {
      if (subscription.status === 'EXPIRED') continue;

      const daysRemaining = Math.ceil((new Date(subscription.endAt).getTime() - currentDate.getTime()) / MS_IN_A_DAY);

      if (daysRemaining <= 0) {
        await updateSubscriptionStatus(subscription._id.toString(), 'EXPIRED'); 
      } else if (daysRemaining <= WARNING_DAYS) {
        await updateSubscriptionStatus(subscription._id.toString(), 'WARNING');
      }
    }
  } catch (error) {
    console.error('Error updating subscription statuses:', error);
  }
};
