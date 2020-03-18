class ElevatorControl {
  constructor (config = {}) {
    this.minFloor = 1
    this.maxFloor = config.floors
    this.elvatorCount = config.elevatorCount
    this.elevators = []
    this.movingElevators = []

    // Init elevators
    this.initElevators(this.elvatorCount)
  }

  initElevators (elevatorCount) {
    for (let x = 0; x < elevatorCount; x++) {
      let elevator = new Elevator({
        id: this.elevators.length,
        maxFloor: this.maxFloor
      })
      this.elevators.push(elevator)
    }
  }

  findClosestElevator (floorRequest) {
    let currentClosest = {
      index: null,
      diff: this.maxFloor
    }
    this.elevators.forEach((elevator, i) => {
      const floorDiff = Math.abs(elevator.currentFloor - floorRequest)
      if (floorDiff < currentClosest.diff) {
        currentClosest = {
          index: i,
          diff: floorDiff
        }
      }
    })
    this.sendElevator(floorRequest, currentClosest.index)
  }

  handleRequest (requestingFloor) {
    console.log('findClosestElevator')
  }

  sendElevator (destinationFloor, elevatorIndex) {
    this.elevators[elevatorIndex].goToFloor(destinationFloor)
    console.log('sendElevator')
  }

}
