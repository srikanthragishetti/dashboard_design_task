
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/tasksSlice";
import { FiFilter, FiCalendar, FiSearch } from "react-icons/fi";

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.tasks.filters);

  const toggleToday = () => {
    // Toggle Today filter: if already Today -> set All
    dispatch(setFilters({ due: filters.due === "Today" ? "All" : "Today" }));
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Left buttons */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
          <FiFilter className="w-4 h-4" /> Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
          <FiCalendar className="w-4 h-4" /> Today
        </button>

        {/* Today toggle button */}
        <button
          onClick={toggleToday}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border shadow-sm ${
            filters.due === "Today" ? "bg-primary text-white" : "bg-white hover:bg-gray-50"
          }`}
        >
          <FiCalendar className="w-4 h-4" /> Today
        </button>

      </div>


      {/* Right side: search + filters */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Search input with icon */}
        <div className="relative flex-1 md:w-64">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search tasks..."
            value={filters.q}
            onChange={(e) => dispatch(setFilters({ q: e.target.value }))}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category dropdown */}
        <select
          value={filters.category}
          onChange={(e) => dispatch(setFilters({ category: e.target.value }))}
          className="px-3 py-2 rounded-lg bg-white border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="All">All Categories</option>
          <option value="Design">Design</option>
          <option value="Research">Research</option>
          <option value="Work">Work</option>
        </select>

        {/* Priority dropdown */}
        <select
          value={filters.priority}
          onChange={(e) => dispatch(setFilters({ priority: e.target.value }))}
          className="px-3 py-2 rounded-lg bg-white border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* Due-date dropdown for more options */}
        <select
          value={filters.due}
          onChange={(e) => dispatch(setFilters({ due: e.target.value }))}
          className="px-3 py-2 rounded-lg bg-white border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="All">All Dates</option>
          <option value="Today">Today</option>
          <option value="Overdue">Overdue</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>

      
    </div>
  );
}


