import { userData } from '../../../src/data';
import { outputJSON } from '../../../src/utils/api/outputJSON';

export const dynamic = 'force-static';

export const GET = async () => {
  return outputJSON(userData);
};
