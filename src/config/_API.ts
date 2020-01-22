import Axios from 'axios';
import { ServiceTypes } from './_Actions';

interface APIRequestInterface {
  type?: ServiceTypes;
  input?: object;
}

interface APIRequestResponse {
  success: boolean;
  message: string | null;
  output: object | null;
}

export const apiRequest = async ({
  type,
  input
}: APIRequestInterface): Promise<APIRequestResponse> => {
  let dev = true;
  if (typeof window !== 'undefined') {
    if (!window.location.href.includes('http://localhost')) {
      dev = false;
    }
  }
  try {
    if (dev) {
      console.groupCollapsed('%capi_request', 'color: aqua;', type);
      console.log('input', input);
      console.groupEnd();
    }
    const {
      data: { success, message, output }
    }: { data: APIRequestResponse } = await Axios({
      url: `/gateway`,
      method: 'post',
      data: {
        type,
        input
      }
    });
    if (success) {
      if (dev) {
        console.groupCollapsed('%capi_response', 'color: lime;', type);
        console.log('success', success);
        console.log('message:', message);
        console.log('output', output);
        console.groupEnd();
      }
      return { success, message, output };
    } else {
      if (dev) {
        console.groupCollapsed('%capi_response', 'color: orange;', type);
        console.log('success', success);
        console.log('message:', message);
        console.log('output', output);
        console.groupEnd();
      }
    }
    return { success, message, output };
  } catch (e) {
    if (e.response && e.response.status === 401) {
      if (dev) {
        console.groupCollapsed('%capi_response 401', 'color: red;', type);
        console.log('message:', e.message);
        console.groupEnd();
      }
      // logout
      return { success: false, message: 'Unauthorised', output: null };
    }
    if (dev) {
      console.groupCollapsed('%capi_response', 'color: red;', type);
      console.log('message:', e.message);
      console.log('status', e.response ? e.response.status : e);
      console.groupEnd();
    }
    return { success: false, message: e.message, output: null };
  }
};
