import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);

  useEffect(() => {
    let storedName = localStorage.getItem("name");
    let storedAge = localStorage.getItem("age");
    if (storedName) {
      setName(storedName);
    }
    if (storedAge) {
      setAge(storedAge);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  }, [name, age]);

  return { name, age, setAge, setName };
};

export default useLocalStorage;
