import { Repository } from "@/interfaces";

const API_USERNAME = process.env.API_USER;

export default async function Page({ params }: { params: { slug: string } }) {
    const response = await fetch(`https://api.github.com/repos/${API_USERNAME}/${params.slug}`, { cache: 'no-cache'});
    const chartData: Repository = await response.json();

    return <div>My Post: {params.slug}{JSON.stringify(chartData.name)}</div>
}