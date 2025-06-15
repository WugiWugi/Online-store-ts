export async function fetchUsersAPI() {
  const serializedState = localStorage.getItem('appState');
  if (!serializedState) return [];
  try {
    const parsed = JSON.parse(serializedState);
    return parsed?.users?.list || [];
  } catch {
    return [];
  }
}
export async function registerUserAPI(number, password) {
  const serializedState = localStorage.getItem('appState');
  let users = [];
  if (serializedState) {
    try {
      const parsed = JSON.parse(serializedState);
      users = parsed?.users?.list || [];
    } catch {}
  }
  if (users.find(u => u.number === number)) {
    throw new Error('Пользователь уже существует');
  }
  const newUser = { number, password };
  users.push(newUser);
  const newState = serializedState ? JSON.parse(serializedState) : { users: {} };
  newState.users = newState.users || {};
  newState.users.list = users;
  localStorage.setItem('appState', JSON.stringify(newState));
  return newUser;
}
