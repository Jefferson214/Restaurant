function showDescription(id) {
  var descriptions = document.querySelectorAll('.description');
  descriptions.forEach(function(desc) {
    desc.style.opacity = '0';
  });
  var currentDesc = document.getElementById('desc-' + id);
  currentDesc.style.opacity = '1';
  alert("Restaurant " + id + " clicked!"); 
}
