// primitives store values
let x = 10
y = x

x = 20
// x != y

//objects store references
x = {
    value : 20
}
y = x

value = 10

// x == y


x['age'] = 30

delete x.value // OR x['age']

function Circle(radius){
    this.radius = radius

    let location = {
        x : 1,
        y : 2
    }

    Object.defineProperty(this, 'defaultLcoation',{
        get : function(){
            return location
        },
        set : function(value){
            if(!value.x || !value.y){
                throw new Error('Value is well defined')
            }
            location = value
        }
    })

    this.draw = function(){
        console.log(`radius of this circle is : ${this.radius}`)
    }
}

const circle = new Circle(10)
circle.draw()
for(let key in circle){
    if(typeof(circle[key]) !== 'function'){
        console.log(key,circle[key])
    }
}

const keys = Object.keys(circle)
console.log(keys)
if('radius' in circle){
    console.log('circle has radius')
}

circle.defaultLcoation = 1