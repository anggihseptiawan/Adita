const Intl = require('react-native-intl');

export const DateFormat = date => {
  return new Intl.DateTimeFormat('id-ID', {dateStyle: 'full'}).format(date);
};
