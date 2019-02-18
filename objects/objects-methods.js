let restaurant = {
    name : 'Arbys',
    guestCapacity : 75,
    guestCount : 0,
    checkAvailability : function(partySize) {

        let availablity = this.guestCapacity - this.guestCount

        if (availablity <= partySize ) {
            return false
        } else {
            return true
        }
    },
    seatParty : function(seatSize) {
        this.guestCount = this.guestCount + seatSize
    },
    removeParty : function(removeSize) {
        this.guestCount = this.guestCount - removeSize
    }
}

status = restaurant.checkAvailability(50)
restaurant.seatParty(50)
console.log(status)
restaurant.removeParty(50)
status = restaurant.checkAvailability(50)
console.log(status)

