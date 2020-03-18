class ElevatorControl {
  constructor (config = {}) {
    this.minFloor = 1
    this.maxFloor = config.floors
    this.elvatorCount = config.elevatorCount
    this.elevators = []

    // Init elevators
    this.initElevators(this.elvatorCount)
  }

  initElevators (elevatorCount) {
    for (let x = 0; x < elevatorCount; x++) {
      let elevator = new Elevator({
        id: this.elevators.length
      })
      this.elevators.push(elevator)
    }
  }

  findClosestElevator (floor) {
    console.log('findClosestElevator')
  }

  handleRequest (requestingFloor) {
    console.log('findClosestElevator')
  }

  sendElevator (destinationFloor) {
    console.log('sendElevator')
  }

}
