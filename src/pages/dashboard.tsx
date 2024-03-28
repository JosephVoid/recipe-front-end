import NavBar from "../components/nav-bar";
import { Link, Route, Switch } from "wouter";
import Recipes from "./recipes";
import CreateRecipes from "./create-recipes";
import Shopping from "./shopping";
import EditRecipes from "./edit-recipes";
import SignUp from "./signup";

export default function Dashboard() {
  return (
    <div className="w-full">
      <NavBar />
      <Switch>
        <Route path="/" component={Recipes} />
        <Route path="/recipes" nest>
          <Route path="/" component={Recipes} />
          <Route path="/create-recipes" component={CreateRecipes} />
          <Route path="/edit-recipes" component={EditRecipes} />
        </Route>
        <Route path="/shopping" component={Shopping} />
        <Route path="/signup" component={SignUp} />
        <Route>404: No such page</Route>
      </Switch>
    </div>
  );
}
