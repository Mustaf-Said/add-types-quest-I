type DogsInfo = {
    color : string;
    name : string;
}

export const numberOfColors = (vovo: DogsInfo[]) => {
      // Samla alla färger
      let getDogsColor =  vovo.map(getColor => getColor.color)
      //Räkna unika färger med ett Set
   let unikColor = new Set(getDogsColor)
      return unikColor.size
 };


export const commonColor = (obj: DogsInfo[]) => {
 // Skapa en färgräknare
 const colorCount: Record<string, number> = {};

 // Räkna förekomster av varje färg
 obj.forEach((dog) => {
   colorCount[dog.color] = (colorCount[dog.color] || 0) + 1;
 });

 // Hitta färgen med flest förekomster
 let mostCommonColor = "";
 let maxCount = 0;

 for (const [color, count] of Object.entries(colorCount)) {
   if (count > maxCount) {
     maxCount = count;
     mostCommonColor = color;
   }
 }

 return mostCommonColor;
  
}
