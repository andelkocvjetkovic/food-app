import { extend } from "vee-validate";
import { required, alpha, email, max } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters",
});
extend("email", {
  ...email,
  message: "This field must have valid email address",
});
extend("positive", (value) => {
  if (value >= 0) {
    return true;
  }

  return "This field must have positive number of guests";
});
extend("minmax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ["min", "max"],
  message: "The {_field_} must contain at least 3 character",
});
extend("min", {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ["length"],
  message: "The {_field_} must contain at least 3 characters",
});
extend("between", {
  validate(value, { min, max }) {
    return Number(value) >= min && Number(value) <= max;
  },
  params: ["min", "max"],
  message: "The {_field_} must be between {min} - {max}",
});
extend("max", {
  ...max,
  message: "Your {_field_} cannot be longer then 25 characters",
});
