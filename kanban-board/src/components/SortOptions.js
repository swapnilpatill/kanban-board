import React from 'react';

const SortOptions = ({ onGroupingChange, onSortChange }) => {
    return (
        <div className="sort-options">
            <label>
                Group By:
                <select onChange={e => onGroupingChange(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </label>
            <label>
                Sort By:
                <select onChange={e => onSortChange(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </label>
        </div>
    );
};

export default SortOptions;