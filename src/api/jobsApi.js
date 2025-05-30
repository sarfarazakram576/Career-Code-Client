export const jobsCreatedByPromise = (email) => {
  return fetch(`https://career-code-server-phi.vercel.app/jobs/applications?email=${email}`).then((res) =>
    res.json()
  );
};
