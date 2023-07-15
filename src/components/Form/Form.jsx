import { Formik, Field, Form } from "formik";
import styles from "./index.module.scss";
import external from "../Button/index.module.scss";
import classNames from "classnames/bind";

export const MyForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        subject: "",
        priority: "medium",
        status: "to do",
        description: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="subject" className={styles.label}>
          subject*
        </label>
        <Field
          required
          id="subject"
          className={styles.field}
          name="subject"
          placeholder="subject"
        />

        <label htmlFor="priority" className={styles.label}>
          priority*
        </label>
        <Field
          required
          id="priority"
          className={styles.field}
          name="priority"
          placeholder="medium"
        />

        <label htmlFor="status" className={styles.label}>
          status*
        </label>
        <Field
          required
          id="status"
          className={styles.field}
          name="status"
          placeholder="to do"
        />

        <label htmlFor="description" className={styles.label}>
          description*
        </label>
        <Field
          required
          id="description"
          className={styles.field}
          name="description"
          placeholder="description"
        />
        <button
          type="submit"
          className={classNames(styles.button, external.button)}
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
