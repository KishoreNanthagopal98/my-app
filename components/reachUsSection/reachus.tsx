import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import style from "../reachUsSection/reachus.module.scss";

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required*")
      .matches(/^.{3,255}$/, "Name should be minimum 3 characters.")
      .matches(
        /^[a-zA-Z][a-zA-Z\-\ \.]{2,}$/i,
        "Name should have alphabets only."
      ),
    mobileNumber: yup
      .string()
      .required("Phone Number is Required*")
      .matches(/^[0-9]{10}$/, "Mobile No. should be 10 digits number."),
    comment: yup.string().required("Comment is required*").min(3).max(300),
  })
  .required();

function ReachMe() {
  const [formStatus, setFormStatus] = useState(false);
  const [errorValue, setErrorData] = useState("");

  const { register, handleSubmit, formState } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  function onSubmit(data: any) {
    setErrorData("");

    var bodyFormData = new FormData();
    bodyFormData.append("entry.752584244", data.name);
    bodyFormData.append("entry.1585333184", data.mobileNumber);
    bodyFormData.append("entry.539832214", data.comment);

    axios
      .post(
        "https://docs.google.com/forms/u/1/d/e/1FAIpQLSe3vgR2rNrzQbLHZGjAa8kDjCra3diNh6Bl4xa7g0xQVuOz8Q/formResponse",
        bodyFormData
      )
      .then((response) => {
        setFormStatus(true);
      })
      .catch((error) => {
        setFormStatus(true);
      });
  }

  return (
    <>
      <div id='reachUsAtSection'>
        <div>
          <h1 className={style.title}>Reach me @</h1>
        </div>
        <div className="container">
          <div className={formStatus ? style.formFailure : style.formSuccess}>
            <form
              className={style.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <Form.Group
                className={"mb-3 " + style.formControl}
                controlId="formBasicEmail"
              >
                <Form.Label className={style.formLabel}>Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  className={style.inputField}
                  {...register("name")}
                />
                <div className={errors.name ? style.errorDisplay : ""}>
                  {errors.name?.message}
                </div>
              </Form.Group>
              <Form.Group
                className={"mb-3 " + style.formControl}
                controlId="formBasicEmail"
              >
                <Form.Label className={style.formLabel}>
                  Mobile Number*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Mobile Number"
                  maxLength={10}
                  className={style.inputField}
                  {...register("mobileNumber")}
                />
                <div className={errors.mobileNumber ? style.errorDisplay : ""}>
                  {errors.mobileNumber?.message}
                </div>
              </Form.Group>
              <Form.Group
                className={"mb-3 " + style.formControl}
                controlId="formBasicEmail"
              >
                <Form.Label className={style.formLabel}>
                  Your Thoughts*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type Your Thoughts Here "
                  className={style.inputField}
                  {...register("comment")}
                />
                <div className={errors.comment ? style.errorDisplay : ""}>
                  {errors.comment?.message}
                </div>
              </Form.Group>
              <Button className={style.submitButton} type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className={formStatus ? style.formSuccess : style.formFailure}>
            <div className="register-form-widget-success-block">
              <div className="text-center">
                <svg className={style.successSvg} viewBox="0 0 24 24">
                  <path
                    fill="#9f5252"
                    d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"
                  ></path>
                </svg>
                <br />
                <h4 className={style.submitLineOne}>Thank you for connecting with me !!</h4>
                <h2 className={style.submitLineTwo}>I will get in touch with you shortly</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReachMe;
