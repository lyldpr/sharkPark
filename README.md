# sharkPark
the shark in the park

Due to the limited amount of parking spots available in Charleston, drivers waste time searching for available parking spots, which then leads to environmental pollution and wasted money. In order to solve this problem, this app provides a secure smart parking system using the Ethereum blockchain technology that gives drivers quick and easy access to parking spots available from private owners in any area. [Insert name here] is an app that connects drivers to available parking spots in private garages and parking lots. Our app emphasizes security by utilizing the Ethereum blockchain to ensure secure authentication. The functionality of the app is simple, clean, and fast. Once a user inputs their location, our app will search through a database of parking garages/lots that are available from a private owner near their current location. The app gets the number of vacant parking spots from IoT sensors, which are used to determine how many spots are available in each lot/garage. The available spots in a certain garage/lot are sent to the database, which contains the number and location of vacant/occupied parking spots, in real-time. This is done using Ethereum blockchain in order to provide a clearly marked ledger of who is occupying and has vacated the parking garage/lot. Any vacant spots are sent back to the user through the app, along with the time, distance from the user's current location, and pricing.

Things to work on:

Ethereum Blockchain Integration: smart contracts for validating which users are parking and which slots they have parked at.
  The blockchain should be pretty straightforward as there are many tutorials, even from ethereum themselves, detailing how to set up and use smart contracts in an app. These smart contracts will be used for real-time data from users of the app, so that the app can keep track of which slots are vacant and which slots are in use.

Amazon Web Services Database: data storage to keep track of all parking spots that are available within the application.
  The database will obviously not be able to hold real data yet since we haven't set up any contracts with actual parking lots/garages. For the purposes of this project, the data can be fabricated for now. Later if the application progresses, we will replace this made-up, created data with parking lots/garages across charleston. Another option is to research APIs from parking garages (if they exist) and we can use this data instead.

Graphical User Interface: this will use the smart contracts and check them against the database, returning all vacant parking spots to the user.
  The GUI will need to be integrated with some sort of sorting list, sorting the list of vacancies by price for parking, distance from the user, and the time available for that specific parking spot.
