import { useForm } from "react-hook-form";
import { useFormStore } from "../store/form-state";
import "./SaveTask.css";

type FormInputs = {
  task: string;
  description: string;
};

export const SaveTask = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const addNewTask = useFormStore((state) => state.addNewTask);
  

  const onSubmit = (myForm: FormInputs) => {
    const newTask = {
      uuid: Date.now(),
      task: myForm.task,
      description: myForm.description,
    };
    addNewTask(newTask);
  };

  return (
    <div className="saveTask">
      <h2>SaveTask</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="saveTask_form"
        autoComplete="none"
      >
        <input
          required
          className="saveTask_input"
          type="text"
          placeholder="Create new task"
          {...register("task", { required: true })}
        />
        <input
          required
          className="saveTask_input"
          type="text"
          placeholder="Add a description"
          {...register("description", { required: true })}
        />
        <button className="saveTask_btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
