import { experiences } from '../components/Experience';
import { educations } from '../components/Education';
import { projects } from '../components/Projects';
import { publications } from '../components/Research';

export const getLatestItems = () => {
  const latestExperience = experiences[0];
  const latestEducation = educations[0];
  const latestProject = projects[0];
  const latestPublication = publications[0];

  return [
    {
      title: latestExperience.title,
      subtitle: latestExperience.company,
      date: latestExperience.date,
      description: latestExperience.description.slice(0, 100) + '...',
      type: 'Experience',
      link: 'experience'
    },
    {
      title: latestEducation.degree,
      subtitle: latestEducation.institution,
      date: latestEducation.year,
      description: `${latestEducation.grade}. ${latestEducation.description.slice(0, 80)}...`,
      type: 'Education',
      link: 'education'
    },
    {
      title: latestProject.title,
      subtitle: 'Project',
      description: latestProject.description.slice(0, 100) + '...',
      type: 'Project',
      link: 'projects'
    },
    {
      title: latestPublication.title,
      subtitle: latestPublication.journal || latestPublication.conference,
      date: latestPublication.year,
      description: latestPublication.description.slice(0, 100) + '...',
      type: 'Publication',
      link: 'research'
    }
  ];
};