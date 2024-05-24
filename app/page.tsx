import { Main, Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <h1 className="sr-only">Router.so</h1>
          <p>
            Form Handling and Lead Routing for Marketing-minded Developers by{" "}
            <a href="https://9d8.dev">9d8</a>.
          </p>
          <Button asChild variant="secondary">
            <a href="https://app.router.so">Sign up for the Beta</a>
          </Button>
        </Container>
      </Section>
    </Main>
  );
}
