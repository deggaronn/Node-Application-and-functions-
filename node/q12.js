function print(x){
    key=console.log((Object.keys(x)));
    value=console.log(Object.values(x));
    return (key,value);
}
print({a: 1, b: 2, c: 3});