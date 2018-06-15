class HelloWorld {
  greet() {
    return 'Hello World';
  }
}

let obj = new HelloWorld();

document.getElementById('result').innerHTML = "<h1>" + obj.greet() + "</h1>";