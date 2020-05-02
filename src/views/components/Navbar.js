let Navbar = {
  render: async () => {
    let view = /*html*/ `
        <header  class="nav-down">

        <img id="logo1" src="../../imgs/JMlogo2.png">
    
    
        <input type="checkbox" id="chk" onclick="checkedX()">
        <label for="chk" class="show-menu-btn">
            <i class="fas fa-bars"></i>
        </label>
    
        <ul class="menu1">
    
            <a href="/#/">Home</a>
            <a href="/#/experience">Experience</a>
            <!--<a href="/">Store</a> -->
            <a id="contact" href="/#/contact">Contact</a>
        </ul>
    </header>
    
    
    
    <ul class="menu2" id="nav-menu">
    
        <a href="/#/">Home</a>
        <a href="/#/experience">Experience</a>
        <!-- <a href="/">Hobbies</a> -->
        <!--<a href="/">Store</a> -->
        <a id="contact" href="/#/contact">Contact</a>
        <label for="chk" class="hide-menu-btn">
            <i class="fas fa-times" style="color: white;"></i>
        </label>
    </ul>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
