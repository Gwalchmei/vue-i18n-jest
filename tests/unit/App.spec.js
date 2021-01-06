import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import App from '@/App.vue';
import i18n from '@/i18n';

describe('App.vue', () => {
  test('Should format date according to given locale', () => {
    const { queryByText } = render(App, {}, (vue) => {
      vue.use(i18n);
      return { i18n };
    });

    expect(queryByText('A message in english')).toBeVisible();
    expect(queryByText('Un message en français')).toBeVisible();

    expect(queryByText('Friday, October 2, 2020, 3:32:45 PM')).toBeVisible();
    expect(queryByText('vendredi 2 octobre 2020 à 15:32:45')).toBeVisible();
  });
});