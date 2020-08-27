const rankTest = require('ava');
const {voyageRisk,voyageProfitFactor} = require('../src/rank')

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('voyageRisk case 1 test. should return 3 when voyageRisk given voyage length = 5 and voyage zone  = 1234', t => {
    //when
    const voyage = {
        length: 5,
        zone: '1234'
    };
    //given
    const result = voyageRisk(voyage);
    //then
    t.is(result, 3)
});

rankTest('voyageRisk case 2 test. should return 5 when voyageRisk given voyage length = 10 and voyage zone  = 1234', t => {
  //when
  const voyage = {
      length: 10,
      zone: '1234'
  };
  //given
  const result = voyageRisk(voyage);
  //then
  t.is(result, 5)
});

rankTest('voyageRisk case 3 test. should return 7 when voyageRisk given voyage length = 7 and voyage zone  = east-indies', t => {
  //when
  const voyage = {
      length: 7,
      zone: 'east-indies'
  };
  //given
  const result = voyageRisk(voyage);
  //then
  t.is(result, 7)
});

rankTest('voyageRisk case 4 test. should return 9 when voyageRisk given voyage length = 10 and voyage zone  = east-indies', t => {
  //when
  const voyage = {
      length: 10,
      zone: 'east-indies'
  };
  //given
  const result = voyageRisk(voyage);
  //then
  t.is(result, 9)
});

rankTest('voyageProfitFactor case 1 test. should return 2 when voyageProfitFactor given voyage zone 123 and history.length = 1 and voyage.length = 1', t => {
  //when
  const voyage = {
      zone: '123',
      length: 1
  };
  const history = {
      length: 1
  };
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 2);
});
