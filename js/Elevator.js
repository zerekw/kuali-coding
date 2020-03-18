class Elevator {
  constructor (config) {
    this.id = config.id
    this.currentFloor = 1
    this.destinationFloor = null
    this.trips = 0
    this.floorsPassed = 0
    this.doorOpen = false
    this.moveInterval = null
    // Could also be a boolean but using a string for clarity
    this.direction = Elevator.DIRECTIONS.up
  }

  static DIRECTIONS = {
    up: 'up',
    down: 'down'
  }

  // Send this elevator to a destination floor.
  goToFloor (destinationFloor) {
    // set destination floor.
    this.destinationFloor = destinationFloor

    if (!this.moveInterval) {
      this.moveInterval = setInterval(this.moveFloor, 100)
    }
  }

  setDirection (destinationFloor) {
    if (destinationFloor > this.currentFloor) {
      this.direction = Elevator.DIRECTIONS.up
    }
    else {
      this.direction = Elevator.DIRECTIONS.down
    }
  }

  // Open or close elevator doors
  toggleDoor () {
    if (this.doorOpen) {
      console.log('Door Closing')
    }
    else {
      console.log('Door Opening')
      setTimeout(this.toggleDoor, 100)
    }
  }

  // Move the elevator to the next floor
  moveFloor () {
    console.log('Moving Floor')
    debugger;
    const movementVector = this.direction === Elevator.DIRECTIONS.up ? 1 : -1
    console.log(movementVector)
    this.currentFloor = this.currentFloor + (movement)
    // this.reportCurrentFloor()
    console.log(this.currentFloor)
    if (this.currentFloor === this.destinationFloor) {
        this.destinationFloor = null
        clearInterval(this.moveInterval)
        this.toggleDoor()
    }
  }

  reportCurrentFloor () {
    consolr.log(`Elevator ${this.id} arrived at floor ${this.currentFloor}`)
  }

}
