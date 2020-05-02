let Experience = {
  render: async () => {
    let view = /*html*/ `
        <div class="contentBox" id="content">
        <div class="header-container">
          <h2 id="h2-Equ">Experience</h2>
        </div>
        <div class="exp-content">
          <div class="Exp-box">
            <div class="img-container">
              <img src="../../imgs/logo_card.png" alt="avatar" class="company-pic" />
            </div>
  
            <h1>Hasu LLC.</h1>
            <span class="small">November 2019 - present</span>
          </div>
          <div class="about-content">
            <p class="p-base">
              Developed front-end portion of an engineering company’s mobile
              application using flutter framework with Android Studio IDE and Dart
              language. Application implementation for both IOS and Android
              platforms.
            </p>
          </div>
        </div>
  
        <div class="exp-content">
          <div class="Exp-box">
            <div class="img-container">
              <img
                src="../../imgs/AmgenL.jpg"
                style="height: 110px; width: 250px;"
                alt="avatar"
                class="company-pic"
              />
            </div>
            <h1>
              Amgen Manufacturing Ltd
            </h1>
            <span class="small">June 2018 - March 2019</span>
          </div>
          <div class="about-content">
            <p class="p-base">
              Designed a generic function inside an Allen Bradley PLC using
              Rockwell Automation RSLogix5000’s ladder logic to calculate the
              exposure time of a steaming cleaning process using a lethality
              formula, having a total savings of 50% in steam consumption or
              approximately $70k per campaign.
            </p>
            <p class="p-base">
              Developed a Java application which consisted in parsing, segregating
              and filtering multiple sets of data from an XML file and TXT file to
              a SQL Server Database. Additionally, the application had a graphical
              user interface which was created in eclipse EE 2019 software. Also,
              the application followed Amgen’s standards in the login verification
              process. The graphical user interface also let the user view the
              data sent to the SQL Database.
            </p>
          </div>
        </div>
  
        <div class="exp-content">
          <div class="Exp-box">
            <div class="img-container">
              <img
                src="../../imgs/MGlogo.png"
                style="height: 80px; width: 250px;"
                alt="avatar"
                id="mgLogo"
              />
            </div>
            <h1>
              Morillo Group LLC.
            </h1>
            <span class="small"> May 2017 - June 2017</span>
          </div>
          <div class="about-content">
            <p class="p-base">
              Worked together with an Automation Engineering Consultant in the
              design and virtualization process of an obsoleted PC with Windows XP
              machine to a Windows 7. Complete Industrial PC and UPS installation
              was performed in electrical control panel. Tests were performed to
              qualify machinery operation.
            </p>
          </div>
        </div>
  
        <div style="margin: 80px;"></div>
      </div>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Experience;
