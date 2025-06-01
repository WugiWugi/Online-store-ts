const API = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'https://online-strore-production.up.railway.app';

export async function fetchUsersAPI() {
  const res = await fetch(`${API}/users`);
  if (!res.ok) throw new Error('Ошибка загрузки пользователей');
  return await res.json();
}

export async function registerUserAPI(number, password) {
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ number, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Ошибка регистрации');
  }
  return { number, password };
}
