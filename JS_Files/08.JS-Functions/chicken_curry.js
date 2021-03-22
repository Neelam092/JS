// prepare chicken curry with
let glassBowl = function(rawChicken,masala){
    //marinating the chicken
    let marinatedChicken;
    marinatedChicken = `MIXING : (${rawChicken} + ${masala})`;
    return marinatedChicken;
};
let cookingBowl = function(marinatedChicken, water){
    //cooking logic
    let cookedChicken ;
    cookedChicken=`COOKING : (${marinatedChicken} + ${water})`;
    return cookedChicken;
};
let eatingPlate = function(cookedChicken,rice){
    //eating logic
    let eating =`EATING : (${cookedChicken} + ${rice})`;
    console.log(eating);
};
let rawChicken = '3 kg chicken';
let masala = 'Garlic, Pepper , salt';
let marinatedChicken = glassBowl(rawChicken , masala);
let water = '1Ltr water';
let cookedChicken = cookingBowl(marinatedChicken , water);
let rice = '1kg Rice';
eatingPlate(cookedChicken , rice);
