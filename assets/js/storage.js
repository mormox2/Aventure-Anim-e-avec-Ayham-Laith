/**
 * Schema version for persistent localStorage data.
 * @type {number}
 */
const STORAGE_VERSION = 1;

/**
 * Safely reads and parses an array from localStorage with version compatibility.
 * @template T
 * @param {string} key - localStorage key to read.
 * @returns {Array<T>} Parsed array or empty array on failure.
 */
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

/**
 * Safely writes an array to localStorage wrapped in a versioned envelope.
 * @template T
 * @param {string} key - localStorage key to write.
 * @param {Array<T>} values - Values to persist.
 */
function writeStoredArray(key, values) {
  const data = Array.isArray(values) ? values : [];
  try {
    localStorage.setItem(key, JSON.stringify({ version: STORAGE_VERSION, data }));
  } catch (error) {
    console.warn(`Failed to persist key "${key}" to localStorage:`, error);
  }
}

export { readStoredArray, writeStoredArray, STORAGE_VERSION };
