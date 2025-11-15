import { join, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { pathExists } from '../../src/utils/pathExists';
import { companies, type CompanyId } from '../../src/companies';
import { getRootDir } from '../../src/utils/getRootDir';

describe('companies.css', () => {
  const readCss = (): Promise<string> => {
    const cssFile = resolve(import.meta.dirname, './companies.css');
    return readFile(cssFile, 'utf8');
  };

  const validExtensions = ['.svg', '.jpg'];
  const rootDir = getRootDir();
  const companyImageDir = join(rootDir, 'app', 'images', 'company');

  const findCompanyImage = async (id: CompanyId): Promise<string> => {
    const allFileNames = await Promise.all(
      validExtensions.map(async (extension) => {
        const fileName = id + extension;
        const path = join(companyImageDir, fileName);
        return (await pathExists(path)) ? fileName : '';
      }),
    );
    const fileNames = allFileNames.filter(Boolean);
    const length = fileNames.length;
    if (!length) {
      throw new Error(`no image found for company[id=${id}]`);
    }
    if (length > 1) {
      throw new Error(`more than 1 image file found -- ${fileNames.join(',')}`);
    }
    return fileNames[0];
  };

  const getExpectedCssContent = async () => {
    return [
      '@theme {',
      ...(await Promise.all(
        companies.map(async ({ id }) => {
          const imageFile = await findCompanyImage(id);
          return `  --background-image-${id}: url("../images/company/${imageFile}");`;
        }),
      )),
      '}\n',
    ].join('\n');
  };

  it('companies.css should be align with javascript', async () => {
    const [cssContent, expectedCssContent] = await Promise.all([
      readCss(),
      getExpectedCssContent(),
    ]);
    expect(cssContent).toBe(expectedCssContent);
  });
});
