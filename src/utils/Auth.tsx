export const authenticate = (token: string | undefined) => {
  // identifyUserFromToken(token);
  if (token) {
    return true;
  }
  return false;
};
