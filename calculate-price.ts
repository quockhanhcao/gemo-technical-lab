enum DrinkType {
  HOT,
  COLD,
  BLENDED,
  MILK_TEA,
}

enum DrinkSize {
  SMALL,
  MEDIUM,
  LARGE,
  EXTRA_LARGE,
}

enum MilkType {
  WHOLE_MILK,
  ALMOND_MILK,
}

enum Breakfast {
  SANDWICH,
  BAGEL,
}

enum BreakfastTopping {
  EGG,
  TURKEY,
  BUTTER,
  CREAM_CHEESE,
}

class PriceBuilder {
  price: number = 2;

  setDrinkSize(drinkSize: DrinkSize) {
    console.log("Base price for drink: $2");
    switch (drinkSize) {
      case DrinkSize.MEDIUM:
        this.price += 0.5;
        console.log("Addition for Medium size drink: $0.5");
        break;
      case DrinkSize.LARGE:
        this.price += 1;
        console.log("Addition for Large size drink: $1");
        break;
      case DrinkSize.EXTRA_LARGE:
        this.price += 1.5;
        console.log("Addition for Large size drink: $1.5");
        break;
    }
    return this;
  }

  setDrinkType(drinkType: DrinkType) {
    switch (drinkType) {
      case DrinkType.BLENDED:
        this.price += 1;
        console.log("Addition for Blended drink: $1");
        break;
      case DrinkType.MILK_TEA:
        this.price += 0.25;
        console.log("Base price for Milk tea drink: $2.25");
        break;
    }
    return this;
  }

  setTopping(whippedCream: boolean) {
    if (whippedCream) {
      this.price += 0.5;
      console.log("Addition for whipped cream topping: $0.5");
    }
    return this;
  }

  setMilkType(milkType?: MilkType) {
    if (milkType && milkType === MilkType.ALMOND_MILK) {
      this.price += 0.5;
      console.log("Addition for almond milk: $0.5");
    }
    return this;
  }

  setChocolateSauce(chocolateSauce?: number) {
    if (chocolateSauce && chocolateSauce >= 2 && chocolateSauce <= 6) {
      this.price += (chocolateSauce - 2) * 0.5;
      console.log(
        `${chocolateSauce} chocolate sauce pumps: $${
          (chocolateSauce - 2) * 0.5
        }`
      );
    }
    return this;
  }

  setBreakfast(breakfast?: Breakfast) {
    if (breakfast !== undefined) {
      this.price += 3;
      console.log("Base price for breakfast: $3");
    }
    return this;
  }

  setBreakfastTopping(breakfastTopping?: BreakfastTopping) {
    switch (breakfastTopping) {
      case BreakfastTopping.BUTTER:
      case BreakfastTopping.CREAM_CHEESE:
        this.price += 0.5;
        console.log("Additional butter or cream cheese: $0.5");
        break;
      case BreakfastTopping.EGG:
      case BreakfastTopping.TURKEY:
        this.price += 1;
        console.log("Additional egg or turkey: $1");
        break;
    }
    return this;
  }

  setTax() {
    this.price += this.price * 0.0725;
    console.log(`Tax (7.25%): ${this.price * 0.0725}`);
    return this;
  }

  build() {
    return this.price;
  }
}

function calculatePrice1(
  drinkType: DrinkType,
  drinkSize: DrinkSize,
  whippedCream: boolean
): number {
  if (drinkSize === DrinkSize.LARGE && drinkType === DrinkType.HOT) {
    throw "Large size only for cold and blended drinks";
  }

  return new PriceBuilder()
    .setDrinkSize(drinkSize)
    .setDrinkType(drinkType)
    .setTopping(whippedCream)
    .build();
}

function calculatePrice2(
  drinkType: DrinkType,
  drinkSize: DrinkSize,
  whippedCream: boolean,
  milkType?: MilkType
): number {
  if (drinkSize === DrinkSize.LARGE && drinkType === DrinkType.HOT) {
    throw "Large size only for cold and blended drinks";
  }

  if (drinkType !== DrinkType.MILK_TEA && milkType) {
    throw "Milk variation is only available for milk tea";
  }

  return new PriceBuilder()
    .setDrinkType(drinkType)
    .setDrinkSize(drinkSize)
    .setTopping(whippedCream)
    .setMilkType(milkType)
    .build();
}

