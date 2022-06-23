interface Bird {
    eat(): void
}

interface FlyingBird {
    fly(): void
}

interface RunningBird {
    run(): void
}

class Tucan implements FlyingBird, Bird, RunningBird {
    public fly() {}
    public eat() {}
    public run() {}
}

class HuminBird implements FlyingBird, Bird, RunningBird {
    public fly() {}
    public eat() {}
    public run() {}
}

class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
}