import { Repository } from "@/interfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const API_USERNAME = process.env.API_USER;

export default async function Page({ params }: { params: { slug: string } }) {
    const readmeResponse = await fetch(`https://api.github.com/repos/${API_USERNAME}/${params.slug}/contents/README.md`, {cache: 'no-cache'});

    if (!readmeResponse.ok) {
        return <div>Error fetching the README file.</div>;
    }

    const readmeData = await readmeResponse.json();
    const readmeContent = atob(readmeData.content);

    const transformImageUri = (uri: string) => {
        if (uri.startsWith("http") || uri.startsWith("data:")) {
            return uri;
        }
        return `https://raw.githubusercontent.com/${API_USERNAME}/${params.slug}/main/${uri}`;
    };

    return (
        <div className="p-6 max-w-[1400] flex justify-center">
            <div className="prose lg:prose-xl dark:prose-invert">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        img: ({ node, ...props }) => (
                            <img
                                className="mx-auto my-4 max-w-full rounded-md"
                                alt={props.alt}
                                src={transformImageUri(props.src || '')}
                                {...props}
                            />
                        ),
                        h1: ({ children }) => <h1 id={children ? children.toString().toLowerCase().replace(/\s+/g, '-') : ''} className="text-3xl font-bold my-4">{children}</h1>,
                        h2: ({ children }) => <h2 id={children ? children.toString().toLowerCase().replace(/\s+/g, '-') : ''} className="text-2xl font-semibold my-3">{children}</h2>,
                        h3: ({ children }) => <h3 id={children ? children.toString().toLowerCase().replace(/\s+/g, '-') : ''} className="text-xl font-semibold my-2">{children}</h3>,
                        ul: ({ children }) => (
                            <ul className="list-disc list-inside pl-5 my-4">{children}</ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal list-inside pl-5 my-4">{children}</ol>
                        ),
                        a: ({ href, children }) => {
                            if (href && href.startsWith("#")) {
                                return null;
                            }
                            return (
                                <a
                                    href={href}
                                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                                >
                                    {children}
                                </a>
                            );
                        },
                    }}
                    urlTransform={transformImageUri}
                >
                    {readmeContent}
                </ReactMarkdown>
            </div>
        </div>
    );
}
