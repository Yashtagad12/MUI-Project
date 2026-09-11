import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { ThemeProvider, createTheme } from '@emotion/react';


// Helper to render with Router and Theme context
const renderWithProviders = (ui, { route = '/', options } = {}) => {
    window.history.pushState({}, 'Test page', route);
    const theme = createTheme();
    return render(
        <MemoryRouter initialEntries={[route]}>
            <ThemeProvider theme={theme}>
                {ui}
            </ThemeProvider>
        </MemoryRouter>,
        options
    );
}

export default renderWithProviders;