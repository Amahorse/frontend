import { Nullable } from "@ngserveio/utilities";
import { jwtDecode } from "jwt-decode";


// metodo nuovo che utilizza json classico
// TODO: questo deve essere fatto meglio

export const parseClaims = <T extends object>(
  token: string
): Nullable<T> => {
  return JSON.parse(token) as T;
};

export const parseJwt = <T extends object>(
  token: string
): Nullable<T> => {
  
  const tokenParts = parseClaims<{ access_token: string }>(token);
  
  if (!tokenParts || !tokenParts.access_token) {
    return null;
  }
  
  const jwt = jwtDecode(tokenParts.access_token);
  
  return jwt as T;
};
