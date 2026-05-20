import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Status Learn — קורס שיווק WhatsApp Status";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            marginBottom: "32px",
            fontSize: "40px",
          }}
        >
          📱
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
            direction: "rtl",
          }}
        >
          Status Learn
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#a5b4fc",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "800px",
            direction: "rtl",
          }}
        >
          קורס שיווק WhatsApp Status לעסקים ועצמאים
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {["37 שיעורים", "עברית", "Mobile-first"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(99, 102, 241, 0.2)",
                border: "1px solid rgba(99, 102, 241, 0.4)",
                borderRadius: "100px",
                padding: "8px 20px",
                color: "#a5b4fc",
                fontSize: "18px",
                direction: "rtl",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
