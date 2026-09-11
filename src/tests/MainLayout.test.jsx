import { describe, it, expect, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils/renderWithProviders';
import MainLayout from '../Components/MainLayout';



function setScreenWidth(isMobile) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query) => ({
            matches: isMobile,
            addlistner: () => { },
            removeListener: () => { },
        }),
    });
}

describe('MainLayout Component', () => {
    it('shows hamburger and calls onMenuClick when on mobile', () => {
        setScreenWidth(true); // Simulate mobile
        const onMenuClick = vi.fn();
        renderWithProviders(
            <MainLayout
                open={false}
                onMenuClick={onMenuClick}
                onSidebarClose={() => { }}
                onSearch={() => { }}
                unreadCount={0}
                draftCount={0}
                starredCount={0}
            >
                <div>Main Content</div>
            </MainLayout>
        );

        // Hamburger should be visible and callable
        const menuBtn = screen.getByLabelText(/open drawer/i);
        expect(menuBtn).toBeInTheDocument();
        fireEvent.click(menuBtn);
        expect(onMenuClick).toHaveBeenCalled();
    });

    it('hides hamburger on larger screens (desktop)', () => {
        setScreenWidth(false); // Simulate desktop
        const onMenuClick = vi.fn();
        renderWithProviders(
            <MainLayout
                open={false}
                onMenuClick={onMenuClick}
                onSidebarClose={() => { }}
                onSearch={() => { }}
                unreadCount={0}
                draftCount={0}
                starredCount={0}
            >
                <div>Main Content</div>
            </MainLayout>
        );

        expect(screen.queryByLabelText(/open drawer/i)).toBeNull();
    });
});