# Angular Ecosystem

Платформа для розробки веб засточунків написана на TypeScript

### 1. Angular CLI(command line interface bash)

інструмент для створення розробки і розгортанні додатків
`ng new ***`

### 2. RXJS

Бібіліотека що дозволяє управляти асинхронними даними

### 3. Angular Material

Набір компонентів інтерфейсу для створення консистентного UI (sliders, buttons)

### 4. NGRX

Бібліотека для управління станом на основі Redux патерну

### 5. TypeScript

додає типізацію до JS для надійності і читабельності коду

### 6. WebPack

модульний збирач, який оптимізує завантаження та управління ресурсами додатку

# Конфігураційні файли

### 1. angular.json

визначає опції збірки, розробки, тестування.

### 2. package.json

визначає залежності проєкту, скрипти та інші метадані для управління через npm

### 3. tsconfig.json

визначає опції компілятора та базовий набір файлів для проєкту. TypeScript компілюється JavaScript

### 4. .gitignore

файли для ігнорування.

# Файли Проєкту

### 1. src/

Основна діректорія з кодом застосунку

### 2. app/

Містить компоненти, модулі та сервіси додатку

### 3. assets/

Для статичних ресурсів (img, styles)

### 4. environments/

Для налаштування середовищ розробки

### 5. favicon.ico

Іконка сайту

### 6. index.html

Основна html page

### 7. main.ts

Вхідна точка апки

### 8. polyfills.ts

Файл для поліфілів, для пітримки старіших браузерів

### 9. styles.css

Глобальні стилі

# @Component - Клас з декоратором, основа в Angular

додає метадані для обробки шаблонів, стилів та логіки, може включати локальні стилі та логіку
`ng generate component <name>` - створити компонент
Властивості:

### 1. CSS селектор (styles/styleUrl)

визначає, як компонент використовується в HTML. Дозволяє інкапсулювати стилі для конкретного компонента

### 2. HTML-шаблон (template/templateUrl)

контролює, що рендериться в DOM.

### 3. changeDetection

вказує стратегію виявлення змін. наприклад ChangeDetectionStrategy.OnPush

### 4. encapsulation

- ViewEncapsulation.**Emulated** default (свої стилі не впливають глобально, а глобальні впливають)
- ViewEncapsulation.**None** (стилі компонента стають глобальними)
- ViewEncapsulation.**ShadowDom** (стилі не впливають глобально, глобальні не впливають теж).

# Дата-біндінг в шаблонах

дозволяє створювати двосторонню комунікацію між шаблоном і класом компонента.
Види прив’язок:

1. **Interpolation** `({{ value }})` — для вставки значень з компонента в HTML.

2. **Property binding** `([property]="value")` — для прив’язки властивостей елементів DOM до значень компонента.

3. **Event binding** `((event)="handler()")` — для прив’язки обробників подій компонента до подій елементів DOM.

4. **Two-way binding** `([(ngModel)]="property")` — для синхронізації значення форми з властивістю компонента.

# Клас компонента в Angular

це центральна частина компонентної архітектури, яка використовується для визначення логіки та даних компонента.

```
export class Test {
   title: string = 'Hi Angular';

   changeTitle(newTitle: string):void{
       this.title = newTtle;
   }
}
```

# Робота з даними в компонентах

Життєвий цикл компонента в Angular - послідовність етапів від **ініціалізації** до **знищення компонента**.

## Lifecycle Hooks

1. **ngOnChanges()** — викликається, коли Angular встановлює або змінює зв'язані дані властивості вхідних даних.
2. **ngOnInit()** — виконується один раз після першого виклику ngOnChanges, використовується для ініціалізації компонента.
3. **ngDoCheck()** — викликається після ngOnInit та щоразу, коли Angular виконує перевірку змін.
4. **ngAfterContentInit()** — викликається один раз після вставки вмісту в представлення компонента (<ng-content>).
5. **ngAfterContentChecked()** — викликається після кожної перевірки вмісту, вставленого через <ng-content>.
6. **ngAfterViewInit()** — викликається один раз після ініціалізації представлення компонента та дочірніх компонентів.
7. **ngAfterViewChecked()** — викликається після кожної перевірки представлення компонента та дочірніх компонентів.
8. **ngOnDestroy()** — виконується перед тим, як Angular знищить компонент. Використовується для очищення ресурсів, таких як відписка від спостерігачів (observables) та звільнення ресурсів, щоб запобігти витоку пам'яті.

**Interpolation** => `<p>{{}}</p>`

**ngStyle і ngClass** — директиви, які дозволяють динамічно змінювати стилі та класи HTML-елементів у шаблоні компонента.

`<p [ngStyle]="{color: 'red'}">ngStyle used</p>`

`<p [ngClass]="{'active': isActive, 'disabled': isDisabled}"> ngClass used</p>`

## Event binding

дозволяє реагувати на різноманітні події, що відбуваються в DOM

----> кліки миші, наведення миші, натискання клавіш тощо

!**синтаксис круглих дужок!**
`<button (click)='onClick()'> Click </button>` (in class add click(){alert()})

## Two-Way Data Binding

концепція, яка дозволяє автоматично синхронізувати дані між моделлю компонента та його представленням (шаблоном).

**Parent <-----------> Child**

!!! використовується директива **[(ngModel)]** import FormsModule from forms для зв'язування даних з шаблоном компонента

```
<input type="text" [(ngModel)]="inputText" /> <!-- Two-way binding -->
<p>{{inputText}}</p> <!-- Виведення значень за допомогою інтерполяції -->

<!-- inside class -->
  inputText: string = '';
```

### Комунікація між компонентами

реалізована за допомогою декораторів **@Input** та **@Output**

```
<!-- ts file of component -->
    @Input() childMessage: string = '';
    @Output() messageFromChild = new EventEmitter<string>();

    sendMessageToParent() {
    this.messageFromChild.emit('Im your child');
}

<!-- component.html -->
    <p>{{childMessage}}</p>
    <button (click)="sendMessageToParent()">Send message to Parent!</button>

<!-- app.ts -->

  messageFromParent = 'Im yo father';
  messageFromChild = '';

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }

<!-- app.html -->
<p>{{messageFromChild}}</p>
<app-test [childMessage]="messageFromParent" (messageFromChild)="getMessageFromChild($event)"></app-test>
```
