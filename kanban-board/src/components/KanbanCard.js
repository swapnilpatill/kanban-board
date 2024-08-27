import React from 'react';

const KanbanCard = ({ ticket, users }) => {
    console.log(users)
    return (
        <div className="kanban-card">
            <span className='kcId'>{ticket.id}</span>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <span className='kbtag'>{ticket.tag}</span>
            {/* <span className='UserName'>{users}</span> */}
        </div>
    );
};

export default KanbanCard;