class Elevator {
  constructor (config) {
    this.id = config.id
    this.currentFloor = 1
    this.destinationFloor = null
    this.trips = 0
    this.doorOpen = false
  }

  // Send this elevator to a destination floor.
  goToFloor (destinationFloor) {
    console.log('handleFloorChange')
  }

  // Open or close elevator doors
  toggleDoor () {
    console.log('handleFloorChange')
  }

  // Move the elevator to the next floor
  moveFloor () {

  }

}
