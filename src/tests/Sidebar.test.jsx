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
        expect(screen.getByRole('link', { name: /Inbox/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Starred/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Drafts/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Sent/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Trash/i })).toBeInTheDocument();

        // Click the "Starred" link and check navigation
        fireEvent.click(screen.getByRole('link', { name: /Starred/i }));
        expect(screen.getByText(/Starred Page/)).toBeInTheDocument();

        // Click the "Drafts" link and check navigation
        fireEvent.click(screen.getByRole('link', { name: /Drafts/i }));
        expect(screen.getByText(/Drafts Page/)).toBeInTheDocument();
    });

});