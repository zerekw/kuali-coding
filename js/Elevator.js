class Elevator {
  constructor (config) {
    this.id = config.id
    this.currentFloor = 1
    this.maxFloor = config.maxFloor
    this.trips = 0
  }

  static minFloor = 1

  goToFloor (destinationFloor) {
    console.log('handleFloorChange')
  }

  toggleDoor () {
    console.log('handleFloorChange')
  }

  moveFloor () {

  }

}
