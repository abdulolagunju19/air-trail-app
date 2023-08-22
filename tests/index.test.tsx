import { render, screen } from '@testing-library/react'
import Home from '../pages/index';

describe('Home', () => {
  it('renders the home page', () => {
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })
  it('AirTrail Traffic Registry displayed on home page', () => {
    render(<Home />)
    const myElem = screen.getByText(/AirTrail Traffic Registry/i);
    expect(myElem).toBeInTheDocument();
  })
})