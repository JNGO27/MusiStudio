export function capitalize(provider: string) {
  const firstLetter = provider.charAt(0).toUpperCase();
  const restOfLetters = provider.slice(1);
  const providerCapitalized = firstLetter + restOfLetters;

  return providerCapitalized;
}

export function getTokens(url: string) {
  const hashFragment = url
    .split("#")
    .find((urlPart) => urlPart.includes("access_token"));
  const andFragment = url
    .split("&")
    .find((urlPart) => urlPart.startsWith("refresh_token"));

  const accessToken = new URLSearchParams(hashFragment).get(
    "access_token",
  ) as string;
  const refreshToken = new URLSearchParams(andFragment).get(
    "refresh_token",
  ) as string;

  return [accessToken, refreshToken];
}
