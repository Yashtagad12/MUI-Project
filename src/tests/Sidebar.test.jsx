import { describe, it, expect, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';


describe('Sidebar Component', () => {
    it('renders navigation links and navigates correctly', () => {

        // Render Sidebar with routes for testing navigation
        render(
            <MemoryRouter initialEntries={['/']}>
                <Sidebar open={true} onClose={() => { }} variant="permanent" />
                <Routes>
                    <Route path="/" element={<div>Inbox Page</div>} />
                    <Route path="/starred" element={<div>Starred Page</div>} />
                    <Route path="/drafts" element={<div>Drafts Page</div>} />
                    <Route path="/sent" element={<div>Sent Page</div>} />
                    <Route path="/trash" element={<div>Trash Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        // Check all link labels exist
        expect(screen.getByText(/Inbox/i)).toBeInTheDocument();
        expect(screen.getByText(/Starred/i)).toBeInTheDocument();
        expect(screen.getByText(/Drafts/i)).toBeInTheDocument();
        expect(screen.getByText(/Sent/i)).toBeInTheDocument();
        expect(screen.getByText(/Trash/i)).toBeInTheDocument();

        // Click the "Starred" link and check navigation
        fireEvent.click(screen.getByText(/Starred/));
        expect(screen.getByText(/Starred Page/)).toBeInTheDocument();

        // Click the "Drafts" link and check navigation
        fireEvent.click(screen.getByText(/Drafts/));
        expect(screen.getByText(/Drafts Page/)).toBeInTheDocument();
    });

});