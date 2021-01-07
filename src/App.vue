<template>
  <div>
  <ul>
    <li>{{ $t('message', 'fr') }}</li>
    <li>{{ $d(date, 'long', 'fr') }}</li>
    <li>{{ date.toLocaleDateString('fr', options)}}</li>
  </ul>
  <ul>
    <li>{{ $t('message', 'en') }}</li>
    <li>{{ $d(date, 'long', 'en') }}</li>
    <li>{{ date.toLocaleDateString('en', options)}}</li>

  </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      date: new Date('2020-10-02 15:32:45'),
      options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
  }
}
</script>
