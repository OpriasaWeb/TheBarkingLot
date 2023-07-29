# The Barking Lot

Designed a program for The Barking Lot - a dog-boarding facility. Design a flowchart or psuedocode for a program that accepts contract data and displays a completed contract ready for a client's signature.

Accept the following as input:
  Contract number

  Dog owner's first and last name

  Dog's name

  Dog's weight

  Month, day, and year of the first day of boarding

  Number of days for boarding

  Indicators of whether selected option include a daily walk, a daily ice cream treat, and a bath on the last boarding day

Display output as follows:

If the contract number is not between 10000 and 99999 inclusive, issue an error message and end the program.

If the reunion date is invalid, issue an error message and end the program. (In other words, make sure the month is between 1 and 12 inclusive. If the month is 1, 3, 5, 7, 8, 10, or 12, the day must be between 1 and 31 inclusive. If the month is 2, the day must be between 1 and 28 inclusive. You do not need to check for leap years. If the month is 4, 6, 8, or 11, the day must be between 1 to 30 inclusive.)

The indicator values for walking, treat, and bath options must be "Y" or "N" (for "Yes" or "No"); otherwise, display an error message and assume "N".

Display all the entered data along with the total fee for boarding, which is calculated as follows:
  $15 per day base price

  An additional $4 per day for dogs over 50 pounds; an additional $7 per day for dogs over 100 pounds

  Additional fees include $3 per day for a walk, $1 per day for ice cream, and $20 for a bath on the last boarding day. If the client selects walks and treats, provide one treat for free. If the client selects walks, treats, and a bath provide one walk for free.
