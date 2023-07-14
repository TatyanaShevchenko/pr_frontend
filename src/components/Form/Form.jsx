import { Formik, Field, Form } from "formik";

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
      <Form>
        <label htmlFor="subject">subject</label>
        <Field id="subject" name="subject" placeholder="subject" />

        <label htmlFor="priority">priority</label>
        <Field id="priority" name="priority" placeholder="medium" />

        <label htmlFor="status">status</label>
        <Field id="status" name="status" placeholder="to do" />

        <label htmlFor="description">description</label>
        <Field id="description" name="description" placeholder="description" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
