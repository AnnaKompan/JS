**TypeScript** - superset of JS (надбудова)

### 1. Типізація

`let age = 25` => `let age: number = 25`

**Types:**

- string
- number
- boolean
- null
- undefined
- any

### 2. Union Types (Змінна може мати кілька типів)

```
let id: number | string
id = 10
id = "abc"
```

### 3. Типізація функцій

```
function add(a: number, b: number): number {
  return a + b
}
```

**a:** number
**b:** number
**return:** number

### 4. Interfaces (Описують структуру об'єкта)

```
interface User {
  name: string
  age: number
}
```

for

```
const user: User = {
  name: "Anna",
  age: 25
}
```

### 5. Optional properties (Необов'язкові поля)

```
interface User {
  name: string
  age?: number
}
```

### 6. Generics < T > (Дозволяють створювати універсальні типи)

```
function identity<T>(value: T): T {
  return value
}
```

### 7. Type vs Interface

**type** більш гнучкий

```
type User = {
  name: string
  age: number
}
```

**interface** краще для об'єктів

```
interface User {
  name: string
  age: number
}
```
