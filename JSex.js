class Terminator {
  constructor(name, model, hp) {
    this.name = name;
    this.model = model;
    this.hp = hp;
  }
  heal() {
    console.log(`I have heal and this is the new hp:${this.hp + 50}`);
  }
  kill() {
    console.log(`I have kill ${this.model}`);
  }

  SelfDestroy() {
    console.log(`${this.model} will self destroy in 10 seconds`);
  }
}
const robot = new Terminator("Robot 1", "T100", 1000);
const robot1 = new Terminator("Robot 2", "T200", 3000);
const robot2 = new Terminator("Robot 3", "T300", 5000);

console.log(robot);
robot.heal();
robot1.kill();
console.log(robot2);
robot2.SelfDestroy();
