const sum = require('./sum');

test('cuando sumo 2 y 2 debe ser 4 ', () => {
  expect(sum(2, 2)).toBe(4);
});


  test('cuando sumo 11 y 7 debe ser 18 ', () => {
    expect(sum(11, 7)).toBe(18);
  });


  test('cuando sumo 9 y 10 debe ser 19 ', () => {
    expect(sum(9, 10)).toBe(19);
  });
  

  test('cuando sumo 3 y 0 debe ser 3 ', () => {
    expect(sum(3, 0)).toBe(3);
  });
  
