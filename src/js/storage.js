//работа с localStorage
export function saveSearchQuery(query) {
  localStorage.setItem('searchQuery', query);
}

export function loadSearchQuery() {
  return localStorage.getItem('searchQuery') || '';
}

export function saveSelectedBoard(name) {
  localStorage.setItem('selectedBoard', name);
}

export function loadSelectedBoard() {
  return localStorage.getItem('selectedBoard') || null;
}
