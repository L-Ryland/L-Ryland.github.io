import { Card } from "@/components/ui";
import type { ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import type { FC } from "react";

interface Props {
  article: ArticleWithSlug;
}
const Article: FC<Props> = ({ article }) => {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

export default Article;
