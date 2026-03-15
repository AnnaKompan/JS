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

# Директива @Directive

— дає можливість маніпулювати елементами DOM (структурою документа) або поведінкою елементів на сторінці.

### Типи директив:

**структурні** та **атрибутивні**

1. **структурні** змінюють DOM

   `*ngIf, *ngFor, *ngSwitch` now `@if @for @switch`

2. **атрибутивні** додають або змінюють поведінку або вигляд HTML-елементів - **NgStyle** та **NgClass**

   `<p [ngStyle]="{color: 'red'}">ngStyle used</p>`

   `<p [ngClass]="{'active': isActive, 'disabled': isDisabled}"> ngClass used</p>`

### @for

```
    <!-- OLD FOR -->
<ul>
    <li *ngFor="let user of users; index as i">{{i+1}}: {{user}}</li>
</ul>
```

```
    <!-- NEW FOR -->
<ul>
    @for (user of users; track user; let idx = $index, e=$even, total=$count){
    <li>User: #{{idx+1}}:{{user}}</li>
    <p>Total Users: {{total}}</p>
    }@empty{
    <li>There are no users!</li>
    }
</ul>
```

**контекстні змінні**:

1. **$count** — вказує загальну кількість елементів у колекції;
2. **$index** — індекс поточного елемента в циклі;
3. **$first** — логічна змінна, що вказує, чи є поточний елемент першим у циклі;
4. **$last** — логічна змінна, що вказує, чи є поточний елемент останнім у циклі;
5. **$even** — істина, коли індекс поточного елемента парний;
6. **$odd** — істина, коли індекс поточного елемента непарний.

### @switch

```
<!-- OLD SWITCH -->
<div [ngSwitch]="appState">
    <p *ngSwitchCase="'active'"> APP is active</p>
    <p *ngSwitchCase="'paused'"> APP is paused</p>
    <p *ngSwitchCase="'stopped'"> APP is stopped</p>
    <p *ngSwitchDefault="">APP State is unknown</p>
</div>
```

```
<!-- NEW SWITCH -->
@switch(appState){
@case('active'){
<p>APP is active</p>
}
@case('paused'){
<p>APP is paused</p>
}
@case('stopped'){
<p>APP is stopped</p>
}
@default{
<p>APP State is unknown</p>
}
}
```

### @if

```
<!-- OLD IF-->
<p *ngIf="isClickedState ; else notClickedState"> Button was clicked! </p>
<ng-template #notClickedState>
    <p>Buton wasn't clicked!</p>
</ng-template>
<button (click)="toggleState()"> Toggle State </button>
```

```
<!-- NEW IF -->
@if (isClickedState){
<p>Button was clicked!</p>
}@else {
<p>Buton wasn't clicked!</p>
}
<button (click)="toggleState()">Toggle State</button>
```

# Пайпи

це спеціальні класи, які використовуються для трансформації, форматування даних у шаблонах.

### Вбудовані пайпи:

1. **DatePipe** — використовується для форматування дати та часу (shortDate, longDate, fullTime..)

`    <p>{{today | date: 'shortDate' }}</p>`

2. **UpperCasePipe** та **LowerCasePipe**

`    <p>{{"HELLO WORLD" | lowercase}}</p>`

3. **CurrencyPipe** — перетворення числа у формат валюти.

`    <p>{{1500.5 | currency}}</p>`

4. **DecimalPipe** — для форматування чисел, кількість цифр до та після коми.

`    <p>{{1.23455322 | number}}</p>`

5. **PercentPipe** — перетворює число у відсоткове значення + %.

`   <p>{{0.5| percent}}</p>`

6. **JsonPipe** — виводить об'єкт у форматі JSON. Корисний для дебагінгу.

`    <p>{{ { name: 'John', age: 23} | json }}</p>`

7. **AsyncPipe** — автоматично підписується на Observable або Promise та повертає останнє значення, яке воно видало.

**_date і currency, можуть використовуватись для локалізації застосунків_**

### Типи пайпів

чисті (**pure**) -тоді, коли Angular виявляє зміну, якщо без змін то юзаєм кеш

нечисті (**impure**) -при кожній зміні вхідних даних або при кожному циклі перевірки змін

### Кастомні пайпи

`ng g p blabla`

```
<!-- truncate-pipe.ts -->
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
```

<!-- test.html -->

`<p>{{longText | truncate: 18}}</p>`

# Services

це фрагменти коду багаторазового використання.

### Основні компоненти сервісу:

- **TypeScript-декоратор (@Injectable)** — вказує на те, що клас є сервісом Angular. Властивість providedIn, зазвичай 'root' -> доступ до сервісу в усьому застосунку.

- **TypeScript-клас** — визначає код/методи, який буде доступний, коли сервіс буде впроваджено.

### Створення сервісу:

1. ng g s blabla
2. Реєстрація сервісу. Модульний підхід:

- cервіси надаються у межах **NgModules**. Сервіси можуть бути зареєстровані у **providers** відповідних модулів, а потім можуть бути впроваджені у компоненти всередині того ж модуля.

2. Реєстрація сервісу. Standalone-підхід:

- шляхом передачі провайдерів до функції **bootstrapApplication**.

**_метод впровадження залежностей, що використовує `ApplicationConfig`_**

```
<!-- Це дозволяє використовувати CalculatorService у будь-якому місці без імпортів в кожен компонент
-->
bootstrapApplication(AppComponent, {
  providers: [
    SomeService,
    ...
  ]
})
```

