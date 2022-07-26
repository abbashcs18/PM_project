import { render, screen } from '@testing-library/react';
import App from './App';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
test('renders learn react link', () => {
  render(<App />);
  const history = createMemoryHistory();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  render(
    <Router location={history.location} navigator={history}>
      <App />,
    </Router>,
    
  );

  expect(screen.getByText(/you are home/i)).toBeInTheDocument();  
});




