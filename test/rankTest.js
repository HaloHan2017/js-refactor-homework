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

rankTest('voyageProfitFactor case 2 test. should return 3 when voyageProfitFactor given voyage zone 123 and history.length = 10 and voyage.length = 2', t => {
  //when
  const voyage = {
      zone: '123',
      length: 2
  };
  const history = {
      length: 10
  };
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 3);
});

rankTest('voyageProfitFactor case 3 test. should return 1 when voyageProfitFactor given voyage zone 123 and history.length = 3 and voyage.length = 16', t => {
  //when
  const voyage = {
      zone: '123',
      length: 16
  };
  const history = {
      length: 3
  };
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 1);
});

rankTest('voyageProfitFactor case 4 test. should return 2 when voyageProfitFactor given voyage zone 123 and history.length = 10 and voyage.length = 16', t => {
  //when
  const voyage = {
      zone: '123',
      length: 16
  };
  const history = {
      length: 10
  };
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 2);
});

rankTest('voyageProfitFactor case 5 test. should return 2 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 1 and voyage.length = 1', t => {
  //when
  const voyage = {
      zone: 'china',
      length: 1
  };
  const history = [{
      zone: 'china',
      length: 1
  }];
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 6);
});

rankTest('voyageProfitFactor case 6 test. should return 7 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 11 and voyage.length = 1', t => {
  //when
  const voyage = {
      zone: 'china',
      length: 1
  };
  const history = [
      {
          zone: 'china',
          length: 1
      },{
          zone: 'china',
          length: 2
      },{
          zone: 'china',
          length: 3
      },{
          zone: 'china',
          length: 4
      },{
          zone: 'china',
          length: 5
      },{
          zone: 'china',
          length: 6
      },{
          zone: 'china',
          length: 7
      },{
          zone: 'china',
          length: 8
      },{
          zone: 'china',
          length: 9
      },{
          zone: 'china',
          length: 10
      },{
          zone: 'china',
          length: 11
      }
  ];
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 7);
});

rankTest('voyageProfitFactor case 7 test. should return 7 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 1 and voyage.length = 13', t => {
  //when
  const voyage = {
      zone: 'china',
      length: 13
  };
  const history = [
      {
          zone: 'china',
          length: 1
      }
  ];
  //given
  const result = voyageProfitFactor(voyage, history);
  //when
  t.is(result, 7);
});