import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

// test('renders learn react link', () => {
//   // 1) Render the component we want to test
//   render(<App />);

//   // 2) Find the element we want to test
//   const linkElement = screen.getByText(/learn react/i);

//   // 3) Assert that the element exists
//   expect(linkElement).toBeInTheDocument();
// });

// beforeEach(() => render(<App />));

// test("input should be initially empty", () => {
//   const emailInputElement = screen.getByRole("textbox");
//   const passwordInputElement = screen.getByLabelText("Password");
//   const confirmpasswordInputElement = screen.getByLabelText("Confirm Password");
//   expect(emailInputElement.value).toBe("");
//   expect(passwordInputElement.value).toBe("");
//   expect(confirmpasswordInputElement.value).toBe("");
// });

// test("should be able to type an email", () => {
//   const emailInputElement = screen.getByRole("textbox", { name: /email/i });
//   userEvent.type(emailInputElement, "sbdadhaniya@gmail.com");
//   expect(emailInputElement.value).toBe("sbdadhaniya@gmail.com");
// });

// test("should be able to type a password", () => {
//   const passwordInputElement = screen.getByLabelText("Password");
//   userEvent.type(passwordInputElement, "password!");
//   expect(passwordInputElement.value).toBe("password!");
// });

// test("should be able to type a confirm password", () => {
//   const confirmpasswordInputElement = screen.getByLabelText("Confirm Password");
//   userEvent.type(confirmpasswordInputElement, "password!");
//   expect(confirmpasswordInputElement.value).toBe("password!");
// });

// test("Should show email error message on invalid email", () => {
//   const emailErrorElement = screen.queryByText(/Invalid email/i);
//   const emailInputElement = screen.getByRole("textbox", { name: /email/i });
//   const submitBtnElement = screen.getByRole("button", { name: /submit/i });
//   expect(emailErrorElement).not.toBeInTheDocument();
//   userEvent.type(emailInputElement, "sbdadhaniya@gmail");
//   userEvent.click(submitBtnElement);
//   const emailErrorElementAgain = screen.queryByText(/Invalid email/i);
//   expect(emailErrorElementAgain).toBeInTheDocument();
// });

// test("Should show password error if password is less than 5 characters", () => {
//   const emailInputElement = screen.getByRole("textbox", { name: /email/i });
//   const passwordInputElement = screen.getByLabelText("Password");
//   const passwordErrorElement = screen.queryByText(
//     /Password must be at least 5 characters/i
//   );
//   const submitBtnElement = screen.getByRole("button", { name: /submit/i });
//   userEvent.type(emailInputElement, "sbdadhaniya@gmail.com");
//   expect(passwordErrorElement).not.toBeInTheDocument();
//   userEvent.type(passwordInputElement, "123");
//   userEvent.click(submitBtnElement);
//   const passwordErrorElementAgain = screen.queryByText(
//     /Password must be at least 5 characters/i
//   );
//   expect(passwordErrorElementAgain).toBeInTheDocument();
// });

// test("Should show confirm password error if password error if passwords don't match", () => {
//   const emailInputElement = screen.getByRole("textbox", { name: /email/i });
//   const passwordInputElement = screen.getByLabelText("Password");
//   const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
//   const confirmPasswordErrorElement = screen.queryByText(
//     /Passwords do not match/i
//   );
//   const submitBtnElement = screen.getByRole("button", { name: /submit/i });

//   userEvent.type(emailInputElement, "sbdadhaniya@gmail.com");
//   userEvent.type(passwordInputElement, "12345");
//   expect(confirmPasswordErrorElement).not.toBeInTheDocument();
//   userEvent.type(confirmPasswordInputElement, "123456");
//   userEvent.click(submitBtnElement);
//   const ConfirmPasswordErrorElementAgain = screen.queryByText(
//     /Passwords do not match/i
//   );
//   expect(ConfirmPasswordErrorElementAgain).toBeInTheDocument();
// });

