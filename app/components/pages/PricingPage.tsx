import { PageHeader, CTAButton } from "../shared";
import { T, type Lang } from "../../lib/translations";

interface PricingPageProps {
  lang: Lang;
}

export default function PricingPage({ lang }: PricingPageProps) {
  const pricing = T[lang].pricing;
  const contactHref = buildContactHref(lang);

  return (
    <div>
      <PageHeader title={pricing.title} color="#9c27b0" emoji="🎵" />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 28,
            marginBottom: 48,
          }}
        >
          {pricing.plans.map((plan) => (
            <article
              key={`${plan.name}-${plan.price}`}
              style={{
                background: plan.color,
                borderRadius: 28,
                padding: "36px 32px",
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                }}
              />

              {/* Name — reserves space for up to two lines */}
              <h2
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: 24,
                  color: plan.textColor,
                  margin: 0,
                  minHeight: 60,
                  lineHeight: 1.2,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {plan.name}
              </h2>

              <div
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: 36,
                  color: plan.textColor,
                  lineHeight: 1,
                  marginTop: 6,
                  marginBottom: 4,
                }}
              >
                {plan.price}
                <span style={{ fontSize: 20 }}>{plan.unit}</span>
              </div>

              <div
                style={{
                  height: 2,
                  background: "rgba(255,255,255,0.3)",
                  margin: "16px 0",
                }}
              />

              <div
                style={{
                  fontFamily: "Fredoka, sans-serif",
                  fontSize: 15,
                  color: plan.textColor,
                  opacity: 0.9,
                  marginBottom: 6,
                  minHeight: 24,
                }}
              >
                🕐 {plan.slots}
              </div>
              <div
                style={{
                  fontFamily: "Fredoka, sans-serif",
                  fontSize: 14,
                  color: plan.textColor,
                  opacity: 0.8,
                }}
              >
                📚 {plan.lessons}
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            background: "#fafafa",
            borderRadius: 16,
            padding: "24px 28px",
            marginBottom: 32,
            fontFamily: "Fredoka, sans-serif",
            fontSize: 15,
            color: "#555",
            lineHeight: 1.8,
          }}
        >
          <p style={{ marginBottom: 6 }}>{pricing.note1}</p>
          <p style={{ marginBottom: 6 }}>{pricing.note2}</p>
          <p style={{ margin: 0 }}>{pricing.note3}</p>
        </div>

        <div
          style={{
            background: "#f1f8e9",
            borderRadius: 16,
            padding: "20px 28px",
            marginBottom: 40,
            borderLeft: "4px solid #2e7d32",
          }}
        >
          <p
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: 16,
              color: "#2e7d32",
              margin: 0,
            }}
          >
            📝 {pricing.transcriptionNote}
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <CTAButton
            label={pricing.ctaBtn}
            href={contactHref}
            color="#ec407a"
          />
        </div>
      </div>
    </div>
  );
}

function buildContactHref(lang: Lang) {
  const params = new URLSearchParams();

  if (lang !== "fr") {
    params.set("lang", lang);
  }

  params.set("page", "contact");
  return `/?${params.toString()}`;
}
