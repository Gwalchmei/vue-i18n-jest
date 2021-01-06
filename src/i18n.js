import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

Vue.use(VueI18n);

function loadLocaleMessages() {
  return {
    en,
    fr,
  };
}
const dateTimeFormats = {
  // http://www.ecma-international.org/ecma-402/2.0/#sec-intl-datetimeformat-constructor
  en: {
    long: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    },
  },
  fr: {
    long: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
  },
};

export default new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
  dateTimeFormats,
});
