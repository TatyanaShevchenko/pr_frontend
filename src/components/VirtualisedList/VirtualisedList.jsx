import React, { useState, useEffect } from "react";

export const VirtualisedList = (props) => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // full list height
  const innerHeight = numItems * itemHeight;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const items = [];

  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%",
        },
      })
    );
  }

  return (
    <div style={{ overflowY: "scroll" }}>
      <div style={{ position: "relative", height: `${innerHeight}px` }}>
        {items}
      </div>
    </div>
  );
};
