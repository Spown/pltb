setInterval(()=>{
    !this._tick && (this._tick = 0)
    console.log(++this._tick)
}, 1000);