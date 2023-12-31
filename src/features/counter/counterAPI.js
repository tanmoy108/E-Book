// A mock function to mimic making an async request for data
export function postLogin(newData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newData }),
    });
    const data = await response.json();
    resolve({ data });
  });
}
