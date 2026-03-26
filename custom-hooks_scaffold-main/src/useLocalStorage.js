import { useEffect,useState} from "react";

export default function useLocalStorage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("email");
    if (stored) setEmail(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);
  return { email, setEmail };
}
