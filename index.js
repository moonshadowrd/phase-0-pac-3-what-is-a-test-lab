const name = "Susan";
const height = 39;
const message = `${name} is ${height} inches tall`;

describe("Height", () => {
    it("is less than 40", () => {
      expect(height).toBeLessThan(40);
    });
  });
  
module.exports = {name, height, message};
