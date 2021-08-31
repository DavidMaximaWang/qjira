import { useEffect, useRef } from "react";

export const useDocumentTitle = (title: string, keepOnUnmount?: boolean) => {
  const oldTitle = useRef(document.title).current;
  //old title while loading
  //after loaded, new title
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
