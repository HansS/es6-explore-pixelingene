function customFormatter(config) {
    "use strict";

    var context = prepareContext();

    var config = normalizeConfig(config);

    callCount++;

    return transformValueFn(context, config);
}

//////////////////////////

if ((age > 0 && age < 20) ||
    gamer.isFirstTime ||
    _.any(adNetworks, function (n) { return gamer.network === n; }) ||
    _.any(specialAchievements, function (ach) { return gamer.lastAchievement === ach; })) {

    showSpecialOffer();

}


var isTeenager = (age > 0 && age < 20),
    isFirstTimeGamer = gamer.isFirstTime,
    isPartOfAdNetwork = _.any(adNetworks, function (n) {
        return gamer.network === n;
    }),
    hasSpecialAchievement = _.any(specialAchievements, function (ach) {
        return gamer.lastAchievement === ach;
    });

if (isTeenager || isFirstTimeGamer ||
    isPartOfAdNetwork || hasSpecialAchievement) {

    showSpecialOffer();
}

////////////////////////////////


function expandTemplate(symbol, sector, closingPrice, percentChange) {
    "use strict";

    /* ... */
}

function expandTemplate(config) {
    "use strict";

    /* ... */
}

////////////////

function createEntity(context) {
    "use strict";

    return {
        price: formatPrice(context.price),
        symbol: context.symbol,
        bloombergFunction: identifyBBGFunction(context)
    };


    // Utility functions
    function formatPrice(ctx) { /* ... */ }

    function identifyBBGFunction(ctx) { /* ... */ }
}

/////////////////////////////

var html = '<div class="button-set">' +
    '<span class="button">OK</span>' +
    '<span class="button">Apply</span>' +
    '<span class="button">Cancel</span>' +
    '</div>';


var html = [
    '<div class="button-set">',
    '<span class="button">OK</span>',
    '<span class="button">Apply</span>',
    '<span class="button">Cancel</span>',
    '</div>'
].join('');

////////////////////////////

function showWeatherView(condition) {

    if (condition === 'sunny') showView('sunny-01');
    else if (condition === 'partly sunny') showView('sunny-02');
    else if (condition === 'cloudy') showView('cloudy-01');
    else if (condition === 'rain') showView({type: 'rain-01', style: 'dark'})
}


function showWeatherView(condition) {

    var viewMap = {
        'sunny': 'sunny-01',
        'partly sunny': 'sunny-02',
        'cloudy': 'cloudy-01',
        'rain': {type: 'rain-01', style: 'dark'}
    };

    showView(viewMap[condition]);
}

///////////////////

function fn1() {
    console.log('fn1');
    return true;
}

function fn2() {
    console.log('fn2');
    return false;
}

function fn3() {
    console.log('fn3');
    return true;
}

switch (true) {
    case fn1() && fn2():
        break;

    case fn2():
        break;

    case fn3():
        break;
}
