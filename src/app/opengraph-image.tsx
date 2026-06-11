import { ImageResponse } from "next/og";
import { profile, brand } from "@/data/site";

export const alt = `${profile.name} | Full Stack & AI Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#07070b",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(124,77,255,0.35), transparent 45%), radial-gradient(circle at 100% 100%, rgba(34,211,238,0.28), transparent 45%)",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#fff",
              background: "linear-gradient(135deg,#6d34f5,#22d3ee)",
            }}
          >
            HR
          </div>
          <div style={{ fontSize: 26, color: "#9a9aae" }}>{profile.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1, lineHeight: 1.05 }}>{profile.name}</div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              background: "linear-gradient(120deg,#b3a3ff,#22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Full Stack Engineer · AI Application Developer
          </div>
          <div style={{ fontSize: 27, color: "#9a9aae", maxWidth: 920 }}>{brand.tagline}</div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["React", "Next.js", "TypeScript", "Node.js", "OpenAI", "RAG"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 22,
                color: "#cfcfe0",
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
