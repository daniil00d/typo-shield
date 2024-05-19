# Typo-shield swagger generator

## Install

`npm i typo-shield-swagger-generator`

## Use

```typescript
import SwaggerGeneratorMiddleware from 'typo-shield-swagger-generator';

// ...

app.registerMiddleware(SwaggerGeneratorMiddleware({
  // config...
}));
```

## Middleware configuration

- `defaultParams` - default params for swagger spec
