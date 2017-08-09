interface Person {
  name: string;
  age: number;
}

function sortByName(persons: Person[]) {
  const result = persons.slice(0);
  result.sort((x, y) => {
    return x.name.localeCompare(y.name);
  });
  return result;
}

sortByName([]);
