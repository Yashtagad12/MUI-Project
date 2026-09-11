import { render, screen, fireEvent } from '@testing-library/react';
import Compose from '../Pages/Compose';
import { describe, it, expect, vi } from 'vitest';

const mockedNaviagte = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return { ...actual, useNavigate: () => mockedNaviagte };
});

describe('Compose Component', () => {
    it('updates fields and calls onSaveDraft with the email object', () => {
        const onSaveDraft = vi.fn();
        const onSend = vi.fn();
        render(<Compose onSaveDraft={onSaveDraft} onSend={onSend} />);

        // Fill out the form fields (simulate user typing)
        fireEvent.change(screen.getByLabelText(/to/i), { target: { value: 'alice@example.com' } });
        fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' } });
        fireEvent.change(screen.getByLabelText(/body/i), { target: { value: 'Test body' } });

        fireEvent.click(screen.getByText(/save draft/i));
        expect(onSaveDraft).toHaveBeenCalledTimes(1);
        const saved = onSaveDraft.mock.calls[0][0];
        expect(saved).toMatchObject({
            to: 'alice@example.com',
            subject: 'Hello',
            body: 'Test body',
        });

    });

    it('calls onSend and navigates to /sent when clicking Send', () => {
        const onSaveDraft = vi.fn();
        const onSend = vi.fn();
        render(<Compose onSaveDraft={onSaveDraft} onSend={onSend} />);

        fireEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(onSend).toHaveBeenCalledTimes(1);
        expect(mockedNaviagte).toHaveBeenCalledWith('/sent');
    });

});