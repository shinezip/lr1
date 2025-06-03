function createNewUser() {
  const firstNameInput = prompt("Введите имя:");
  const lastNameInput = prompt("Введите фамилию:");

  let _firstName = firstNameInput;
  let _lastName = lastNameInput;

  const newUser = {};

  Object.defineProperty(newUser, "firstName", {
    get: function () {
      return _firstName;
    },
    enumerable: true
  });

  Object.defineProperty(newUser, "lastName", {
    get: function () {
      return _lastName;
    },
    enumerable: true
  });

  newUser.getLogin = function () {
    return (this.firstName[0] + this.lastName).toLowerCase();
  };

  newUser.setFirstName = function (newFirstName) {
    _firstName = newFirstName;
  };

  newUser.setLastName = function (newLastName) {
    _lastName = newLastName;
  };

  return newUser;
}

// Пример использования:
const user = createNewUser();
console.log("Логин пользователя:", user.getLogin());
