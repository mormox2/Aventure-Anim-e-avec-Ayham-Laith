const STORAGE_VERSION = 1;

function readStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    if (parsed?.version === STORAGE_VERSION && Array.isArray(parsed.data)) return parsed.data;
  } catch (error) {
    return [];
  }

  return [];
}

function writeStoredArray(key, values) {
  const data = Array.isArray(values) ? values : [];
  localStorage.setItem(key, JSON.stringify({ version: STORAGE_VERSION, data }));
}

export { readStoredArray, writeStoredArray };
