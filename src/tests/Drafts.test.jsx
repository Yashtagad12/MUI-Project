import { render, screen, fireEvent } from '@testing-library/react';
import Drafts from '../components/Drafts';
import { describe, it, expect, vi } from 'vitest';


describe('Drafts Component', () => {
    it('renders a list of drafts and opens draft on click', () => {
        const drafts = [
            { id: 1, to: 'bob@example.com', subject: 'Meeting', body: 'Schedule?' },
            { id: 2, to: 'carol@example.com', subject: '', body: '' }
        ];

        const onOpenDrafts = vi.fn();
        render(<Drafts drafts={drafts} onOpenDraft={onOpenDrafts} />);

        // Both subjects should appear (empty subject shows "(No subject)")
        expect(screen.getByText('Meeting')).toBeInTheDocument();
        expect(screen.getByText('(No subject)')).toBeInTheDocument();

        // Clicking the first draft item
        fireEvent.click(screen.getByText('Meeting'));
        expect(onOpenDrafts).toHaveBeenCalledTimes(1);
        expect(onOpenDrafts).toHaveBeenCalledWith(drafts[0]);
    });

    it('shows empty state when no drafts', () => {
        render(<Drafts drafts={[]} onOpenDraft={() => { }} />);
        expect(screen.getByText(/no drafts/i)).toBeInTheDocument();
        expect(screen.getByText(/unfinished emails/)).toBeInTheDocument();
    });
});