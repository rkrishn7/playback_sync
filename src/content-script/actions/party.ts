import { PartyActions, SocketEvents } from '@root/lib/constants';
import { Notification } from '@root/lib/types/notification';

import { PartyState } from '@contentScript/reducers/party';
import socket, { emitEvent } from '@contentScript/socket';
import { syncVideoWithParty } from '@contentScript/utils/transitions';

import { Dispatch } from 'redux';

import { setUser } from './user';

export const createNotification = (notification: Omit<Notification, 'id' | 'seen'>) => {
  return {
    type: PartyActions.CREATE_NOTIFICATION,
    notification,
  };
};

export const markNotificationSeen = (notificationId: number) => {
  return {
    type: PartyActions.MARK_NOTIFICATION_SEEN,
    notificationId,
  };
};

export const setParty = (details: PartyState) => {
  return {
    type: PartyActions.SET_PARTY,
    ...details,
  };
};

export const setJoinUrl = (url: string) => {
  return {
    type: PartyActions.SET_JOIN_URL,
    url,
  };
};

export const updateUser = (user: any) => {
  return {
    type: PartyActions.UPDATE_USER,
    user,
  };
};

export const joinParty = ({ hash, isHost }: any) => {
  return async (dispatch: Dispatch) => {
    socket.connect();

    const { party, user } = await emitEvent({
      eventName: SocketEvents.JOIN_PARTY,
      data: {
        partyHash: hash,
      },
      timeout: 3000,
    });

    dispatch(setParty({ isHost, ...party }));
    dispatch(setUser({ ...user }));

    syncVideoWithParty();

    return { party, user };
  };
};
