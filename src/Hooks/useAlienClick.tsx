import React, { useEffect, useState } from "react";

const useAlienClick = (ref: React.RefObject<any>, active: boolean) => {
  const [outsideClicked, setOutsideClicked] = useState<boolean>(false);
  const handleOutsideClick = (e: any) => {
    if (ref!.current && !ref!.current.contains(e.target)) {
      setOutsideClicked(true);
    } else {
      setOutsideClicked(false);
    }
  };
  useEffect(() => {
    if (active) {
      setOutsideClicked(false);
    }
  }, [active]);

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return outsideClicked;
};

export default useAlienClick;
