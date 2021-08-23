const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    eatCookie: function () {
        console.log("I am eating " + this.name)
    }
};

//Properties in a object work just as any other variable. We can assign values to then at any time.
cookie.name = "Cinnamon Cookie";
cookie.isGlutenFree = true;

// console.log(cookie);
// console.log(cookie["+Yummy"])

//Calling function stored in object
cookie.eatCookie();

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("I am eating " + this.name);
    }
}

const myCookie = new Cookie("Ice Oatmeal", false);

console.log(myCookie);
console.log(myCookie.name);

//Calling function stored in class
myCookie.eatCookie();