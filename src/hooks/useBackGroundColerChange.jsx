import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBackGroundColerChange = () => {
  const router = useRouter();

  const backGroundColer = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = backGroundColer;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [backGroundColer]);
};
