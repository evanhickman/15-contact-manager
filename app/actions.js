export function findAll() {
  return {
    type: 'CONTACT@FIND_ALL',
    data: JSON.parse(window.localStorage.contacts || '[]')
  };
}
