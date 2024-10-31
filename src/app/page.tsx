import { Post, PostAuthor, PostContent, PostDescription, PostFooter, PostStat, PostTags, PostTagsChild, PostTitle } from "@/components/post";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-auto mx-auto">
      <div className="container max-w-5xl mx-auto py-10 px-3">
        <h1 className="text-4xl font-bold">Mon Blog personnel</h1>
        <div className="pt-7 space-y-4">
          <Post>
            <PostAuthor name="Joe Doe" publishedAt={"2024-12-12"} avatar="/assets/images/user1.png" />
            <PostContent>
              <PostTitle>Découvrez Comment Utiliser Notion comme CMS et Créez Votre Blog avec Next.js en un Rien de Temps</PostTitle>
              <PostDescription>En tant que développeur, j’ai toujours recherché des solutions légères et efficaces pour créer des projets web, sans m'encombrer des complexités inutiles. Récemment, j’ai décidé de partager mon expertise et mes découvertes à travers un blog. En explorant différentes options, j’ai trouvé une approche qui m’a totalement convaincu : Next.js, associé à Notion comme CMS. Le résultat ? Un blog facile à déployer, sans infrastructure lourde à gérer, et le tout à zéro frais.</PostDescription>
              <PostTags>
                <PostTagsChild> react </PostTagsChild>
                <PostTagsChild> nextjs </PostTagsChild>
                <PostTagsChild> notion </PostTagsChild>
              </PostTags>
            </PostContent>
            <PostFooter className="flex justify-between">
              <div className="flex items-center gap-6">
                <PostStat className="items-center" textProps={{ text: "22" }} iconProps={{ name: "eye", size: 16 }} />
                <PostStat className="items-center" textProps={{ text: "30" }} iconProps={{ name: "hand-heart", size: 16 }} />
              </div>
              <p className="md:text-base text-sm">5 min de lecture</p>
            </PostFooter>
          </Post>
          <Post>
            <PostAuthor name="Joe Doe" publishedAt={"2024-12-12"} avatar="/assets/images/user1.png" />
            <PostContent>
              <PostTitle>Découvrez Comment Utiliser Notion comme CMS et Créez Votre Blog avec Next.js en un Rien de Temps</PostTitle>
              <PostDescription>En tant que développeur, j’ai toujours recherché des solutions légères et efficaces pour créer des projets web, sans m'encombrer des complexités inutiles. Récemment, j’ai décidé de partager mon expertise et mes découvertes à travers un blog. En explorant différentes options, j’ai trouvé une approche qui m’a totalement convaincu : Next.js, associé à Notion comme CMS. Le résultat ? Un blog facile à déployer, sans infrastructure lourde à gérer, et le tout à zéro frais.</PostDescription>
              <PostTags>
                <PostTagsChild> react </PostTagsChild>
                <PostTagsChild> nextjs </PostTagsChild>
                <PostTagsChild> notion </PostTagsChild>
              </PostTags>
            </PostContent>
            <PostFooter className="flex justify-between">
              <div className="flex items-center gap-6">
                <PostStat className="items-center" textProps={{ text: "22" }} iconProps={{ name: "eye", size: 16 }} />
                <PostStat className="items-center" textProps={{ text: "30" }} iconProps={{ name: "hand-heart", size: 16 }} />
              </div>
              <p className="md:text-base text-sm">5 min de lecture</p>
            </PostFooter>
          </Post>
          <Post>
            <PostAuthor name="Joe Doe" publishedAt={"2024-12-12"} avatar="/assets/images/user1.png" />
            <PostContent>
              <PostTitle>Découvrez Comment Utiliser Notion comme CMS et Créez Votre Blog avec Next.js en un Rien de Temps</PostTitle>
              <PostDescription>En tant que développeur, j’ai toujours recherché des solutions légères et efficaces pour créer des projets web, sans m'encombrer des complexités inutiles. Récemment, j’ai décidé de partager mon expertise et mes découvertes à travers un blog. En explorant différentes options, j’ai trouvé une approche qui m’a totalement convaincu : Next.js, associé à Notion comme CMS. Le résultat ? Un blog facile à déployer, sans infrastructure lourde à gérer, et le tout à zéro frais.</PostDescription>
              <PostTags>
                <PostTagsChild> react </PostTagsChild>
                <PostTagsChild> nextjs </PostTagsChild>
                <PostTagsChild> notion </PostTagsChild>
              </PostTags>
            </PostContent>
            <PostFooter className="flex justify-between">
              <div className="flex items-center gap-6">
                <PostStat className="items-center" textProps={{ text: "22" }} iconProps={{ name: "eye", size: 16 }} />
                <PostStat className="items-center" textProps={{ text: "30" }} iconProps={{ name: "hand-heart", size: 16 }} />
              </div>
              <p className="md:text-base text-sm">5 min de lecture</p>
            </PostFooter>
          </Post>
        </div>
      </div>
    </main>
  );
}
