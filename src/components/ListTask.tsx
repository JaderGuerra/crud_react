import { Trash } from "./Trash";
import "./ListTask.css";
import { Task, useFormStore } from "../store/form-state";
import { useState } from "react";
import { EditTask } from "./EditTask";

export const ListTask = () => {
  const listTask = useFormStore((state) => state.listTask);
  const removeTask = useFormStore((state) => state.removeTask);
  const editTask = useFormStore((state) => state.editTask);
  const { toggleTaskStatus } = useFormStore();

  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  const handleRemoveTask = (taskId: number) => {
    removeTask(taskId);
  };

  const completeTask = (taskId: number) => {
    toggleTaskStatus(taskId);
  };

  const startEditingTask = (taskId: number, initialTask: Task) => {
    setEditingTask(taskId);
    setEditedTask(initialTask);
  };

  const cancelEditingTask = () => {
    setEditingTask(null);
    setEditedTask(null);
  };

  const saveEditedTask = (taskId: number) => {
    if (editedTask) {
      editTask(taskId, editedTask);
      cancelEditingTask();
    }
  };

  return (
    <div>
      <h2>Things to do</h2>
      {listTask.length > 0 ? (
        <ul className="task_list">
          {listTask.map((task) => (
            <li key={task.uuid} className="task_list_item">
              {editingTask === task.uuid ? (
                <div>
                  <input
                    className="saveTask_input"
                    type="text"
                    value={editedTask?.task || ""}
                    onChange={(e) =>
                      setEditedTask({ ...editedTask!, task: e.target.value })
                    }
                  />
                  <br />
                  <input
                    className="saveTask_input"
                    type="text"
                    value={editedTask?.description || ""}
                    onChange={(e) =>
                      setEditedTask({
                        ...editedTask!,
                        description: e.target.value,
                      })
                    }
                  />
                  <button
                    className="saveTask_btn-action saveTask_btn-action-save"
                    onClick={() => saveEditedTask(task.uuid!)}
                  >
                    Guardar
                  </button>
                  <button
                    className="saveTask_btn-action saveTask_btn-action-cancel"
                    onClick={cancelEditingTask}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <label className="task_list_item_label">
                  <div className="flex">
                    <input
                      checked={task.status || false}
                      onChange={() => completeTask(task.uuid!)}
                      type="checkbox"
                      className="task_list_item_input"
                    />
                    <div>
                      <span className={task.status ? "task_complete" : ""}>
                        {task.task}
                      </span>
                      <br />
                      <small className={task.status ? "task_complete" : ""}>
                        {task.description}
                      </small>
                    </div>
                  </div>
                  <div>
                    <button
                      className="no_btn task_list_item_input "
                      onClick={() => startEditingTask(task.uuid!, task)}
                    >
                      <EditTask />
                    </button>
                    <button
                      className="no_btn"
                      onClick={() => handleRemoveTask(task.uuid!)}
                    >
                      <Trash />
                    </button>
                  </div>
                </label>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No hay datos</p>
      )}
    </div>
  );
};
