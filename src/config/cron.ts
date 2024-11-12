import cron from 'node-cron';
import { checkSubscriptions } from '../jobs/checkSubscriptions';

export const scheduleCronJobs = () => {
  cron.schedule('0 1 * * *', async () => {
    console.log('Running subscription check at 1 a.m.');
    await checkSubscriptions();
  });
};
