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
  test('it can remove a single contact', (assert) => {
    const oldState = { contacts: [{ firstName: 'Paul', lastName: 'Blart', id: 1 }] };
    const action = { type: 'CONTACT@REMOVE', id: 1  };
    const expectedState = { contacts: [] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
  test('it can remove a contact based on id while leaving others', (assert) => {
    const oldState = { contacts: [{ firstName: 'Paul', lastName: 'Blart', id: 1 }, { firstName: 'Paul', lastName: 'Blart', id: 2 }] };
    const action = { type: 'CONTACT@REMOVE', id: 1  };
    const expectedState = { contacts: [{ firstName: 'Paul', lastName: 'Blart', id: 2 }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
  test('it cannot remove a contact with an id that does not exist', (assert) => {
    const oldState = { contacts: [{ firstName: 'Paul', lastName: 'Blart', id: 1 }] };
    const action = { type: 'CONTACT@REMOVE', id: 2 };
    const expectedState = { contacts: [{ firstName: 'Paul', lastName: 'Blart', id: 1 }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
});
