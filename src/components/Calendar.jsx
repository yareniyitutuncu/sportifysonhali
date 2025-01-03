import React, { useState } from "react";
import './Calendar.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Geri ok ikonu için react-icons kullanıyoruz
import { FaTrashAlt } from 'react-icons/fa'; // Çöp kutusu ikonu için react-icons kullanıyoruz
import sportifyLogo from "../assets/sportifyicon.png"; // Logo dosyasını import et

const Calendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(7); // Varsayılan olarak Ağustos
  const [selectedYear, setSelectedYear] = useState(2024); // Varsayılan olarak 2024
  const [todoList, setTodoList] = useState({});
  const [newTask, setNewTask] = useState("");
  const [addingTask, setAddingTask] = useState(false);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = [2024, 2025, 2026, 2027, 2028];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setAddingTask(true);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTodoList({
        ...todoList,
        [`${selectedYear}-${selectedMonth + 1}-${selectedDate}`]: [
          ...(todoList[`${selectedYear}-${selectedMonth + 1}-${selectedDate}`] || []),
          newTask,
        ],
      });
      setNewTask("");
      setAddingTask(false);
    }
  };

  const handleDeleteTask = (task, date) => {
    const updatedTasks = todoList[date].filter((item) => item !== task);
    setTodoList({
      ...todoList,
      [date]: updatedTasks.length > 0 ? updatedTasks : undefined,
    });
  };

  const handleBackButtonClick = () => {
    navigate("/home"); // Geri butonuna tıklandığında home sayfasına yönlendir
  };

  const renderTodoList = () => {
    if (!selectedDate) return null;
    const taskKey = `${selectedYear}-${selectedMonth + 1}-${selectedDate}`;
    const tasks = todoList[taskKey];

    return (
      <div className="todo-section">
        <h2>To-Do List for {months[selectedMonth]} {selectedDate}</h2>
        {tasks ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{" "}
                <button
                  onClick={() => handleDeleteTask(task, taskKey)}
                  className="delete-task-button"
                >
                  <FaTrashAlt size={16} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks for this day.</p>
        )}
        <div className="add-task-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task"
            className="todo-input"
          />
          <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    );
  };

  const renderCalendarCells = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const cells = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const taskKey = `${selectedYear}-${selectedMonth + 1}-${i}`;
      const isSelected = selectedDate === i;
      const hasTasks = todoList[taskKey]?.length > 0;

      cells.push(
        <div
          key={i}
          className={`calendar-cell ${isSelected ? "selected" : ""} ${hasTasks ? "has-tasks" : ""}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="calendar-container">
      {/* Header */}
      <div className="header">
        <img src={sportifyLogo} alt="Sportify Logo" className="logo" /> {/* Logo sol tarafta */}
        <button className="back-button-small" onClick={() => navigate("/home")}>
            ←
          </button>
      </div>

      <div className="calendar-body">
        <div className="calendar">
          {renderCalendarCells()}
        </div>

        {renderTodoList()}
      </div>
    </div>
  );
};

export default Calendar;
