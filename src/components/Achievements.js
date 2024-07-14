import React from 'react';

const Achievements = () => {
  const achievements = [
    'NPTEL Stars - NPTEL Believers award for outstanding performance in online courses',
    'All India Rank 45 in the GeeksforGeeks Job-a-thon event, September 2023',
    'Secured AIR 105 in CodeKaze Sep-2023 among 100,000+ contestants',
    'Expert rank on Codeforces with a rating of 1663',
    'Knight rank on LeetCode with a rating of 1875',
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;