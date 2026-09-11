import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../Theme'

// Helper to render with Router and Theme context
const renderWithProviders = (ui, { route = '/', options } = {}) => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <ThemeProvider theme={theme}>
                {ui}
            </ThemeProvider>
        </MemoryRouter>,
        options
    );
}

export { renderWithProviders }
export default renderWithProviders;