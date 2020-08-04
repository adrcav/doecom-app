import axios from 'axios';
import Cookies from 'js-cookie';
import ReactGA from 'react-ga';

const { REACT_APP_API_BASE_URL, REACT_APP_GA_ID } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
});

const newUCId = () => Math.random().toString(36).substring(4);

const setup = () => {
  let uCId = Cookies.get('ucid');
  if (!uCId) {
    uCId = newUCId();
    Cookies.set('ucid', uCId, { expires: 365 });
  }

  // Google Analytics
  ReactGA.initialize(REACT_APP_GA_ID, { gaOptions: { uCId: uCId } });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const getUserAgent = () => navigator.userAgent;

const getUCId = () => Cookies.get('ucid');

const prepareData = (data) => btoa(JSON.stringify(data));

const visit = (causeId) => new Promise( async (resolve, reject) => {
  const data = prepareData({
    p: causeId,
    b: {
      userAgent: getUserAgent(),
      uCId: getUCId(),
      event: 'PAGE_VIEW',
      referrer: document.referrer
    }
  });
  await api.post('/a', { r: data });
  resolve();
});

const linkClick = (pageId, linkId) => new Promise( async (resolve, reject) => {
  const data = prepareData({
    p: pageId,
    b: {
      userAgent: getUserAgent(),
      uCId: getUCId(),
      event: 'LINK_CLICK',
      params: linkId
    }
  });
  await api.post('/a', { r: data });
  resolve();
});


const linkVisit = (pageId, linkId) => new Promise( async (resolve, reject) => {
  const data = prepareData({
    p: pageId,
    b: {
      userAgent: getUserAgent(),
      uCId: getUCId(),
      event: 'REDIRECT',
      params: linkId
    }
  });
  await api.post('/a', { r: data });
  resolve();
});

export {
  setup,
  visit,
  linkClick,
  linkVisit
};
