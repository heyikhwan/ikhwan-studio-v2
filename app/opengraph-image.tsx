import { ImageResponse } from "next/og";
import { siteName } from "./lib/site";

export const alt = `${siteName} | Full Stack Developer`;
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
                    justifyContent: "center",
                    padding: "0 96px",
                    background: "#111827",
                    color: "#e2e8f0",
                }}
            >
                <div style={{ fontSize: 76, fontWeight: 700 }}>{siteName}</div>
                <div style={{ fontSize: 40, marginTop: 24, color: "#7dd3fc" }}>
                    Full Stack Web Developer
                </div>
                <div style={{ fontSize: 28, marginTop: 32, color: "#94a3b8" }}>
                    Laravel · ReactJS · NextJS
                </div>
            </div>
        ),
        size
    );
}
