import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router';
import MainLayout from './Layouts/MainLayout';
import Inbox from './Pages/Inbox';
import Sent from './Pages/Sent';
import Starred from './Pages/Starred';
import Trash from './Pages/Trash';
import EmailDetails from './Pages/EmailDetails';
import Compose from './Pages/Compose';
import Spam from './Pages/Spam';
import Drafts from './Pages/Drafts';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const [drafts, setDrafts] = React.useState([]);
  const [sentEmails, setSentEmails] = React.useState([]);

  const [composeOpen, setComposeOpen] = React.useState(false);
  const [selectedDraft, setSelectedDraft] = React.useState(null);

  const saveDraft = (email) => {
    setDrafts((previousDrafts) => {

      const alreadyExists = previousDrafts.some(
        (draft) => draft.id === email.id
      );

      if (alreadyExists) {
        return previousDrafts.map((draft) =>
          draft.id === email.id ? email : draft
        );
      }

      return [...previousDrafts, email];
    });
  };

  const sendEmail = (email) => {

    setSentEmails((previousSent) => [
      ...previousSent,
      {
        ...email,
        sentAt: new Date().toISOString(),
      },
    ]);

    // Remove email from Drafts after sending
    setDrafts((previousDrafts) =>
      previousDrafts.filter(
        (draft) => draft.id !== email.id
      )
    );
  };

  const handleOpenDraft = (draft) => {
    setSelectedDraft(draft);
    setComposeOpen(true);
  };

  return (
    <>
      <MainLayout open={sidebarOpen} onMenuClick={() => setSidebarOpen(true)} onSidebarClose={() => setSidebarOpen(false)} >
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/compose" element={<Compose open={composeOpen} onClose={() => setComposeOpen(false)} onSaveDraft={saveDraft} onSend={sendEmail} draft={selectedDraft} />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/email/:id" element={<EmailDetails />} />
          <Route path="/drafts" element={<Drafts drafts={drafts} onOpenDraft={handleOpenDraft} />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App;
