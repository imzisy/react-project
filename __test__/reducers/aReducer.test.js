/* eslint-env jest */
import a from '../../src/reducers/aReducer';

describe('A Reducer', () => {
  it('it has default state', () => {
    expect(a(undefined, { type: 'unexpected' }).toEqual([]));
  });

  it('can handle add A', () => {
    expect(a(undefined, { type: 'ADD_A', payload: 'A1' })).toEqual(['A1']);
  });
});
