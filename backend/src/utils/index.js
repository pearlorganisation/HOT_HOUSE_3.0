

// envAccess -- function to access the environment variables
export const envAccess = (field) => {
  return process.env[field];
};
