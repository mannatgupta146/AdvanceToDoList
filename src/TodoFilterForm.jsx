export function TodoFilterForm({
    name,
    setName,
    hideCompleted,
    setHideCompleted,
  }) {
    return (
      <div className="filter-form">
        <div className="filter-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="hide-completed-group">
          <input
            type="checkbox"
            checked={hideCompleted}
            onChange={e => setHideCompleted(e.target.checked)}
            id="hide-completed"
          />
          <label htmlFor="hide-completed">Hide Completed</label>
        </div>
      </div>
    )
  }
  