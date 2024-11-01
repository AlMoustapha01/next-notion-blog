export interface PostData {
  author: string;
  publishedAt: string;
  avatar: string;
  title: string;
  description: string;
  tags: string[];
  views: number;
  likes: number;
  readingTime: string;
  slug: string;
}

export const PostsData: PostData[] = [
  {
    author: "Joe Doe",
    publishedAt: "2024-12-12",
    avatar: "/assets/images/user1.png",
    title:
      "Découvrez Comment Utiliser Notion comme CMS et Créez Votre Blog avec Next.js en un Rien de Temps",
    description:
      "En tant que développeur, j’ai toujours recherché des solutions légères et efficaces pour créer des projets web, sans m'encombrer des complexités inutiles. Récemment, j’ai décidé de partager mon expertise et mes découvertes à travers un blog. En explorant différentes options, j’ai trouvé une approche qui m’a totalement convaincu : Next.js, associé à Notion comme CMS. Le résultat ? Un blog facile à déployer, sans infrastructure lourde à gérer, et le tout à zéro frais.",
    tags: ["react", "nextjs", "notion"],
    views: 22,
    likes: 30,
    readingTime: "5 min de lecture",
    slug: "decouvrez-comment-utiliser-notion-comme-cms-et-creez-votre-blog-avec-nextjs-en-un-rien-de-temps",
  },
  {
    author: "Jane Doe",
    publishedAt: "2024-11-11",
    avatar: "/assets/images/user2.png",
    title:
      "Comment Améliorer la Sécurité de Votre Application Web avec SSL/TLS",
    description:
      "La sécurité est un aspect crucial pour toutes les applications web. Dans cet article, nous allons explorer les moyens de renforcer la sécurité de votre site web en utilisant SSL/TLS. Vous apprendrez comment obtenir un certificat SSL/TLS, comment le configurer sur votre serveur et comment gérer les problèmes couramment rencontrés.",
    tags: ["sécurité", "ssl", "tls"],
    views: 15,
    likes: 20,
    readingTime: "10 min de lecture",
    slug: "comment-ameliorrer-la-securite-de-votre-application-web-avec-ssl-tls",
  },
  {
    author: "Jean Dupont",
    publishedAt: "2024-10-10",
    avatar: "/assets/images/user1.png",
    title:
      "Les Meilleures Pratiques pour Optimiser les Performances de Votre Site Web",
    description:
      "Les performances d'un site web sont essentielles pour offrir une expérience utilisateur de qualité. Dans cet article, nous allons couvrir les meilleures pratiques pour améliorer les performances de votre site web, notamment l'optimisation des images, la compression du code et la mise en cache.",
    tags: ["performances", "optimisation", "web"],
    views: 18,
    likes: 25,
    readingTime: "8 min de lecture",
    slug: "les-meilleures-pratiques-pour-optimiser-les-performances-de-votre-site-web",
  },
  {
    author: "Pierre Dupont",
    publishedAt: "2024-09-09",
    avatar: "/assets/images/user2.png",
    title: "Introduction à l'Apprentissage Automatique avec TensorFlow.js",
    description:
      "L'apprentissage automatique est un domaine en constante évolution dans le monde du développement web. Dans cet article, nous allons introduire TensorFlow.js, une bibliothèque JavaScript pour l'apprentissage automatique. Vous apprendrez comment utiliser TensorFlow.js pour créer des modèles d'apprentissage automatique dans votre application web.",
    tags: ["apprentissage automatique", "tensorflow", "javascript"],
    views: 12,
    likes: 18,
    readingTime: "12 min de lecture",
    slug: "introduction-a-l-apprentissage-automatique-avec-tensorflow-js",
  },
  {
    author: "Marie Dupont",
    publishedAt: "2024-08-08",
    avatar: "/assets/images/user1.png",
    title: "Créer un Chatbot avec Dialogflow et Node.js",
    description:
      "Les chatbots sont de plus en plus populaires dans les applications web. Dans cet article, nous allons montrer comment créer un chatbot simple avec Dialogflow et Node.js. Vous apprendrez comment intégrer Dialogflow dans votre application Node.js et comment gérer les interactions avec l'utilisateur.",
    tags: ["chatbot", "dialogflow", "nodejs"],
    views: 10,
    likes: 15,
    readingTime: "15 min de lecture",
    slug: "creer-un-chatbot-avec-dialogflow-et-node-js",
  },
];
