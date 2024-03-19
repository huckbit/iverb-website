import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders all navigation items', () => {
    render(<NavBar />);

    const navItems = screen.getAllByRole('link');

    expect(navItems).toHaveLength(5);
    expect(navItems[0]).toHaveTextContent('iVerb');
    expect(navItems[1]).toHaveTextContent('Verbs');
    expect(navItems[2]).toHaveTextContent('Practice');
    expect(navItems[3]).toHaveTextContent('Search');
    expect(navItems[4]).toHaveTextContent('About');
  });
});

it('toggles aria-expanded when clicked', () => {
  render(<NavBar />);
  const element = screen.getByRole('button');
  expect(element).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(element);
  expect(element).toHaveAttribute('aria-expanded', 'true');
});

// it('sets aria-expanded to false when clicked', () => {
//   render(<NavBar />);
//   const elements = screen.getAllByRole('button');
//   expect(elements).toHaveLength(2);
//   fireEvent.click(elements[1]);
//   expect(elements[1]).toHaveAttribute('aria-expanded', 'false');
// });

describe('Mobile tests', () => {
  beforeEach(() => {
    // Simulate a mobile viewport
    window.resizeTo(360, 640);
  });

  it('shows navigation links when burger menu is clicked', () => {
    render(<NavBar />);
    const burgerMenuButton = screen.getByRole('button');
    fireEvent.click(burgerMenuButton);

    // Check that the navigation links are now visible
    const navLinks = screen.getAllByRole('link');
    navLinks.forEach((link) => {
      expect(link).toBeVisible();
    });
  });

  // it('sets aria-expanded to false when clicked', () => {
  //   render(<NavBar />);
  //   const burgerMenuButton = screen.getByRole('button');
  //   fireEvent.click(burgerMenuButton);
  //   const elements = screen.getAllByRole('button');
  //   expect(elements).toHaveLength(6);
  //   screen.debug();
  //   fireEvent.click(elements[5]);
  //   expect(elements[5]).toHaveAttribute('aria-expanded', 'false');
  // });
});
