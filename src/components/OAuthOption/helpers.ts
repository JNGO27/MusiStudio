export function capitalize(provider: string) {
  const firstLetter = provider.charAt(0).toUpperCase();
  const restOfLetters = provider.slice(1);
  const providerCapitalized = firstLetter + restOfLetters;

  return providerCapitalized;
}

export function getTokens(url: string) {
  const hashFragment = url.split("#")[1];
  const andFragment = url.split("&")[4];

  const accessToken = new URLSearchParams(hashFragment).get(
    "access_token",
  ) as string;
  const refreshToken = new URLSearchParams(andFragment).get(
    "refresh_token",
  ) as string;

  return [accessToken, refreshToken];
}
