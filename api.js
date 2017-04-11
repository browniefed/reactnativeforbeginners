import "isomorphic-fetch";

const SERVER = process.env.SERVER;

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res;
    throw error;
  }
};

export const charge = ({ id: token, email }, courseToken) => {
  return fetch(`${SERVER}/payments/charge`, {
    method: "POST",
    body: JSON.stringify({
      stripeToken: token,
      email,
      courseToken
    }),
  })
    .then(checkStatus)
    .then(res => res.json());
};


export const loadCourse = (token) => {
  return fetch(`${SERVER}/courses/token/${token}`).then(checkStatus).then(res => res.json());
}