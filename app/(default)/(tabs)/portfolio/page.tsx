import { Portfolio } from '../../../../components/Portfolio';
import { getProjects } from '../../../../src/projects/getProjects';

const PortfolioPage = async () => {
  const projects = await getProjects();
  return <Portfolio projects={projects} />;
};

export default PortfolioPage;
