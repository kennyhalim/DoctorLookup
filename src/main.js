import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import Doctor from './doctor';

$(document).ready(function() {
  $('#searchBySpecialty').submit(function(event) {
    event.preventDefault();
    let specialty = $('#specialty').val();


    let doctorSearch = new Doctor();
    let promise = doctorSearch.getDoctorBySpecialty(specialty);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      console.log(body.data.profile);
      $("#test").text(`The doctors that specializes in ${specialty} is ${body.data[0].profile.first_name}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
