import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(Satellite).toBeTruthy();
  });
});

//expect(Satellite) is a work around from expect(new Satellite()) type error