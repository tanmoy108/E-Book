export function postSignup(newData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData ),
    });
    const data = await response.json();
    resolve({ data });
  });
}
