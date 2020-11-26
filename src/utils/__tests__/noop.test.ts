import { noop } from '../noop';

describe('noop', () => {
  it('should call no operation function', () => {
    expect.assertions(1);
    expect(() => {
      noop();
    }).not.toThrow();
  });
});
