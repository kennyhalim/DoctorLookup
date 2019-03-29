import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import Doctor from './doctor';

$(document).ready(function() {
  $('#searchBySpecialty').click(function(event) {
    event.preventDefault();
    let specialty = $('#specialty').val();
    let doctorSearch = new Doctor();
    let promise = doctorSearch.getDoctorBySpecialty(specialty);
    $('#intro').hide();
    $('#searching').show();
    promise.then(function(response) {
      let body = JSON.parse(response);

      $("#sentence").text(`Doctors that specialize in ${specialty} are:`);
      $('#searching').hide();
      $('#result').show();
      $('#reload').show();
      body.data.forEach(function(dat){
        $("#specialtyResult").append('<li>' + dat.profile.title + '. ' + dat.profile.first_name + ' ' + dat.profile.last_name + '<ul>' + '<li>' + '<strong>Phone Number: </strong>' + dat.practices[0].phones[0].number + '</li>'+ '<li>' + '<strong>Address: </strong>' + dat.practices[0].visit_address.street + ',' + dat.practices[0].visit_address.city + ',' + dat.practices[0].visit_address.state + ',' + dat.practices[0].visit_address.zip + '</li>'+ '<li>' + '<strong>Accept New Patients? </strong>' + dat.practices[0].accepts_new_patients + '</li>' + '</ul>'+'</li>');
      });
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#searchByName').click(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let doctorSearch = new Doctor();
    let promise = doctorSearch.getDoctorByName(name);
    $('#intro').hide();
    $('#searching').show();

    promise.then(function(response) {
      let body = JSON.parse(response);

      $("#sentence").text(`Doctors with the name of ${name} are:`);
      $('#searching').hide();
      $('#reload').show();
      $('#result').show();
      body.data.forEach(function(dat){
        $("#specialtyResult").append('<li>' + dat.profile.title + '. ' + dat.profile.first_name + ' ' + dat.profile.last_name + '<ul>' + '<li>' + '<strong>Phone Number: </strong>' + dat.practices[0].phones[0].number + '</li>'+ '<li>' + '<strong>Address: </strong>' + dat.practices[0].visit_address.street + ',' + dat.practices[0].visit_address.city + ',' + dat.practices[0].visit_address.state + ',' + dat.practices[0].visit_address.zip + '</li>'+ '<li>' + '<strong>Accept New Patients? </strong>' + dat.practices[0].accepts_new_patients + '</li>' + '</ul>'+'</li>');
      });
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#searchAllDoctors').click(function(event) {
    event.preventDefault();
    let doctorSearch = new Doctor();
    let promise = doctorSearch.getAllDoctors();
    $('#intro').hide();
    $('#searching').show();

    promise.then(function(response) {
      let body = JSON.parse(response);

      $("#sentence").text(`Doctors with the name of ${name} are:`);
      $('#searching').hide();
      $('#reload').show();
      $('#result').show();

      body.data.forEach(function(dat){
        $("#specialtyResult").append('<li>' + dat.profile.title + '. ' + dat.profile.first_name + ' ' + dat.profile.last_name + '<ul>' + '<li>' + '<strong>Phone Number: </strong>' + dat.practices[0].phones[0].number + '</li>'+ '<li>' + '<strong>Address: </strong>' + dat.practices[0].visit_address.street + ',' + dat.practices[0].visit_address.city + ',' + dat.practices[0].visit_address.state + ',' + dat.practices[0].visit_address.zip + '</li>'+ '<li>' + '<strong>Accept New Patients? </strong>' + dat.practices[0].accepts_new_patients + '</li>' + '</ul>'+'</li>');
      });
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#mainMenu').click(function(){
    location.reload();
  });
});
