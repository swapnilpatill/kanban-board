import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanColumn from './KanbanColumn';
import SortOptions from './SortOptions';

const KanbanBoard = () => {
    const [tickets, setTickets] = useState([]);
    const [grouping, setGrouping] = useState('status'); // default grouping by status
    const [sortOption, setSortOption] = useState('priority'); // default sorting by priority

    useEffect(() => {
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleGroupingChange = (newGrouping) => {
        setGrouping(newGrouping);
    };

    const handleSortChange = (newSortOption) => {
        setSortOption(newSortOption);
    };

    const sortedTickets = [...tickets].sort((a, b) => {
        if (sortOption === 'priority') {
            return b.priority - a.priority;
        } else if (sortOption === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    const groupedTickets = sortedTickets.reduce((acc, ticket) => {
        const key = ticket[grouping] || 'No Group';
        if (!acc[key]) acc[key] = [];
        acc[key].push(ticket);
        return acc;
    }, {});

    return (
        <div>
            <SortOptions 
                onGroupingChange={handleGroupingChange} 
                onSortChange={handleSortChange} 
            />
            <div className="kanban-board">
                {Object.keys(groupedTickets).map(group => (
                    <KanbanColumn key={group} title={group} tickets={groupedTickets[group]} />
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;