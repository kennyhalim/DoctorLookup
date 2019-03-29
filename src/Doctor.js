export default class Doctor {
  // getAllDoctors() {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=47.608013%2C%20-122.335167%2C100&user_location=47.608013%2C%20-122.335167&skip=0&limit=40&user_key=0ac855b6f31857a09146df3ee3cc317d`;
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(Error(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }

  getDoctorBySpecialty(specialty) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${specialty}&location=47.608013%2C%20-122.335167%2C100&user_location=47.608013%2C%20-122.335167&skip=0&limit=1&user_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  //
  // getDoctorByName(name) {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.608013%2C%20-122.335167%2C100&user_location=47.608013%2C%20-122.335167&skip=0&limit=40&user_key=0ac855b6f31857a09146df3ee3cc317d`;
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(Error(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }
}
