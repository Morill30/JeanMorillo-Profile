// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `https://5bb634f6695f8d001496c082.mockapi.io/api/posts`,
      options
    );
    const json = await response.json();
    // console.log(json)
    return json;
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

let Home = {
  render: async () => {
    let view = /*html*/ `
            <div class="contentBox">
            <div class="header-container">
              <h2>
                Hey, I'm Jean Morillo <span style="color: rgb(22, 161, 241);">!</span>
              </h2>
            </div>
            <div class="about-content">
              <p class="text">
                Computer Engineering Student
              </p>
              <a href="https://github.com/Morill30"
                ><i class="fab fa-github gray"></i
              ></a>

              <a href=" https://www.linkedin.com/in/jean-morillo-30">
                <i class="fab fa-linkedin gray"></i
              ></a>
              <a href="mailto:morillo30@gmail.com">
                <i class="fab fa-google gray"></i
              ></a>
            </div>

            <div class="profile-container">
              <div class="white-image-crop">
                <div class="image-cropper">
                <img src="../../imgs/ME-Pic2.png" alt="avatar" class="profile-pic" />
                <!-- <img src="https://picsum.photos/200/300" alt="some" class="profile-pic" />-->

                </div>
              </div>

              <div class="text-box">
                <p class="text small">
                  College undergraduate with a strong Software Development background
                  and multiple real world experience. Always thriving to learn new
                  things about the new world technologies and trying to optimize
                  everything I can.
                </p>

                <p class="text small" style="padding-top: 15px;">
                  For more about me you can connect with me on linkedIn or even check
                  my github repository, which is still in progress to have more of my
                  personal projects.
                </p>
              </div>
            </div>

            <br />
            <div class="profile-container" style="margin-top: 0px;">
              <h2 class="Education-Container">Education</h2>

              <div class="logo-container">
                <div id="logo2-cont">
                  <img
                    id="logo2"
                    src="../../imgs/LogoPUPR1.png"
                    alt="PUPR Logo"
                  />
                </div>
                <div class="content-education">
                  <p class="small-header">BEng Computer Engineering</p>
                  <hr style="margin: 5px; border: 1px solid rgb(22, 161, 241);" />
                  <p class="text small">August 2015 - Octuber 2020</p>
                  <p class="text small">Polytechnic University of Puerto Rico.</p>
                </div>
              </div>
            </div>
            <p id="content-container">My skills include</p>
            <ul class="about-ul">
              <li>Mobile Development with Flutter framework.</li>
              <li>Web Application development.</li>
              <li>Scripting applications.</li>
              <li>Automation.</li>
              <li>Hardware programming with VHDL.</li>
            </ul>
            <footer>
            <p class="small">
              Precision solutions can help you solve your most challenging
              applications using the custom engineering solutions of our integrated
              solutions team.
            </p>
          </footer>

          </div>

        `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
