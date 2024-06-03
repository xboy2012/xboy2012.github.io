export const getSaKeyInput = (): {
  client_email: string;
  private_key: string;
} => {
  return JSON.parse(process.env.GCP_SA_KEY!);
};
