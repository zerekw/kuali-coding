/**
 * Manages requests for elevators and sends appropriate elevator to the requested floor.
 */
class ElevatorControl {
  constructor (config = {}) {
    this.minFloor = 1
    this.maxFloor = config.floors
    this.elvatorCount = config.elevatorCount
    this.elevators = []

    // Init elevators
    this.initElevators(this.elvatorCount)
    this.findClosestElevator = this.findClosestElevator.bind(this);
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

  // check for elevator on that floor first
  // Check for moving elevators
  // check for closest elevator
  findClosestElevator (floorRequest) {
    let currentClosest = {
      index: null,
      diff: this.maxFloor
    }
    this.elevators.forEach((elevator, i) => {
      const floorDiff = Math.abs(elevator.currentFloor - floorRequest)
      if (
        elevator.currentFloor === floorRequest ||
        this.elevatorWillPassFloor(floorRequest, elevator.destinationFloor, elevator.direction) ||
        floorDiff < currentClosest.diff
      ) {
        currentClosest = {
          index: i,
          diff: floorDiff
        }
      }
    })
    this.sendElevator(floorRequest, currentClosest.index)
  }

  // Check if elevator will pass by provided floor
  elevatorWillPassFloor (floor, destinationFloor, direction) {
    if (
      (destinationFloor > floor && direction === 'up') ||
      (destinationFloor < floor && direction === 'down')
    ) {
      return true
    }
    return false
  }

  // Handles a floor requesting an elevator
  handleRequest (requestingFloor) {
    console.log('findClosestElevator')
  }

  // Sends an elevator to a given floor
  sendElevator (destinationFloor, elevatorIndex) {
    this.elevators[elevatorIndex].goToFloor(destinationFloor)
    console.log('sendElevator')
  }
}
