import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <section className="debugBorder gradientBG">
      <Container>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Hello</h1>
        </div>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>World</h1>
        </div>
      </Container>
    </section>
  );
}
