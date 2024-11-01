import { Post, PostAuthor, PostContent, PostDescription, PostFooter, PostStat, PostTags, PostTagsChild, PostTitle } from "@/components/post";
import { PostsData } from "@/components/post/data";

export default function Blog() {
    return (
        <main className="w-full min-h-screen overflow-auto mx-auto">
            <div className="container max-w-5xl mx-auto py-10 px-3">
                <h1 className="text-4xl font-bold">Mon Blog personnel</h1>
                <div className="pt-7 space-y-4">
                    {
                        PostsData.map((post, index) => (
                            <Post key={index} link={`/blog/${index}`}>
                                <PostAuthor name={post.author} publishedAt={post.publishedAt} avatar={post.avatar} />
                                <PostContent>
                                    <PostTitle>{post.title}</PostTitle>
                                    <PostDescription>{post.description}</PostDescription>
                                    <PostTags>
                                        {post.tags.map((tag, index) => (
                                            <PostTagsChild key={index}>{tag}</PostTagsChild>
                                        ))}
                                    </PostTags>
                                </PostContent>
                                <PostFooter className="flex justify-between">
                                    <div className="flex items-center gap-6">
                                        <PostStat className="items-center" textProps={{ text: post.views.toString() }} iconProps={{ name: "eye", size: 16 }} />
                                        <PostStat className="items-center" textProps={{ text: post.likes.toString() }} iconProps={{ name: "hand-heart", size: 16 }} />
                                    </div>
                                    <p className="md:text-base text-sm">{post.readingTime}</p>
                                </PostFooter>
                            </Post>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}
