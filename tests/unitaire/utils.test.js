const { isValidEmail } = require('./utils');

describe('Email Validation Function', () => {
  test('Valid email should return true', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  test('Invalid email should return false', () => {
    expect(isValidEmail('notanemail')).toBe(false);
  });
});