function calculatePrice3(
  drinkType: DrinkType,
  drinkSize: DrinkSize,
  whippedCream: boolean,
  milkType?: MilkType,
  chocolateSauce?: number
): number {
  if (drinkSize === DrinkSize.LARGE && drinkType === DrinkType.HOT) {
    throw "Large size only for cold and blended drinks";
  }

  if (drinkType !== DrinkType.HOT && chocolateSauce) {
    throw "Chocolate sauce can only be added for hot drinks";
  }

  if (drinkType !== DrinkType.MILK_TEA && milkType) {
    throw "Milk variation is only available for milk tea";
  }

  return new PriceBuilder()
    .setDrinkType(drinkType)
    .setDrinkSize(drinkSize)
    .setTopping(whippedCream)
    .setMilkType(milkType)
    .setChocolateSauce(chocolateSauce)
    .build();
}

function calculatePrice4(
  drinkType: DrinkType,
  drinkSize: DrinkSize,
  whippedCream: boolean,
  milkType?: MilkType,
  chocolateSauce?: number,
  breakfast?: Breakfast,
  breakfastTopping?: BreakfastTopping
): number {
  if (drinkSize === DrinkSize.LARGE && drinkType === DrinkType.HOT) {
    throw "Large size only for cold and blended drinks";
  }

  if (drinkType !== DrinkType.HOT && chocolateSauce) {
    throw "Chocolate sauce can only be added for hot drinks";
  }

  if (drinkType !== DrinkType.MILK_TEA && milkType) {
    throw "Milk variation is only available for milk tea";
  }

  if (
    breakfast === Breakfast.SANDWICH &&
    (breakfastTopping === BreakfastTopping.BUTTER ||
      breakfastTopping === BreakfastTopping.CREAM_CHEESE)
  ) {
    throw "Butter or cream cheese only applied for bagel";
  }

  if (
    breakfast === Breakfast.BAGEL &&
    (breakfastTopping === BreakfastTopping.EGG ||
      breakfastTopping === BreakfastTopping.TURKEY)
  ) {
    throw "Egg or Turkey only applied for sandwich";
  }

  return new PriceBuilder()
    .setDrinkType(drinkType)
    .setDrinkSize(drinkSize)
    .setTopping(whippedCream)
    .setMilkType(milkType)
    .setChocolateSauce(chocolateSauce)
    .setBreakfast(breakfast)
    .setBreakfastTopping(breakfastTopping)
    .build();
}



function calculatePrice5(
  drinkType: DrinkType,
  drinkSize: DrinkSize,
  whippedCream: boolean,
  milkType?: MilkType,
  chocolateSauce?: number,
  breakfast?: Breakfast,
  breakfastTopping?: BreakfastTopping
): number {
  if (drinkSize === DrinkSize.LARGE && drinkType === DrinkType.HOT) {
    throw "Large size only for cold and blended drinks";
  }

  if (drinkType !== DrinkType.HOT && chocolateSauce) {
    throw "Chocolate sauce can only be added for hot drinks";
  }

  if (drinkType !== DrinkType.MILK_TEA && milkType) {
    throw "Milk variation is only available for milk tea";
  }

  if (
    breakfast === Breakfast.SANDWICH &&
    (breakfastTopping === BreakfastTopping.BUTTER ||
      breakfastTopping === BreakfastTopping.CREAM_CHEESE)
  ) {
    throw "Butter or cream cheese only applied for bagel";
  }

  if (
    breakfast === Breakfast.BAGEL &&
    (breakfastTopping === BreakfastTopping.EGG ||
      breakfastTopping === BreakfastTopping.TURKEY)
  ) {
    throw "Egg or Turkey only applied for sandwich";
  }

  return new PriceBuilder()
    .setDrinkType(drinkType)
    .setDrinkSize(drinkSize)
    .setTopping(whippedCream)
    .setMilkType(milkType)
    .setChocolateSauce(chocolateSauce)
    .setBreakfast(breakfast)
    .setBreakfastTopping(breakfastTopping)
    .setTax()
    .build();
}
console.log(
  calculatePrice5(
    DrinkType.BLENDED,
    DrinkSize.EXTRA_LARGE,
    true,
    undefined,
    undefined,
    Breakfast.SANDWICH,
    BreakfastTopping.EGG
  )
);