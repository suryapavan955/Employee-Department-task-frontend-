import { mockEmployees } from "./mockData";

// Instead of API, return mock data
export const getEmployees = async () => {
  return mockEmployees;
};