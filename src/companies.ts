export const companies = [
  { id: 'microsoft', name: 'Microsoft', link: 'https://www.microsoft.com' },
  { id: 'tencent', name: 'Tencent', link: 'https://www.tencent.com' },
  { id: 'nio', name: 'NIO', link: 'https://www.nio.com' },
  { id: 'leetcode', name: 'LeetCode', link: 'https://leetcode.com' },
  { id: 'temu', name: 'Temu', link: 'https://www.temu.com' },
  { id: 'pdd', name: 'Pinduoduo', link: 'https://m.pinduoduo.com' },
  { id: 'myshell', name: 'MyShell.ai', link: 'https://myshell.ai' },
  { id: 'wacai', name: 'Wacai', link: 'https://www.wacai.com' },
] as const satisfies {
  id: string;
  name: string;
  link: string;
}[];

export type CompanyData = Readonly<(typeof companies)[number]>;

export type CompanyId = CompanyData['id'];

let companyMap: Map<CompanyId, CompanyData> | undefined;
const getCompanyMap = () => {
  if (!companyMap) {
    companyMap = new Map();
    for (const company of companies) {
      companyMap.set(company.id, company);
    }
  }
  return companyMap;
};

export const getCompanyById = (id: CompanyId): CompanyData => {
  return getCompanyMap().get(id)!;
};
