
//1st question
console.log('Hello world');
console.log('something went wrong');
console.log(new Error('something went wrong'));

//2nd question
const os=require('os');
console.log(os.arch());
for(const cpu of os.cpus())
{
    console.log(cpu);
}
console.log(os.uptime());
console.log(os.platform());

//3rd question
const fs=require('fs');
// function hi() {
//     const str = 'a';
//     if (str) {
//         console.log(true);
//         return;
//     }
//     console.log('hi');
// }
//
// hi();
fs.readFile('test.txt',(err,data)=>{//readfile asynchronous operation,
    // fs module support synchronous operation as well.
    //default read file operation is read file
    //can have encoding option after path

    //err=null=> false
    //err=undefined=>  false
    //err=0 =>false
    //err='' => false
    //err=false => false
    if(err)//err is an exception object
    {
        console.log(err);
        return; //if condition executes console.log statement wont be executed because of return;
    }

    //console.log(data.toString());//data is buffer so i used toString
});

const data=fs.readFileSync('test.txt');//synchronous operation
//console.log(data.toString());


//4th question
const readStream =fs.createReadStream('test.txt');
const writeStream =fs.createWriteStream('test-copy.txt');
readStream.addListener('end',()=>{
    console.log('end of file read');
});

writeStream.addListener('close',()=>{
    console.log('end of file write');
    console.log(fs.readFileSync('test-copy.txt','utf-8'));


});


readStream.pipe(writeStream);//directing readstream to outputstream


//5th question
const http=require('http');
http.createServer((req, res) =>{
    res.setHeader('content-type','text/html');
    switch (req.method)
    {
        case 'GET':
            res.write('<h1>Hello world</h1>');
            res.end();
            break;

        case 'POST':
            req.on('data',data=>{
                res.write('<h1>Hello'+data+'</h1>');
                res.end();
            });
            break;

        case 'PUT':
            req.on('data',data=>{
                res.write('<h1>Hello'+data+'</h1>');
                res.end();
            });
            break;
    }

} ).listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('server is listening to port 3000');
});





