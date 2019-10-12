/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
      focus = 'family', 
      knowsProgramming = true,
      config = {family: 4}
    ) {
      const TIMETOMASTER = 800;
      const TIMEFORBASICS = 500;
      let requiredTime = (knowsProgramming) ? TIMETOMASTER : TIMEFORBASICS + TIMETOMASTER;

      return Math.ceil(requiredTime/config[focus]);
    };
  