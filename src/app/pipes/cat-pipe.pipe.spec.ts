import { CatPipePipe } from './cat-pipe.pipe';

describe('CatPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CatPipePipe();
    expect(pipe).toBeTruthy();
  });
});
