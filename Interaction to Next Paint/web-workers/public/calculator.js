console.log('called')
onmessage=function(message){
    console.log('message',message);
    let count = 0;
    for (let i = 0; i < 10000000000; i++) {
      count += 1;
    }
    postMessage(count)
}