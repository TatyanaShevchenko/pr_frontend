import styles from "./index.module.scss";
import classNames from "classnames/bind";
import React from "react";

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
