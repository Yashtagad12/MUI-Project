import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Navbar from '../Components/Navbar';


describe('Navbar Component', () => {
    it('displays correct badge counts and hides hamburger on desktop (isMobile=false)', () => {
        render(<Navbar onMenuClick={() => { }} onSearch={() => { }} isMobile={false} unreadCount={2} draftCount={1} starredCount={4} />);

        // Badge contents should match props
        expect(within(screen.getByRole('button', { name: /email notifications/i })).getByText('2')).toBeInTheDocument();
        expect(within(screen.getByRole('button', { name: /draft emails/i })).getByText('1')).toBeInTheDocument();
        expect(within(screen.getByRole('button', { name: /starred emails/i })).getByText('4')).toBeInTheDocument();

        // Hamburger (menu icon) should not be present on desktop
        expect(screen.queryByLabelText(/open drawer/i)).toBeNull();
    });

    it('shows hamburger on mobile (isMobile=true)', () => {
        render(<Navbar onMenuClick={() => { }} onSearch={() => { }} isMobile={true} unreadCount={0} draftCount={0} starredCount={0} />);

        // Hamburger should appear
        const menuBtn = screen.getByLabelText(/open drawer/i);
        expect(menuBtn).toBeInTheDocument();
    });
});