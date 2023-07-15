import React from "react";
import classNames from "classnames/bind";

import styles from "./index.module.scss";

export const Button = React.forwardRef(({ ...props }, ref) => {
  const { classname, text } = props;

  return (
    <button
      className={classNames(styles.button, classname)}
      ref={ref}
      {...props}
    >
      {text}
    </button>
  );
});
