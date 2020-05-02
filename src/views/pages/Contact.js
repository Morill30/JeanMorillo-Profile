let Contact = {
  render: async () => {
    return /*html*/ `
        <div class="contentBox">
        <div class="header-container">
          <h2 id="h2-contact">Contact me</h2>
        </div>
        <div id="contact-container">
          <div class="contact-info">
            <h3>Personal Email</h3>
            <a class="contacts" href="mailto:morillo30@gmail.com"
              >morillo30@gmail.com</a
            >
          </div>
          <div class="contact-info">
            <h3>Personal Phone Number</h3>
            <a class="contacts" href="tel:787">Ask via email</a>
          </div>
  
          <div class="contact-info">
            <h3>Polytechnic University Location</h3>
            <a
              class="contacts"
              href="https://www.google.com/maps/place/Polytechnic+University+of+Puerto+Rico/@18.4223343,-66.0581026,17z/data=!4m12!1m6!3m5!1s0x8c0368a30313bf69:0xf3fa70c3d532761!2sPolytechnic+University+of+Puerto+Rico!8m2!3d18.4223343!4d-66.0559139!3m4!1s0x8c0368a30313bf69:0xf3fa70c3d532761!8m2!3d18.4223343!4d-66.0559139"
              >377 Ponce de Leon, San Juan, 00918</a
            >
          </div>
        </div>
      </div>
      <div id="location-container">
        <h3>Some Location</h3>
        <!--The div element for the map -->
        <div id="map"></div>
      </div>
        `;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted
  after_render: async () => {
    let script1 = document.createElement("script");
    script1.src = "../../services/map.js";
    let script2 = document.createElement("script");
    script2.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpY5jlEqXGXSgyAvIcADkkQHv6KFcdWqo&callback=initMap";
    script2.async = false;
    script2.defer = true;
    document.body.append(script1);
    document.body.append(script2);
  },
};

export default Contact;
