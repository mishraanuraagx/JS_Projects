
        // Comments
        console.log('Hello World!')
        let name = 'Anuraag'
        console.log(name)


        //Objects
        let person = {
                name : name,
                age : 30
        }

        // Dot Notation
        person.name = "Mary"
        console.log(person)

        // Bracket Notation
        person['name'] = "Tom"
        console.log(person)


        //Arrays

        let colors = ['orange', 'red']
        console.log(colors)
        console.log(colors[2])
        colors[2] = 'green'
        colors[3] = 1
        console.log(colors[2])


        //Functions

        function Greet(name, lastname){
                console.log('Hello ' + name + ' ' + lastname)
        };

        Greet('Anuraag','Mishra')