3. Import в компоненті де будем юзати:

   `import { Todo } from '../../services/todo';`

4. Оголошення поля класу, в яке буде впроваджуватись сервіс
   ```
   export class Test implements OnInit {
   newTask: string = '';
   tasks: string[] = [];....
   ```
5. Функція \***\*inject\*\***, яка створює сервіс:

   `private todoService = inject(Todo);`

   OR

   `constructor(private todoService: Todo) { використанн сервісу в конструкторі }`

## Depency Injection (DI)

дозволяє класам з Angular-декораторами, такими як **Component, Directive, Pipe та Injectable** налаштовувати потрібні їм залежності

**РОЛІ DI:**

- споживач залежностей
- провайдер залежностей.

\***\*Depency Injection - ключовий механізм для зменшення залежностей та зв'язку між різними частинами застосунку, що полегшує його тестування та підтримку (DI компоненти та сервіси замість того, щоб створювати залежності самостійно, отримують їх від Angular)\*\***

# Форми

основний інструмент для збору даних від користувачів

### 1. шаблонні (template-driven)

- прості у використанні та ідеально підходять для простих та помірно складних форм
- Центральним елементом є директива ngModel, яка дозволяє реалізувати двостороннє зв'язування між елементами форми в HTML і моделями даних у компонентах TypeScript
- Валідація у шаблонних формах також визначається на рівні шаблону, без додавання в TS

### 2. реактивні (reactive)

- надають більш гнучкі та масштабовані можливості, для складних сценаріїв з високим рівнем кастомізації
- використання класів FormGroup і FormControl, що дає повний контроль над поведінкою форми
- забезпечують динамічніше управління станом форми, включно з асинхронною валідацією

## Використання реактивних форм

1. Імпорт **ReactiveFormsModule** з пакета @angular/forms
   ```
   import {
   AbstractControl,
   FormsModule,
   ReactiveFormsModule,
   Validators,
   ValidationErrors,
   FormGroup,
   FormControl,
   } from '@angular/forms';
   ```
2. вказати **ReactiveFormsModule** у полі **imports** вашого компонента. Це дозволить використовувати реактивні форми у компоненті.

```
@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  ...
})
```

3. Для роботи з реактивною формою Створіть екземпляр **FormControl** із початковим значенням (щоб керувати станом введення форми, слухати зміни та валідувати дані.)

```
export class Test{
  name = new FormControl('');
  <!-- OR formGroup(fixed size) OR formArray(dynamic size)-->
  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    ...
  })
}
```

4. Після створення контролу в класі компонента, асоціюйте його з елементом форми у шаблоні

```
  <label for="name">Name</label>
  <input id="name" type="test" [formControl]="name">
<!-- OR FOR formGroup -->
  <label for="email">Email: </label>
  <input type="email" formControlName="email" />
  <div *ngIf="email?.invalid && email?.touched" class="error">This value is invalid</div>
```

\***\*Метод setValue() використовується для оновлення значення поля форми, patchValue() — оновлює лише ті властивості, які визначені в об'єкті та змінилися в моделі форм\*\***

```
<!-- ts file in class method -->
updateName(){
  this.name.setValue('Nancy')
}
<!-- html file -->
<button type="button" (click)="updateName()">Update Name</button>
```

5. Щоб обробити дані форми, додайте до форми подію **ngSubmit**, яка буде активована при її відправленні

```
<form [formGroup]="complexForm" (ngSubmit)="onSubmit()">
        <label for="name">Name: </label>

    <!-- і в консолі відображаєм (функція в екземплярі класу в методах в ts директиві)-->

onSubmit() {
  console.log('Form value: ', this.complexForm.value);
  console.log('Form status - is valid: ', this.complexForm.valid);
  console.log('Form controls: ', this.complexForm.controls);
}
```

6. Валідація форм. Створення власних валідаторів

- import {Validators} from ...forms
- додати Validators.required як другий параметр до масиву при створенні елемента управління

```
complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    ...
})
```

Два типи:

- **Синхронні**(негайно повертають набір помилок валідації або **null**, коли додали другим аргументом при створенні контроль форми)
- **Асинхронні** (приймають екземпляр контролу і повертають Promise або Observable, коли додали третім аргументом при створенні контроль форми) \***\*Angular запускає асинхронні валідатори лише після успішного завершення всіх синхронних валідаторів\*\***

**Кастомний Валідатор**

```
export class Test {
// кастомний валідатор віку
    ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
    }
<!-- і додам в контроль групу як this.blalba -->
    age: new FormControl('', [Validators.required, this.ageValidator]),
```

## Використання template-driven форм

1. Імпортувати **FormsModule** до компонента при standalone-підході.

```
export class UserRegist {
   user = {
   name: '',
   email: ''
   };

   onSubmit(){
   console.log(this.user)
   }
   }
```

2. Використати директиву **NgModel**, щоб прив'язати поля форми до моделі. (Додайте **[(ngModel)]** до кожного поля введення у формі, щоб двосторонньо прив'язати)

```
<form #userForm="ngForm" (ngSubmit)="onSubmit()">
  <div>
      <label for="name">Name: </label>
      <input type="text" id='name' [(ngModel)='user.name' name='name' required] />
      <!-- touched when input empty and user didn't enter anyt' -->
      <div *ngIf="name?.invalid && name?.touched" class="error">This value is invalid</div>
  </div>
```
