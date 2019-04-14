console.log('OOPs basics')

// OOPs practice

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },

    draw : function() {
        console.log('Drawing First Circle')
    }
}

circle.draw()


//Factory Fucntion : use of return keyword
function createCirlce(radius){
    return {
        radius,
        draw : function(){
            console.log('Drawing second Circle')
        }
    }
}

const circle2 = createCirlce(1)
circle2.draw()


//Constructor fucntion: use of this and new keyword while calling this function
function Circle(radius){
    this.radius = radius
    this.draw = function (){
        console.log('drawing third circle')
    }
}

const circle3 = new Circle(2)
circle3.draw()


//Every object in JS has .constructor property
console.log(circle3.constructor) // need to directly run on console
//returns function as this was used with new keyword 

console.log(circle.constructor)
//this returns new object which is default constructor

//others are
new Number()
new Boolean()
new String()

//Every function is also an object of Function()
//above circle can also be like
const circle4 = new Function('radius',`
this.radius = radius
this.draw = function (){
    console.log('drawing fourth circle')
}
`)
const circle5 = new circle4(1)

//each function has call() which basically calls constructor? and use provided second args for constructor
// second is apply similar to call, learn!!!