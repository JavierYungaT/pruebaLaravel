import { useState, useMemo } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Leer documentación', done: false },
    { id: 2, title: 'Diseñar UI básica', done: true },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [filter, setFilter] = useState('all'); // all | pending | done

  const filtered = useMemo(() => {
    if (filter === 'pending') return tasks.filter(t => !t.done);
    if (filter === 'done') return tasks.filter(t => t.done);
    return tasks;
  }, [tasks, filter]);

  const addTask = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    setTasks(prev => [{ id: Date.now(), title, done: false }, ...prev]);
    setNewTitle('');
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const isEmpty = filtered.length === 0;

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    const pending = total - done;
    return { total, done, pending };
  }, [tasks]);

  return (

    // <div className="container">
    //   <header className="header">
    //     <h1>📋 Lista de Tareas</h1>
    //     <div className="stats-cards">
    //       <div className="card total">
    //         <span className="number">{stats.total}</span>
    //         <span className="label">Total</span>
    //       </div>
    //       <div className="card done">
    //         <span className="number">{stats.done}</span>
    //         <span className="label">Completadas</span>
    //       </div>
    //       <div className="card pending">
    //         <span className="number">{stats.pending}</span>
    //         <span className="label">Pendientes</span>
    //       </div>
    //     </div>
    //   </header>

    //   <form className="add-form" onSubmit={addTask}>
    //     <input
    //       type="text"
    //       placeholder="Nueva tarea..."
    //       value={newTitle}
    //       onChange={e => setNewTitle(e.target.value)}
    //       aria-label="Nueva tarea"
    //     />
    //     <button type="submit">Agregar</button>
    //   </form>

    //   <div className="filters">
    //     <button
    //       className={filter === 'all' ? 'active' : ''}
    //       onClick={() => setFilter('all')}
    //     >
    //       Todas
    //     </button>
    //     <button
    //       className={filter === 'pending' ? 'active' : ''}
    //       onClick={() => setFilter('pending')}
    //     >
    //       Pendientes
    //     </button>
    //     <button
    //       className={filter === 'done' ? 'active' : ''}
    //       onClick={() => setFilter('done')}
    //     >
    //       Completadas
    //     </button>
    //   </div>

    //   <section className="list">
    //     {isEmpty ? (
    //       <div className="empty">
    //         {filter === 'done'
    //           ? '✅ No hay tareas completadas.'
    //           : filter === 'pending'
    //             ? '📌 No hay tareas pendientes.'
    //             : '📂 La lista de tareas está vacía.'}
    //       </div>
    //     ) : (
    //       filtered.map(task => (
    //         <article key={task.id} className={`item ${task.done ? 'done' : ''}`}>
    //           <label className="item-main">
    //             <input
    //               type="checkbox"
    //               checked={task.done}
    //               onChange={() => toggleTask(task.id)}
    //             />
    //             <span>{task.title}</span>
    //           </label>
    //           <button
    //             className="delete"
    //             onClick={() => removeTask(task.id)}
    //           >
    //             Eliminar
    //           </button>
    //         </article>
    //       ))
    //     )}
    //   </section>

    //   <footer className="footer">
    //     <small>Prueba Front-End</small>
    //   </footer>
    // </div>



    <div className="container">

      <div className="container">
        <header className="header">
          <h1>📋 Lista de Tareas</h1>
          <small>Gestión de tus tareas de manera sencilla</small>
        </header>
      </div>

      <div className="dashboard">
        <div className="stats-column">

          <div className="card total">
            <span className="number">{stats.total}</span>
            <span className="label">Total</span>
          </div>

          <div className="card done">
            <span className="number">{stats.done}</span>
            <span className="label">Completadas</span>
          </div>

          <div className="card pending">
            <span className="number">{stats.pending}</span>
            <span className="label">Pendientes</span>
          </div>
        </div>



        <div className="content-column">

          <form className="add-form" onSubmit={addTask}>
            <input
              type="text"
              placeholder="Nueva tarea..."
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
            <button type="submit">Agregar</button>
          </form>

          <div className="filters">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >Todas</button>
            <button
              className={filter === 'pending' ? 'active' : ''}
              onClick={() => setFilter('pending')}
            >Pendientes</button>
            <button
              className={filter === 'done' ? 'active' : ''}
              onClick={() => setFilter('done')}
            >Completadas</button>
          </div>

          <section className="list">
            {isEmpty ? (
              <div className="empty">
                {filter === 'done'
                  ? '✅ No hay tareas completadas.'
                  : filter === 'pending'
                    ? '📌 No hay tareas pendientes.'
                    : '📂 La lista de tareas está vacía.'}
              </div>
            ) : (
              filtered.map(task => (
                <article key={task.id} className={`item ${task.done ? 'done' : ''}`}>
                  <label className="item-main">
                    <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                    <span>{task.title}</span>
                  </label>
                  <button className="delete" onClick={() => removeTask(task.id)}>Eliminar</button>
                </article>
              ))
            )}
          </section>
        </div>
      </div>

      <footer className="footer">
        <small>Prueba Front-End</small>
      </footer>
    </div>


  );
}
