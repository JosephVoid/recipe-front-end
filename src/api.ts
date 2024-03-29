import Axios from "axios";
import { Recipe } from "./types";
import { useQuery } from "react-query";

const axios = Axios.create();

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

export async function getRecipes(): Promise<Recipe[] | null> {
  try {
    let result = await axios.get("/recipes");
    if (result.status !== 200) return null;
    return <Recipe[]>result.data;
  } catch (error) {
    throw error;
  }
}

export async function createRecipes(
  recipe: Omit<Recipe, "id">
): Promise<boolean> {
  let result = await axios.post("/create-recipe", recipe);
  if (result.status !== 200) return false;
  return true;
}

export async function editRecipes(recipe: Recipe, id: string): Promise<any> {
  let result = await axios.patch(`/edit-recipe/${id}`, recipe);
  if (result.status !== 200) return false;
  return result.data;
}

export async function deleteRecipes(id: string): Promise<any> {
  let result = await axios.delete(`/delete-recipe/${id}`);
  if (result.status !== 200) return false;
  return result.data;
}

export async function signOut(): Promise<boolean> {
  let result = await axios.post(`/sign-out`);
  if (result.status !== 200) return false;
  return true;
}

export async function signIn(
  email: string,
  password: string
): Promise<boolean> {
  let result = await axios.post(`/sign-in`, {
    email: email,
    password: password,
  });
  if (result.status !== 200) return false;
  return true;
}

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<boolean> {
  let result = await axios.post(`/sign-up`, {
    name: name,
    email: email,
    password: password,
  });
  if (result.status !== 200) return false;
  return true;
}

export function useGetRecipes() {
  return useQuery("getRecipe", getRecipes);
}
