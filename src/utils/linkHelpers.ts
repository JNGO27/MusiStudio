// eslint-disable-next-line import/prefer-default-export
export function getTokens(url: string) {
  const refresh = url.split("#")[1];

  const access = url
    .split("&")
    .filter((urlSection) => urlSection.includes("refresh_token"))[0];

  const accessToken = new URLSearchParams(refresh).get(
    "access_token",
  ) as string;
  const refreshToken = new URLSearchParams(access).get(
    "refresh_token",
  ) as string;

  return [accessToken, refreshToken];
}
