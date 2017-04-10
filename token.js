import cookie from "isomorphic-cookie";
import jwtDecode from "jwt-decode";

export const getToken = req => cookie.load("token", req);
export const getParsedToken = req => {
  const token = getToken(req);
  if (!token) return false;
  return jwtDecode(token);
};
