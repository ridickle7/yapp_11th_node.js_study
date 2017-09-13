var example = function () {
    setTimeout(function () {
        setTimeout(function () {
            console.log('1');
            setTimeout(function () {
                console.log('2');
                setTimeout(function () {
                    console.log('3');
                }, 2000);
            }, 1000);
        }, 2000);
    }, 1000);
}

example();
