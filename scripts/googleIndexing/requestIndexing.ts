export const requestIndexing = async (accessToken: string, url: string) => {
  const response = await fetch(
    'https://indexing.googleapis.com/v3/urlNotifications:publish',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url: url,
        type: 'URL_UPDATED',
      }),
    },
  );
  if (response.status != 200) {
    throw Error('Failed to request indexing');
  }
};
