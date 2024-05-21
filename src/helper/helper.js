export const capitalizeFirstLetter = value => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const compareArraysAndObject = (arr, obj) => {
  const res = [];

  arr.forEach(({ label, name }) => {
    const value = obj[name];
    if (value && value !== '' && value !== null) {
      res.push({ label, name, value });
    }
  });

  return res;
};

export const prepareName = (arr, value) => {
  let correctName = '';
  arr.map(({ name, label }) => name === value && (correctName = label));
  return correctName;
};

export const filterLocation = (arr, value) => {
  if (value === '') {
    return arr;
  }
  return arr.filter(({ location }) =>
    location.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
};

export const filterEquipment = (arr1, arr2) => {
  if (!arr2.length) {
    return arr1;
  }
  return arr1.filter(el => {
    return arr2.every(item => {
      return +el.details[item] >= 1 || el[item] === 'automatic';
    });
  });
};

export const filterType = (arr, value) => {
  if (value === null) {
    return arr;
  }
  return arr.filter(({ form }) => form === value);
};
