export function findAll() {
  return {
    type: 'CONTACT@FIND_ALL',
    data: JSON.parse(window.localStorage.contacts || '[]'),
  };
}

export function create(data) {
  return {
    type: 'CONTACT@CREATE',
    data,
    id: new Data()
  };
}

export function remove(id) {
  return {
    type: 'CONTACT@REMOVE'
  };
}
