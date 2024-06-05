import moment from 'moment';

/**
 * Generates a random timestamp string with a length of 17 digits.
 * 
 * @returns {string} The random timestamp string.
 * @example
 * // Returns "20240602160116949"
 * generateRandomTimestamp();
 */
export function generateRandomTimestamp() {
    const now = new Date();
  
    // Ambil komponen tanggal dan waktu
    const year = now.getFullYear().toString().padStart(4, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Bulan dari 0-11, jadi ditambah 1
    const date = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    
    // Tambahkan angka acak untuk mencapai panjang 17 digit
    const randomExtra = Math.floor(Math.random() * 1e7).toString().padStart(7, '0');
    
    // Gabungkan semua komponen menjadi satu string
    const randomTimestamp = `${year}${month}${date}${hours}${minutes}${seconds}${milliseconds}${randomExtra}`;
    
    // Potong string untuk memastikan panjangnya 17 digit
    return randomTimestamp.slice(0, 17);
}

/**
 * Adds the specified number of days to a given date.
 * 
 * @param {Date} date - The date to which the days will be added.
 * @param {number} days - The number of days to add.
 * @returns {Date} The new date after adding the specified number of days.
 */
export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Checks if a reserved date is valid by comparing it with the current date.
 * 
 * @param {string} reservedDate - The reserved date in the format 'YYYY-MM-DD'.
 * @param {number} addDate - The number of days to add to the reserved date.
 * @returns {boolean} True if the reserved date plus the addDate is after the current date, false otherwise.
 */
export function isValidReservedDate(reservedDate, addDate) {
    const currentDate = moment().format('YYYY-MM-DD');
    let isValid = true;
    if (moment(reservedDate).add(addDate, 'days').isBefore(currentDate)) {
      isValid = false;
    }
    return isValid;
}