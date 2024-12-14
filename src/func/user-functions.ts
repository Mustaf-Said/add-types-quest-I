type User = {
  age: number;
  name: string;
  hobby: string[];
};

// MedelAge för users
export const averageAge = (allUsers: User[]) => {
  let allAges = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return allAges / allUsers.length;
};

//Medelvärde för AllHobies
export const averageNumberOfHobbies = (allUsers: User[]) => {
  let AllHobbies = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return AllHobbies / allUsers.length;
};

//Function med flest hobbies har Y stycken hobbies

/* let personMedMaxHobbies = ''; */
export const flestOfHobbies = (allUsers: User[]) => {
  let maxHobies = 0;
  allUsers.forEach((u) => {
    if (u.hobby.length > maxHobies) {
      maxHobies = u.hobby.length;
    }
  });
  return maxHobies;
};

// skriv ut "Den äldsta personen är A och den yngsta är B".

export const getOldPerson = (array: User[]) => {
  let oldPerson = array[0];
  array.forEach((person) => {
    if (person.age > oldPerson.age) {
      oldPerson = person;
    }
  });
  return oldPerson.name;
};

export const getYoungPerson = (array: User[]) => {
  let youngPerson = array[0];
  array.forEach((person) => {
    if (person.age < youngPerson.age) {
      youngPerson = person;
    }
  });
  return youngPerson.name;
};
