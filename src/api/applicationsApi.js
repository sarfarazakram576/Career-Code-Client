export const myApplicationPromise = (email) => {
  return fetch(`https://career-code-server-phi.vercel.app/applications?email=${email}`).then(
    (res) => res.json()
  );
};