// test("Should show no error message if every input is valid", () => {
//   const emailInputElement = screen.getByRole("textbox", { name: /email/i });
//   const passwordInputElement = screen.getByLabelText("Password");
//   const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
//   const submitBtnElement = screen.getByRole("button", { name: /submit/i });
//   userEvent.type(emailInputElement, "sbdadhaniya@gmail.com");
//   userEvent.type(passwordInputElement, "123456");
//   userEvent.type(confirmPasswordInputElement, "123456");
//   userEvent.click(submitBtnElement);
//   const emailErrorElement = screen.queryByText(/Invalid email/i);
//   const passwordErrorElement = screen.queryByText(
//     /Password must be at least 5 characters/i
//   );
//   const ConfirmPasswordErrorElementAgain = screen.queryByText(
//     /Password must be at least 5 characters/i
//   );
//   expect(emailErrorElement).not.toBeInTheDocument();
//   expect(passwordErrorElement).not.toBeInTheDocument();
//   expect(ConfirmPasswordErrorElementAgain).not.toBeInTheDocument();
// });

//

beforeEach(() => render(<App />));
const typeIntoForm = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmpasswordInputElement = screen.getByLabelText("Confirm Password");
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmpasswordInputElement, confirmPassword);
  }
  return {
    emailInputElement,
    passwordInputElement,
    confirmpasswordInputElement,
  };
};

test("input should be initially empty", () => {
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmpasswordInputElement = screen.getByLabelText("Confirm Password");
  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmpasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  const { emailInputElement } = typeIntoForm({
    email: "sbdadhaniya@gmail.com",
  });
  expect(emailInputElement.value).toBe("sbdadhaniya@gmail.com");
});

test("should be able to type a password", () => {
  const { passwordInputElement } = typeIntoForm({ password: "password!" });
  expect(passwordInputElement.value).toBe("password!");
});

test("should be able to type a confirm password", () => {
  const { confirmpasswordInputElement } = typeIntoForm({
    confirmPassword: "password!",
  });
  expect(confirmpasswordInputElement.value).toBe("password!");
});

test("Should show email error message on invalid email", () => {
  const emailErrorElement = screen.queryByText(/Invalid email/i);
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });
  expect(emailErrorElement).not.toBeInTheDocument();
  typeIntoForm({ email: "sbdadhaniya@gmail" });
  userEvent.click(submitBtnElement);
  const emailErrorElementAgain = screen.queryByText(/Invalid email/i);
  expect(emailErrorElementAgain).toBeInTheDocument();
});

test("Should show password error if password is less than 5 characters", () => {
  const passwordErrorElement = screen.queryByText(
    /Password must be at least 5 characters/i
  );
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });
  typeIntoForm({ email: "sbdadhaniya@gmail.com" });
  expect(passwordErrorElement).not.toBeInTheDocument();
  typeIntoForm({ password: "123" });
  userEvent.click(submitBtnElement);
  const passwordErrorElementAgain = screen.queryByText(
    /Password must be at least 5 characters/i
  );
  expect(passwordErrorElementAgain).toBeInTheDocument();
});

test("Should show confirm password error if password error if passwords don't match", () => {
  const confirmPasswordErrorElement = screen.queryByText(
    /Passwords do not match/i
  );
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });

  typeIntoForm({ email: "sbdadhaniya@gmail.com", password: "12345" });
  expect(confirmPasswordErrorElement).not.toBeInTheDocument();
  typeIntoForm({ confirmPassword: "123456" });
  userEvent.click(submitBtnElement);
  const ConfirmPasswordErrorElementAgain = screen.queryByText(
    /Passwords do not match/i
  );
  expect(ConfirmPasswordErrorElementAgain).toBeInTheDocument();
});

test("Should show no error message if every input is valid", () => {
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });
  typeIntoForm({ email: "sbdadhaniya@gmail.com", password: "12345", confirmPassword: "12345" });
  userEvent.click(submitBtnElement);
  const emailErrorElement = screen.queryByText(/Invalid email/i);
  const passwordErrorElement = screen.queryByText(
    /Password must be at least 5 characters/i
  );
  const ConfirmPasswordErrorElementAgain = screen.queryByText(
    /Password must be at least 5 characters/i
  );
  expect(emailErrorElement).not.toBeInTheDocument();
  expect(passwordErrorElement).not.toBeInTheDocument();
  expect(ConfirmPasswordErrorElementAgain).not.toBeInTheDocument();
});
