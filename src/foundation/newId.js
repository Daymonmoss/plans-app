let lastId = 0;

export const newId  = (prefix = "id_") => {
  lastId++;
  return `${prefix}${lastId}`;
}
