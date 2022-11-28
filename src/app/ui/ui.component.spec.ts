import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("UI Integration Testing Suite", () => {
    // NOTE: ADDITION ➕
    it("Should call addition method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 2;
      component.operator2 = 2;

      // Act
      component.addition();
      result = component.result;

      // Assert
      expect(result).toBe(4);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "3.1416";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(3.1416);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "2.71";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(2.71);
    });

    it("should add operator1 and operator2 when i click the addition button ", () => {
      // Arrange
      component.operator1 = 5.0;
      component.operator2 = 2.5;
      let additionButton = fixture.debugElement.query(
        By.css(".addition-button")
      );

      // Act
      additionButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(7.5);
    });

    it("Should render sum in result div", () => {
      // Arrange
      component.operator1 = 5;
      component.operator2 = 5;

      // Act
      component.addition();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("10");
    });
  });

  // NOTE: SUBSTRACTION ➖
  describe("UI Substraction - Component", () => {
    it("Should call substraction method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 10;
      component.operator2 = 3;

      // Act
      component.substraction();
      result = component.result;

      // Assert
      expect(result).toBe(7);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "3.1416";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(3.1416);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "2.71";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(2.71);
    });

    it("Should add operator1 and operator2 when i click the substraction button", () => {
      // Arrange
      component.operator1 = 45;
      component.operator2 = 32;
      let substractionButton = fixture.debugElement.query(
        By.css(".substraction-button")
      );

      // Act
      substractionButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(13);
    });

    it("Should render substraction in result div", () => {
      // Arrange
      component.operator1 = 3;
      component.operator2 = 1;

      // Act
      component.substraction();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("2");
    });
  });

  // NOTE: MULTIPLICATION ✖️
  describe("UI Multiplication - Component", () => {
    it("Should call multiplication method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 5;
      component.operator2 = 3;

      // Act
      component.multiplication();
      result = component.result;

      // Assert
      expect(result).toBe(15);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "37";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(37);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "45";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(45);
    });

    it("should add operator1 and operator2 when i click the multiplication button ", () => {
      // Arrange
      component.operator1 = 25;
      component.operator2 = 4;
      let multiplicationButton = fixture.debugElement.query(
        By.css(".multiplication-button")
      );

      // Act
      multiplicationButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(100);
    });

    it("Should render multiplication in result div", () => {
      // Arrange
      component.operator1 = 300;
      component.operator2 = 1.5;

      // Act
      component.multiplication();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("450");
    });
  });
});
