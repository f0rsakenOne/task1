export {};
function truncateString(text:string,limit:number):string{
return text.substring(0,limit);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
