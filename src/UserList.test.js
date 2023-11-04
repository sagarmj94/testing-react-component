import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
import userEvent from "@testing-library/user-event";

test("render one row per user", () => {
  //Render the component
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "same", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  //Find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //Assertion:correct number of rows in the table
  expect(rows).toHaveLength(2);
});
test("render the email and name of each user", () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "same", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
