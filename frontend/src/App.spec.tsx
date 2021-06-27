import { render, screen } from '@testing-library/react';
import App from './App';

describe('Button view creation', () => {
  test('Initial test', () => {
    const {baseElement} =render(<App/>);
    expect(baseElement.getElementsByClassName("app")).toBeTruthy();
  });
})