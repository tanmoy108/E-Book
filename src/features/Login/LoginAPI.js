export function postLogin(newData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    console.log(data)
    localStorage.setItem("token",data)
    resolve({ data });
  });
}
