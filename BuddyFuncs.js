//helpfull functions

export const removeAndAddListeners = (elem, listenerName, func) => {
  elem.removeEventListener(listenerName, (e) => func(e));
  elem.addEventListener(listenerName, (e) => func(e));
};

export const fetchAPI = (url) => {
  return fetch(url).then((r) => r.json());
};

export const fetchPostAPI = (params = { url, formData, method: "POST" }) => {
  return fetch(params.url, {
    method: params.method ? params.method : "POST",
    body: params.formData,
  }).then((r) => r.json());
};

export const fetchPostJsonAPI = (params = { url, json, method: "POST" }) => {
  return fetch(params.url, {
    method: params.method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(params.json),
  }).then((r) => r.json());
};

export const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
