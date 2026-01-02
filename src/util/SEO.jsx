import { useEffect } from "react";

const DEFAULTS = {
  title: "Simpolo Trading",
  description:
    "Premium tiles, slabs, marble, granite, sanitary ware, and bathroom fittings.",
};

export function useSEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  keywords = "",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
  }, [title, description, keywords]);
}
