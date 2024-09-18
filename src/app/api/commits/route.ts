import { NextResponse } from 'next/server';
import axios from 'axios';

const API = process.env.API;
const API_USERNAME = process.env.API_USER;

const getWeekDates = () => {
  const now = new Date();
  const endDate = new Date(now);
  endDate.setHours(23, 59, 59, 999);

  const startDate = new Date(now);
  startDate.setDate(now.getDate() - 6);
  startDate.setHours(0, 0, 0, 0);

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
};

export async function GET() {
  const { startDate, endDate } = getWeekDates();

  try {
    const repoResponse = await axios.get(`https://api.github.com/users/${API_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${API}`,
      },
    });

    const repos = repoResponse.data;
    let totalCommits = 0;
    const dailyCommits: { [date: string]: number } = {};

    const commitPromises = repos.map((repo: any) =>
      axios.get(
        `https://api.github.com/repos/${API_USERNAME}/${repo.name}/commits?since=${startDate}&until=${endDate}`,
        {
          headers: {
            Authorization: `token ${API}`,
          },
        }
      )
    );

    const commitsResponses = await Promise.all(commitPromises);

    commitsResponses.forEach((commitsResponse: any) => {
      const commits = commitsResponse.data;

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
    const finalPayload = {
     formattedData,
      totalCommits
    }
    return NextResponse.json(finalPayload);
  } catch (error) {
    console.error('Error fetching commits:', error);
    return NextResponse.json({ error: 'Error fetching commits' }, { status: 500 });
  }
}