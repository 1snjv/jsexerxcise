let mytodos={
    "day":'monday',
    "meetings":0,
    "meetings_done":0,

    addmeeting:function (meet=0) {
        this.meetings+=meet
    },
    
    remove:function (meet=0) {
        this.meetings_done=meet
        this.meetings-=meet
    },
    
    summary:function () {
        console.log(this)
        // console.log(`you have ${this.meetings} meetings left`)
    },
}


// mytodos.addmeeting()
console.log(mytodos.meetings)
console.log(mytodos.meetings_done)

mytodos.summary()
