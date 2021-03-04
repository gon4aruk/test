function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { renderTasks } from "./renderTasks.js";
import { deleteTask, getTasksList, updateTask } from "./tasksGateway.js";

const createUpdatedTask = (event, tasksList, taskId) => {
  const _tasksList$find = tasksList.find(task => task.id === taskId),
        {
    done
  } = _tasksList$find,
        rest = _objectWithoutProperties(_tasksList$find, ["done"]);

  const updatedTask = _objectSpread(_objectSpread({}, rest), {}, {
    timeOfChange: new Date(),
    done: event.target.checked
  });

  return updatedTask;
};

const onCheckboxClick = event => {
  const taskId = event.target.dataset.id;
  getTasksList().then(tasksList => createUpdatedTask(event, tasksList, taskId)).then(updatedTask => updateTask(taskId, updatedTask)).then(() => renderTasks());
};

const onDeleteBtnClick = event => {
  const taskId = event.target.dataset.id;
  deleteTask(taskId).then(() => renderTasks());
};

export const onListClick = event => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");
  const isDeleteBtn = event.target.classList.contains("list__item_delete-btn");

  if (isCheckbox) {
    onCheckboxClick(event);
  } else if (isDeleteBtn) {
    onDeleteBtnClick(event);
  }
};