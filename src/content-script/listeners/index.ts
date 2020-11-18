import { ChromeRuntimeMessages, WindowMessages } from '@root/lib/constants';
import { debug, inject } from '@root/lib/utils';
import { toggleChat } from '@contentScript/actions/chat';
import { pageTransition, teardown } from '@contentScript/utils/transitions';
import { joinParty, createNotification, hostNav } from '@contentScript/actions/party';
import { setUser } from '@contentScript/actions/user';
import store from '@contentScript/store';
import { attachToVideoPlayer } from './player';

/**
 * Our content script has a different browsing context than that of the current webpage
 * We can use the postMessage API to circumvent reference restrictions
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
 */
window.addEventListener('message', event => {
  const state = store.getState();
  switch (event.data.name) {
    case WindowMessages.URL_CHANGE:
      debug(event.data.name);
      if (!state.party.isHost && !state.party.hostNav) {
        debug(`NON HOST NAV`);
      }
      pageTransition(document.location.href);
      attachToVideoPlayer();
      break;
    case WindowMessages.PAGE_UNLOAD:
      debug(event.data);
      teardown();
      break;
    case WindowMessages.PAGE_LOADED:
      debug(event.data.name);
      store.dispatch(hostNav(false));
      break;
    default:
      debug('Unknown Window Message Name');
  }
});

window.addEventListener('load', attachToVideoPlayer);

// CANNOT REFERENCE ANY VARIABLES FROM OUTER SCOPE (They will not resolve)
function addNavigationListeners() {
  /**
   * This appears to be the name of the event triggered when we navigate client-side
   * on Youtube
   * @see https://stackoverflow.com/a/54389066
   */
  window.addEventListener('yt-page-data-updated', function () {
    window.postMessage({ name: 'URL_CHANGE' }, '*');
  });
  /**
   * This event fires before the document and page resources are unloaded
   * (e.g. before we leave/reload a page)
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
   */
  window.addEventListener('beforeunload', function () {
    window.postMessage({ name: 'PAGE_UNLOAD' }, '*');
  });
  /**
   * This event fires when the document is fully loaded
   * Used to detect when someone leaves the party for another YT Vid
   */
  window.addEventListener('yt-navigate-finish', function () {
    window.postMessage({ name: 'PAGE_LOADED' }, '*');
  });
}

/**
 * Injects the window listeners into the page's frame
 */
(function setup() {
  inject(addNavigationListeners);
})();

chrome.runtime.onMessage.addListener((message: any, _sender, sendResponse) => {
  const storeState = store.getState();
  switch (message.name) {
    case ChromeRuntimeMessages.HIDE_CONTENT_SCRIPT_HTML:
      teardown();
      break;
    case ChromeRuntimeMessages.TOGGLE_CHAT:
      store.dispatch(toggleChat());
      sendResponse();
      break;
    case ChromeRuntimeMessages.GET_PARTY_DETAILS: {
      sendResponse({
        data: storeState.party,
      });
      break;
    }
    case ChromeRuntimeMessages.GET_USER_DETAILS: {
      sendResponse({
        data: {
          user: storeState.user,
        },
      });
      break;
    }
    case ChromeRuntimeMessages.SET_USER_DETAILS: {
      store.dispatch(setUser(message.data!.user));
      break;
    }
    case ChromeRuntimeMessages.JOIN_PARTY: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.dispatch(joinParty(message.data!));
      break;
    }
    case ChromeRuntimeMessages.ADD_NOTIFICATION: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.dispatch(createNotification(message.data!.notification));
      break;
    }
    default:
  }
});
