
import { NextResponse } from 'next/server';
import axios from 'axios';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USER;

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
    const repoResponse = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      
    });


    const repos = repoResponse.data;
    let totalCommits = 0;
    const weekData: { date: string; count: number }[] = [];
    
    for (const repo of repos) {
      const commitsResponse = await axios.get(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?since=${startDate}&until=${endDate}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      const commits = commitsResponse.data;
      let dailyCommits: { [date: string]: number } = {};

      commits.forEach((commit: any) => {
        const commitDate = new Date(commit.commit.author.date).toISOString().split('T')[0];
        if (commitDate >= startDate.split('T')[0] && commitDate <= endDate.split('T')[0]) {
          dailyCommits[commitDate] = (dailyCommits[commitDate] || 0) + 1;
        }
      });

      Object.keys(dailyCommits).forEach(date => {
        weekData.push({ date, count: dailyCommits[date] });
      });

      totalCommits += commits.length;
    }
    
    weekData.reverse();
    return NextResponse.json({ totalCommits, weekData });
  } catch (error) {
    console.error('Error fetching commits:', error);
    return NextResponse.json({ error: 'Error fetching commits' }, { status: 500 });
  }
}
