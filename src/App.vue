<template>
  <div>
  <ul>
    <li>{{ $t('message', 'fr') }}</li>
    <li>{{ $d(new Date('2020-10-02 15:32:45'), 'long', 'fr') }}</li>
  </ul>
  <ul>
    <li>{{ $t('message', 'en') }}</li>
    <li>{{ $d(new Date('2020-10-02 15:32:45'), 'long', 'en') }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
