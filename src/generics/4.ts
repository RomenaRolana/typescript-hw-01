type User123 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const user: User123 = {
  name: "Firstname",
  surname: "Lastname",
  email: "firstname@gmail.com",
  password: "lastname123",
};
const uptadeUser: Partial<User123> = {
  email: "user@mail.com",
  password: "password123",
};

function createOrUpdateUser<T extends Partial<User123>>(
  user: User123,
  initialValues: T
): User123 {
  return { ...user, ...initialValues };
}

createOrUpdateUser(user, uptadeUser);
