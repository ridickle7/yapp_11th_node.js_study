class myClass{    
    constructor(name){
        this.name = name;
    }
    get getName(){			// getter 함수
        return this.name;
    }

    set setName(eleName){   // setter 함수
        this.name = eleName;
    }
}

var instance = new myClass('class');

//getter은 일반 getter에 ()만 빼고 입력
console.log(instance.getName);

// setter은 값에 직접 대입하듯이 입력
instance.setName = 300000;
console.log(instance.getName);