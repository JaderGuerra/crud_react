import "./HomeScreen.css";
import { SaveTask, ListTask } from "../components";

export const HomeScreen = () => {
  return (
    <div className="content">
      <SaveTask />
      <ListTask />
    </div>
  );
};
