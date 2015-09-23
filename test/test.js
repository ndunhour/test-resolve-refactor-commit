var expect = chai.expect;
var should = chai.should();
mocha.setup('bdd');



describe('sumOfSquare', function() {
  sumOfSquare(5);
  it('should be a function', function() {
    expect(sumOfSquare).to.be.a('function');
  });
  it('should take a number for a parameter', function() {
    number.should.equal('number');
  });
  it('should create a empty array', function() {
    expect([]).to.be.empty;
  });
  it('should be the sum of the square root of the number 1 to the given number', function() {
    sumOfSquare(5).should.be.equal(8.38233234744);
  });
});


mocha.run();