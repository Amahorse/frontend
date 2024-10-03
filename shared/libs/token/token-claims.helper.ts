import { Nullable } from "@ngserveio/utilities";

// metodo originale che utilizza JWT
// export const parseClaims = <T extends object>(
//     token: Nullable<string>
//   ): Nullable<T> => {
//     const claims = token?.split('.');

//     if (claims?.length !== 3) {
//       return null;
//     }

//     const parsedToken = atob(claims[1]);
//     return JSON.parse(parsedToken) as T;
//   };

// metodo nuovo che utilizza json classico
export const parseClaims = <T extends object>(
  token: string
): Nullable<T> => {
  return JSON.parse(token) as T;
};
