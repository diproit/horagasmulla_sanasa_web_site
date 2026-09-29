import React from "react";

export interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Safely renders a Schema.org JSON-LD script tag with HTML entity escaping
 * to prevent XSS attacks or premature script termination.
 */
export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;

  // Escaping `<` characters to `\u003c` ensures that any `</script>` string
  // inside properties does not prematurely break out of the script tag.
  const jsonString = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export default JsonLd;
