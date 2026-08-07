export const emails = [
    {
        id: 1,
        folder: 'inbox',
        from: 'Alice Johnson',
        subject: 'Meeting on Thursday',
        body: 'Hi there, just confirming our meeting on Thursday at 3pm...',
        date: '2026-08-01',
        starred: false,
    },
    {
        id: 2,
        folder: 'inbox',
        from: 'Bob Smith',
        subject: 'Project Update',
        body: 'The latest project updates are attached in the document...',
        date: '2026-08-02',
        starred: true,
    },
    {
        id: 3,
        folder: 'sent',
        from: 'You (Self)',
        subject: 'RE: Meeting on Thursday',
        body: 'Looking forward to it. I will prepare the report beforehand.',
        date: '2026-08-01',
        starred: false,
    },
    {
        id: 4,
        folder: 'spam',
        from: 'John Doe',
        subject: 'You won a prize!',
        body: 'Congratulations! You have won a prize! Click here to claim it.',
        date: '2026-08-03',
        starred: false,
    },
];

export default emails;
