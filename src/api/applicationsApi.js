export const myApplicationPromise = (email) => {
  return fetch(`https://career-code-server-phi.vercel.app/applications?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
