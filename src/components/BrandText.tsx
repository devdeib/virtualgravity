/**
 * Renders text while always keeping the brand name "Virtual Gravity" in
 * Clash Display, even inside Arabic/RTL copy where the surrounding text
 * switches to IBM Plex Sans Arabic.
 */
export default function BrandText({ text }: { text: string }) {
  const parts = text.split(/(Virtual Gravity)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "Virtual Gravity" ? (
          <span className="brand" key={i}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
