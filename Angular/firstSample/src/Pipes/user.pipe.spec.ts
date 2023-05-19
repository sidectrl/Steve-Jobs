import { IdentityPipe } from './user.pipe';

describe('IdentityPipe', () => {
  it('create an instance', () => {
    const pipe = new IdentityPipe();
    expect(pipe).toBeTruthy();
  });
});
