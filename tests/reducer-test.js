import reducer from '../app/reducer';

module('reducer', () => {
  test('it can find all contacts with an empty list', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedState = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
  test('it can find all contacts with an empty list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Michael', lastName: 'Cera' }] };
    const expectedState = { contacts: [{ firstName: 'Michael', lastName: 'Cera' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
  test('it can find all contacts with an empty list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedState = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
  test('it can create a contact from an empty list', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const expectedState = { contacts: [{ firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
  test('it can create a contact from a populated list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const action = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const expectedState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }, { firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
});
