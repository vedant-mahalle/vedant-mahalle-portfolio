import GitHubCalendar from 'react-github-calendar';

export default function ContributionCalendar() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        GitHub Contributions
      </h2>
      <GitHubCalendar
        username="vedant-mahalle"
        blockSize={10}
        blockMargin={1}
        fontSize={12}
      />
    </div>
  );
} 