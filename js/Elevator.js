class Elevator {
  constructor (config) {
    this.id = config.id
    this.currentFloor = 1
    this.maxFloor = config.maxFloor
    this.minFloor = 1
    this.destinationFloor = null
    this.trips = 0
    this.floorsPassed = 0
    this.doorOpen = false
    this.moveInterval = null
    // Could also be a boolean but using a string for clarity
    this.direction = Elevator.DIRECTIONS.up

    this.moveFloor = this.moveFloor.bind(this);
    this.toggleDoor = this.toggleDoor.bind(this);
  }

  static DIRECTIONS = {
    up: 'up',
    down: 'down'
  }

  // Send this elevator to a destination floor.
  goToFloor (destinationFloor) {
    console.log(`Elevator ${this.id} moving to floor ${destinationFloor}`)
    // Dont' move and open doors if request is for current floor
    if (destinationFloor === this.currentFloor) {
        this.toggleDoor()
        return
    }

    // set destination floor.
    this.destinationFloor = destinationFloor
    this.setDirection()

    if (!this.moveInterval) {
      this.moveInterval = setInterval(this.moveFloor, 100)
    }
  }

  setDirection () {
    if (this.destinationFloor > this.currentFloor) {
      this.direction = Elevator.DIRECTIONS.up
    }
    else {
      this.direction = Elevator.DIRECTIONS.down
    }
  }

  // Open or close elevator doors
  toggleDoor () {
    if (this.doorOpen) {
      console.error('Door Closing')
      this.doorOpen = false 
    }
    else {
      console.error('Door Opening')
      this.doorOpen = true
      setTimeout(this.toggleDoor, 1000)
    }
  }

  // Move the elevator to the next floor
  moveFloor () {
    const movementVector = this.direction === Elevator.DIRECTIONS.up ? 1 : -1
    const nextFloor = this.currentFloor + (movementVector)
    // dont move beyond our boundaries
    if (nextFloor >= this.maxFloor || nextFloor <= this.minFloor) {
      this.stopMoving();
    }
    this.currentFloor = nextFloor;
    this.reportCurrentFloor()
    if (this.currentFloor === this.destinationFloor) {
      this.stopMoving();
    }
  }

  stopMoving () {
    this.destinationFloor = null
    clearInterval(this.moveInterval)
    this.moveInterval = null
    this.toggleDoor()
  }

  reportCurrentFloor () {
    console.log(`Elevator ${this.id} arrived at floor ${this.currentFloor}`)
  }

}
