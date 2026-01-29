import { List } from './list';

describe('List', () => {
  it('should create an instance', () => {
    const directive = new List(null as any);
    expect(directive).toBeTruthy();
  });
});
