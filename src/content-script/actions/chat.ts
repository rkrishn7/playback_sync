import * as Constants from '@contentScript/constants/chat';

export const sendMessage = (content: string) => {
  return {
    type: Constants.SEND_MESSAGE,
    message: {
      content,
      timestamp: Date.now(),
    },
  };
};
