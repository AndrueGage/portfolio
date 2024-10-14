
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

const getAllDatesInRange = (startDate: Date, endDate: Date) => {
  const dates = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate).toISOString().split('T')[0]); // Store date as string (YYYY-MM-DD)
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return dates;
};

export async function getCommitHistory() {
  const { startDate, endDate } = getWeekDates();
  try {
    const repoResponse = await fetch(`https://api.github.com/users/${API_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${API}`,
      },
      next: { revalidate: 0 }
    });
    const repoJson = await repoResponse.json();
    let totalCommits = 0;

    
    const allDates = getAllDatesInRange(new Date(startDate), new Date(endDate));
    const dailyCommits: { [date: string]: number } = allDates.reduce((acc, date) => {
      acc[date] = 0;
      return acc;
    }, {} as { [date: string]: number }); 

    const commitsResponses = await Promise.all(repoJson.map(async (repo: any) => {
      const response = await fetch(
        `https://api.github.com/repos/${API_USERNAME}/${repo.name}/commits?since=${startDate}&until=${endDate}`,
        {
          headers: {
            Authorization: `token ${API}`,
          },
          next: { revalidate: 0 }
        }
      );
      return await response.json();
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

    const weekData = allDates.map(date => ({
      date,
      count: dailyCommits[date], 
    }));

    const finalPayload = {
      formattedData: weekData,
      totalCommits
    };

    console.log(finalPayload);
    return finalPayload;  
  } catch (error) {
    console.error('Error fetching commits:', error);
  }
}
