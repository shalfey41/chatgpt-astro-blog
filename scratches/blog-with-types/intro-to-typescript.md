---
title: "Введение в TypeScript"
description: "Обзор TypeScript, его основных возможностей и преимуществ перед обычным JavaScript."
publishedAt: "03/06/2023"
---

# Введение в TypeScript

TypeScript — это суперсет JavaScript, добавляющий статическую типизацию и другие функции, которые помогают разработчикам писать более надежный и читаемый код.

**Статическая типизация**

Основной особенностью TypeScript является статическая типизация. Это означает, что вы указываете типы данных для ваших переменных, параметров и возвращаемых значений функций.

```typescript
let message: string = "Hello, world!";
function multiply(a: number, b: number): number {
  return a * b;
}
```

**Интерфейсы**

TypeScript представляет интерфейсы, которые позволяют вам определить структуру объектов.

```typescript
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "John",
  age: 25
};
```

**Классы и наследование**

TypeScript расширяет поддержку классов в JavaScript, включая модификаторы доступа `public`, `private` и `protected`, а также ключевые слова `abstract` и `readonly`.

```typescript
class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}
```

TypeScript требует компиляции в JavaScript перед запуском в браузере или Node.js, но его дополнительные функции делают его очень популярным выбором для больших и сложных проектов.