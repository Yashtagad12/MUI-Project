import React, { useState, useMemo } from 'react';
import { emails } from '../Data/emails';
import { List, Typography } from '@mui/material';
import EmailListItem from '../Components/EmailListItem';
import ToolbarActions from '../Components/ToolbarActions';
import PaginationComp from '../Components/PaginationComponent';



const Inbox = ({ searchTerm }) => {

    const inboxEmails = useMemo(() =>
        emails.filter(email => email.folder === 'inbox'), []
    );

    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(inboxEmails.length / itemsPerPage);

    const displayedEmails = useMemo(() => {
        let list = inboxEmails;
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            list = list.filter(
                e => e.subject.toLowerCase().includes(term) ||
                    e.from.toLowerCase().includes(term)
            );
        }
        const start = (page - 1) * itemsPerPage;
        return list.slice(start, start + itemsPerPage);
    }, [inboxEmails, page, searchTerm]);

    const handleEmailClick = (id) => {
        // Navigate to detail (using window.location for simplicity or use
        // useNavigate in real code)
        window.location.href = `/email/${id}`;
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Inbox
            </Typography>
            <ToolbarActions onRefresh={() => console.log('Refreshed')} />
            <List>
                {
                    displayedEmails.map(email => (
                        <EmailListItem
                            key={email.id}
                            email={email}
                            onClick={handleEmailClick}
                        />
                    ))
                }
            </List>
            <PaginationComp page={page} count={totalPages} onChange={setPage} />
        </div >
    );

};

export default Inbox;