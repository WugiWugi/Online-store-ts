export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (e) {
    console.warn('Ошибка при сохранении в localStorage', e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return {
        users: {
          list: [],
          currentUser: null,
          error: null,
          busket: [],
          purchasedProducts: []
        }
      };
    }
    const parsed = JSON.parse(serializedState);
    return {
      users: {
        list: parsed?.users?.list || [],
        currentUser: parsed?.users?.currentUser || null,
        error: parsed?.users?.error || null,
        busket: parsed?.users?.busket || [],
        purchasedProducts: parsed?.users?.purchasedProducts || [],
      }
    };
  } catch (e) {
    console.warn('Ошибка при загрузке из localStorage', e);
    return {
      users: {
        list: [],
        currentUser: null,
        error: null,
        busket: []
      }
    };
  }
};