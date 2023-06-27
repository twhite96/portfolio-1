import { useEffect, useState, useRef } from "react";

export function useFootnotes() {
  const [footnotes, setFootnotes] = useState({});
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    setFootnotes({ footnotes: "footnotes"});
  }, []);
  return footnotes;
}