/**
 * Elevators are meant to be "dumb". They go to a floor and open/close their doors.
 */
class Elevator {
  constructor (config) {
    this.id = config.id
    this.currentFloor = 1
    this.maxFloor = config.maxFloor
    this.minFloor = 1
    this.destinationFloor = null
    // floors to stop at if moving
    // could probably change `destinationFloor` to `destinationFloors` and have only 1 variable to worry about
    this.stops = []
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
      this.moveInterval = setInterval(this.moveFloor, 10000)
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
    this.floorsPassed = this.floorsPassed + 1
    this.reportCurrentFloor()
    if (this.currentFloor === this.destinationFloor) {
      this.stopMoving();
    }
  }

  stopMoving () {
    this.destinationFloor = null
    clearInterval(this.moveInterval)
    this.moveInterval = null
    this.trips = this.trips + 1
    this.toggleDoor()
  }

  reportCurrentFloor () {
    console.log(`Elevator ${this.id} arrived at floor ${this.currentFloor}`)
  }

  // After 100 trips elevator will go into maintenance mode
  enterMaintanceMode() {

  }

}
