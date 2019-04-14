// writing class to keep track of time

function StopWatch(){
    let startTime,endTime,running,duration = 0


    this.start = function(){
        if(running){
            throw new Error('Timer already started')
        }
        startTime = new Date()
        running = true;
    }

    this.stop = function(){
        if(!running){
            throw new Error('Timer already stopped')
        }
        running = false;
        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function(){
        startTime = null
        endTime = null
        running = false   
        duration = 0   
    }

    Object.defineProperty(this,'duration', {
     get : function(){
         return duration
     }
    }
    )
}

var timer = new StopWatch()