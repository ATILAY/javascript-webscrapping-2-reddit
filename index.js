const reddit = require('./reddit');


(async ()=>{
    try{
    await  reddit.initialize('node');

    let results = await reddit.getResults(10);

    console.log(results);
    }catch(e){ console.log(e)};
    debugger;
})();