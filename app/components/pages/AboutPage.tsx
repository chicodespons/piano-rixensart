import Image from "next/image";
import { PageHeader, FeatureList, CTAButton } from "../shared";
import { T, type Lang } from "../../lib/translations";

interface AboutPageProps {
  lang: Lang;
}

export default function AboutPage({ lang }: AboutPageProps) {
  const translations = T[lang];
  const about = translations.about;
  const contact = translations.contact;
  const ui = translations.ui;

  const params = new URLSearchParams();
  if (lang !== "fr") {
    params.set("lang", lang);
  }
  params.set("page", "contact");

  return (
    <div>
      <PageHeader
        title={about.title}
        color="#f4d03f"
        textColor="#333"
        emoji="🎹"
      />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Image
              src="/ivana.jpg"
              alt={ui.portraitAlt}
              width={280}
              height={280}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "6px solid #f4d03f",
                boxShadow: "0 10px 40px rgba(244,208,63,0.4)",
                marginBottom: 32,
              }}
            />
            <div
              style={{
                background: "white",
                borderRadius: 20,
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                textAlign: "left",
                marginBottom: 32,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontSize: 22,
                  color: "#333",
                  marginBottom: 14,
                }}
              >
                ⭐ {about.specialtiesTitle}
              </h2>
              <FeatureList
                features={about.specialties}
                color="#f4d03f"
                checkColor="#333"
              />
            </div>
          </div>
          <div>
            {about.bio.split("\n\n").map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  fontFamily: "Fredoka, sans-serif",
                  fontSize: 18,
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {paragraph}
              </p>
            ))}
            <div style={{ marginTop: 32 }}>
              <CTAButton
                label={contact.submitBtn}
                href={`/?${params.toString()}`}
                color="#f4d03f"
                textColor="#333"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
