import { Container } from "@/components/ui";

export default function Notes() {
  return (
    <Container className="mt-9">
      <iframe
        title="Ryland's Notion Knowledge Base"
        src="https://ryland-l.notion.site/ebd/1c437d2f92f480eda4aedc81451ba6c7?v=1c437d2f92f480f6a783000c04fcd7f6"
        width="100%"
        height="600"
        loading="eager"
        allowFullScreen
        className="border-none ring-none"
      />
    </Container>
  );
}
