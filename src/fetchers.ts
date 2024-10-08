
const API = process.env.API;
const API_USERNAME = process.env.API_USER;

const getWeekDates = () => {
  const now = new Date();
  const endDate = new Date(now);

  const startDate = new Date(now);
  startDate.setDate(now.getDate() - 6);
  startDate.setHours(0, 0, 0, 0);
  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
};

export async function getCommitHistory() {
  const { startDate, endDate } = getWeekDates();
  try {
    const repoResponse = await fetch(`https://api.github.com/users/${API_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${API}`,
        cache: 'no-cache'
      },
    });
    const repoJson = await repoResponse.json();
    let totalCommits = 0;
    const dailyCommits: { [date: string]: number } = {};

    const commitsResponses = await Promise.all(repoJson.map(async (repo: any) => {
      const response = await fetch(
        `https://api.github.com/repos/${API_USERNAME}/${repo.name}/commits?since=${startDate}&until=${endDate}`,
        {
          headers: {
            Authorization: `token ${API}`,
            cache: 'no-cache'
          },
        }
      );
      return await response.json()
    }));

    commitsResponses.forEach((commitsResponse: any) => {
      const commits = commitsResponse;

      commits.forEach((commit: any) => {
        const commitDate = new Date(commit.commit.author.date).toISOString().split('T')[0];

        if (commitDate >= startDate.split('T')[0] && commitDate <= endDate.split('T')[0]) {
          dailyCommits[commitDate] = (dailyCommits[commitDate] || 0) + 1;
        }
      });

      totalCommits += commits.length;
    });

    const weekData = Object.keys(dailyCommits)
      .map(date => ({ date, count: dailyCommits[date] }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const formattedData = weekData.map((commit: { date: string; count: number }) => (
      {
        date: commit.date,
        count: commit.count,
      }
    ))
    console.log(formattedData);
    const finalPayload = {
      formattedData,
      totalCommits

    }
    return finalPayload;  
  } catch (error) {
    console.error('Error fetching commits:', error);
  }
  
}
