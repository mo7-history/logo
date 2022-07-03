import store from 'store';
import copy from 'copy-to-clipboard';
import _ from 'lodash';
import Qs from 'qs';

export const mStorage = store;

export const getUrlParams = () => {
  const url = window.location.href;
  const index = url.indexOf('?');
  if (index === -1) {
    return {};
  }
  const params = url.slice(index + 1);
  const paramObj = Qs.parse(params);
  return paramObj;
};

export const isPwa = (): boolean => {
  return ['fullscreen', 'standalone', 'minimal-ui'].some(
    (displayMode) => window.matchMedia(`(display-mode: ${displayMode})`).matches,
  );
};

export const cloneDeep = (data: any): any => {
  return JSON.parse(JSON.stringify(data));
};

export const $lcg = (obj: any, path: string, defaultValue: any = ''): any => {
  const data = _.get(obj, path, defaultValue);
  return cloneDeep(data);
};

export const getToken = (): string => {
  const token: string = mStorage.get('token');
  if (token) {
    return token;
  } else {
    return '';
  }
};

export const removeToken = () => {
  mStorage.clearAll();
};

export const CopyText = (text: string) => {
  copy(text);
};

export const Md5 = (message: string): string => {
  if (window.mo7Md5) {
    return window.mo7Md5(message);
  }
  return message;
};

export const Encrypt = (message: string): string => {
  if (window.mo7Encrypt) {
    return window.mo7Encrypt(message);
  }
  return message;
};
