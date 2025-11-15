import { companies, getCompanyById } from './companies';
import { collectDuplicatedBySelector } from './utils/collectDuplicatedBySelector';

describe('companies', () => {
  it('companies should have distinct ids', () => {
    const duplicates = collectDuplicatedBySelector(companies, (o) => o.id);
    expect(duplicates).toHaveLength(0);
  });
});

describe('getCompanyById', () => {
  for (const { id } of companies) {
    it(`should find company[id="${id}"]`, () => {
      const company = getCompanyById(id);
      expect(company).toBeTruthy();
    });
  }
});
