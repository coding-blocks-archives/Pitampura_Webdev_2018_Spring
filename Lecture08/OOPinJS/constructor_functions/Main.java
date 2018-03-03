class Main {
  String name;
  String shortName = name.charAt(0);
  static String x;

  class Aux () {
    void useThis () {
      System.out.println(this);
    }
  }
  
  Main(String name) {
    this.name = name;
  }
  String getName() {
    Aux aux = new Aux();
    aux.useThis();
    return this.name;
  }

  static String sayHello() {
    return "Hello" + this;
  }
}

Main m = new Main();
m.getName();