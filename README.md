# Sc5User

### Wymagania

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) `>=v8.x.x`
- [ESLint](http://eslint.org/)

### Instalacja

Pobranie repozytorium: 

```bash
git clone git@bitbucket.org:amba_rnd/sc5-user-front.git
```
```bash
cd sc5-user-front
```

Instalacja zależności:

```bash
npm install
```

### Zmienne środowiskowe (konfiguracyjne)

Znajdują się w katalogu ***./src/environments***

W katalogu powinny się znajdować dwa pliki:
- Zmienne dla wersji DEV: `environment.ts`
- Zmienne dla wersji PROD: `environment.prod.ts`

Przykładowa konfiguracja dla DEV:
```javascript
export const environment = {
  production: false,
  apiGraphQL: 'http://develop.tkuchne.starcommerce.io/user',
  passwordMaxAge: 90 * 24 * 60 * 60, // 90 days
  tokenKeyName: 'x-jwt-token',
  identityKeyName: 'sc5-user-identity'
};
```

Przykładowa konfiguracja dla PROD:
```javascript
export const environment = {
  production: true,
  apiGraphQL: 'http://develop.tkuchne.starcommerce.io/user',
  passwordMaxAge: 7776000,
  tokenKeyName: 'x-jwt-token',
  identityKeyName: 'sc5-user-identity'
};
```
### Generowanie pliku konfiguracyjnego

Istnieje możliwośc automatycznego generowania pliku konfiguracyjnego.

```bash
node generate-env.js
```

Polecenie wygenruje plik `environment.ts` z domyślnymi wartościami. Jeśli chcemy nadpisać jedną z wartości wystarczy podać odpowiedni parametr.
Polecenie z wszystkimi dostepnymi parametrami:

```bash
node generate-env.js env=prod prod=true api=http://develop.tkuchne.starcommerce.io/user passAge=7776000 tokenKeyName=x-jwt-token identityKeyName=sc5-user-identity
```

### Praca z projektem

Projekt budowany jest z wykorzystaniem Angular CLI. 
Nie polecam instalować tego narzędzia globalnie, ponieważ w poszczególnych projektach może być różna wersja CLI przez co mogą pojawić się problemy z budowaniem projektu.

### Lokalnie

Uruchomienie projektu: `node_modules/.bin/ng serve -o` <br>
Odpalenie testów jednostkowych: `node_modules/.bin/ng test` <br>
Odpalenie testów e2e: `node_modules/.bin/ng e2e`

### Wersja BETA

Aby odpalić wersję beta musi istnieć plik ***./src/environments/environment.ts*** !

Budowa projektu: `./node_modules/.bin/ng build --prod --env dev --base-href /user/` <br>
Odpalenie testów jednostkowych: `node_modules/.bin/ng test --single-run` <br>
Odpalenie testów e2e: `node_modules/.bin/ng e2e`

### Wersja PROD

Aby odpalić wersję produkcyjną musi istnieć plik ***./src/environments/environment.prod.ts*** !

Budowa projektu: `node_modules/.bin/ng build --prod --base-href /user/` <br>
Odpalenie testów jednostkowych: `node_modules/.bin/ng test --single-run` <br>
Odpalenie testów e2e: `node_modules/.bin/ng e2e`

