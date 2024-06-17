
import { atom, selector } from 'recoil';

export const messagingCountState = atom({
  key: 'messagingCountState',
  default: 67,
});

export const jobsCountState = atom({
  key: 'jobsCountState',
  default: 0,
});

export const networkCountState = atom({
  key: 'networkCountState',
  default: 0,
});

export const notificationCountState = atom({
  key: 'notificationCountState',
  default: 0,
});

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const messagingCount = get(messagingCountState);
    const jobsCount = get(jobsCountState);
    const networkCount = get(networkCountState);
    const notificationCount = get(notificationCountState);

    return messagingCount + jobsCount + networkCount + notificationCount;
  },
});
