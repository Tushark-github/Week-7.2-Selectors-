// import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import {
  messagingCountState,
  jobsCountState,
  networkCountState,
  notificationCountState,
  totalNotificationSelector,
} from './atoms';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const messagingCount = useRecoilValue(messagingCountState);
  const jobsCount = useRecoilValue(jobsCountState);
  const networkCount = useRecoilValue(networkCountState);
  const [notificationCount, setNotificationCount] = useRecoilState(notificationCountState);
  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Network ({networkCount})</button>
      <button onClick={() => setNotificationCount(notificationCount + 1)}>
        Notification ({notificationCount})
      </button>
      <button>Me ({totalNotification})</button>
    </div>
  );
}

export default App;
