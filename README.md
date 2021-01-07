# i18n-jest

Mini project to test an issue with date formatting in Jest tests.

The issue is linked to the node version

### Launch the tests in an environment with the latest node version

```
$ docker build -t i18n-jest-success -f Dockerfile.success . && docker run i18n-jest-success
```

### Launch the tests in an environment with node v12.8.4

```
$ docker build -t i18n-jest-fail -f Dockerfile.fail . && docker run i18n-jest-fail
```