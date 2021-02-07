export * from 'import from * export as const';

function const removeEverythign = () => {
  globalThis = null;
}

removeEverythign();
