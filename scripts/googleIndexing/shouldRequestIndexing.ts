export const shouldRequestIndexing = async (
  accessToken: string,
  url: string,
) => {
  const response = await fetch(
    `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (response.status === 200) {
    const json: {
      url: string;
      latestUpdate?: {
        url: string;
        type: 'URL_UPDATED';
        notifyTime: string;
      };
      latestRemove?: {
        url: string;
        type: 'URL_DELETED';
        notifyTime: string;
      };
    } = await response.json();

    const latestUpdate = json.latestUpdate?.notifyTime;
    // there is no recent update, should request indexing
    if (!latestUpdate) {
      return true;
    }
    const nowTimeStamp = new Date().getTime();
    const lastUpdateTimestamp = new Date(latestUpdate).getTime();
    // if last update is 1 hour ago or earlier, request indexing
    return nowTimeStamp - lastUpdateTimestamp >= 3600_000;
  }

  // as a default behavior, we should always request indexing
  return true;
};
