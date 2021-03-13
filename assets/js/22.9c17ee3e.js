(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(e,t,o){"use strict";o.r(t);var a=o(18),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"administration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#administration"}},[e._v("#")]),e._v(" Administration")]),e._v(" "),o("p",[e._v("After launching FlyDog SDR, the site information will be the default state and will need to be modified by the user.")]),e._v(" "),o("h2",{attrs:{id:"login-to-administration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#login-to-administration"}},[e._v("#")]),e._v(" Login to Administration")]),e._v(" "),o("p",[e._v("To login to the administration, simply add "),o("code",[e._v("/admin")]),e._v(" to the address you are visiting.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_1.png",alt:"flydog-sdr:8073/admin",title:"flydog-sdr:8073/admin"}})]),e._v(" "),o("p",[e._v("Using "),o("code",[e._v("flydog-sdr:8073")]),e._v(" as an example, to get to the administration, the URL would look like this.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("http://flydog-sdr:8073/admin\n")])])]),o("p",[e._v("After entering the default password "),o("code",[e._v("flydog-sdr")]),e._v(" for the admin login, press Enter to login to the administration.")]),e._v(" "),o("h2",{attrs:{id:"change-default-password"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#change-default-password"}},[e._v("#")]),e._v(" Change Default Password")]),e._v(" "),o("p",[e._v("Since the initial password for the FlyDog SDR backend is "),o("code",[e._v("flydog-sdr")]),e._v(", it can be easily hacked, so you should change the default password after logging into the backend.")]),e._v(" "),o("p",[e._v("Switch the tab to Security and change the default password in the Admin password section to a different password, as shown here.")]),e._v(" "),o("p",[e._v("For tips on how to set a password, see the article: "),o("a",{attrs:{href:"https://www.bbc.co.uk/news/technology-34221843",target:"_blank",rel:"noopener noreferrer"}},[e._v("BBC: How to pick the perfect password"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_2.png",alt:"Change admin password",title:"Change admin password"}})]),e._v(" "),o("p",[e._v("After changing the password, press Enter to take effect.")]),e._v(" "),o("p",[e._v("The next time you log in to the FlyDog SDR administration, please use the new password.")]),e._v(" "),o("h2",{attrs:{id:"set-user-password"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-user-password"}},[e._v("#")]),e._v(" Set User Password")]),e._v(" "),o("p",[e._v("If you do not want to make your SDR site public, but only share it with friends, you can set a user password for the site.")]),e._v(" "),o("p",[e._v("Switch the tab to Security and enter a guest password "),o("strong",[e._v("different from the administration password")]),e._v(" in the User password field and press Enter to save, as shown in the image.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_3.png",alt:"Set user password",title:"Set user password"}})]),e._v(" "),o("p",[e._v("From now on, when other users access this SDR site, they will need to enter the user password before they can use it.")]),e._v(" "),o("p",[e._v("The user password is not a administration password, so you can tell this password to others.")]),e._v(" "),o("h2",{attrs:{id:"select-fpga-modes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-fpga-modes"}},[e._v("#")]),e._v(" Select FPGA modes")]),e._v(" "),o("p",[e._v("The FlyDog SDR offers 4 FPGA modes, so you can choose the right one to suit your needs.")]),e._v(" "),o("p",[e._v("Switch the tab to Mode, select the FPGA mode and follow the instructions on the page to restart the application.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_4.png",alt:"Select FPGA mode",title:"Select FPGA mode"}})]),e._v(" "),o("p",[e._v("The different FPGA modes have their own characteristics, the general differences are as follows.")]),e._v(" "),o("ul",[o("li",[e._v("Kiwi calssic: traditional reception mode, four users for four spectrums")]),e._v(" "),o("li",[e._v("More receivers: up to 8 users can be online at the same time, the first two users (rx1, rx2) can view the spectrum")]),e._v(" "),o("li",[e._v("More bandwidth: users can listen to broadcasts with a larger bandwidth (20 kHz) for better sound quality, three users for three spectrums")]),e._v(" "),o("li",[e._v("MCORE rx14_wf0: up to 14 users can be online at the same time, no spectrum viewing, no extensions")])]),e._v(" "),o("h2",{attrs:{id:"control-flydog-sdr"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#control-flydog-sdr"}},[e._v("#")]),e._v(" Control FlyDog SDR")]),e._v(" "),o("p",[e._v("By switching the tab to Control, the user has simple control over the FlyDog SDR, such as restarting the FlyDog SDR, forcing users to go offline, etc.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_5.png",alt:"Control FlyDog SDR",title:"Control FlyDog SDR"}})]),e._v(" "),o("ul",[o("li",[e._v("KiwiSDR server restart: restart the application")]),e._v(" "),o("li",[e._v("Daily restart: When set to Yes, the server will be restarted daily")]),e._v(" "),o("li",[e._v("Enable user connections: when set to No, FlyDog SDR will reject any incoming connections")]),e._v(" "),o("li",[e._v("Close all active user connections: force all users connected to FlyDog SDR to go offline")]),e._v(" "),o("li",[e._v("Number of simultaneous channels available for connection by non-Kiwi apps: the maximum number of connections allowed for third party apps")]),e._v(" "),o("li",[e._v("Disable waterfalls/spectrum: disables spectrograms")]),e._v(" "),o("li",[e._v("Reason if disabled: when Enable user connections is set to No, shows the user the reason why the site is down, can use HTML tags")]),e._v(" "),o("li",[e._v("Inactivity time limit: time limit for incoming users, 0 is no limit")]),e._v(" "),o("li",[e._v("24hr per-IP addr time limit: time limit for incoming IPs, 0 is no limit")]),e._v(" "),o("li",[e._v("Time limit exemption password: password to bypass the time limit")])]),e._v(" "),o("h2",{attrs:{id:"externally-connect-to-flydog-sdr"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#externally-connect-to-flydog-sdr"}},[e._v("#")]),e._v(" Externally Connect to FlyDog SDR")]),e._v(" "),o("p",[e._v("There are several ways to connect to the FlyDog SDR externally, but the different ways also require the user to be on a different network.")]),e._v(" "),o("p",[e._v("Switching the tab to Connect allows the user to specify the relevant method of access to the FlyDog SDR, and the user can set up various ways of accessing the FlyDog SDR.")]),e._v(" "),o("p",[e._v("For more information and instruction on how to open FlyDog SDR to the public network, please refer to "),o("a",{attrs:{href:"https://sdrotg.com/en/manual/public.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("next chapter"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_6.png",alt:"Incoming connection settings",title:"Incoming connection settings"}})]),e._v(" "),o("h2",{attrs:{id:"modify-initialisation-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modify-initialisation-parameters"}},[e._v("#")]),e._v(" Modify Initialisation Parameters")]),e._v(" "),o("p",[e._v("Switching the tab to Config allows the user to modify the relevant initialisation parameters according to local conditions. This parameter also determines the default settings that FlyDog SDR presents to the user when a new connection is passed in.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_7.png",alt:"Initial values",title:"Initial values"}})]),e._v(" "),o("p",[e._v("For normal users, the following values can be changed.")]),e._v(" "),o("ul",[o("li",[e._v("Frequency (kHz): initial frequency")]),e._v(" "),o("li",[e._v("Mode: Broadcast mode (AM, SSB, CW, etc.)")]),e._v(" "),o("li",[e._v("Colormap: colour scheme of the spectrum map (set according to your preference)")]),e._v(" "),o("li",[e._v("Max receiver frequency: the frequency range received by the FlyDog SDR (up to 62 MHz)")]),e._v(" "),o("li",[e._v("ITU region: ITU region (according to the user's country)")]),e._v(" "),o("li",[e._v("Initial AM BCB channel spacing: Medium wave step unit (9 kHz, 10 kHz)")])]),e._v(" "),o("h2",{attrs:{id:"modify-site-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modify-site-information"}},[e._v("#")]),e._v(" Modify Site Information")]),e._v(" "),o("p",[e._v("The Webpage tab allows the user to modify the information that the site displays to visitors when they visit the site.")]),e._v(" "),o("p",[e._v("Some forms can use HTML tags (e.g. hyperlinks) when modifying information.")]),e._v(" "),o("ul",[o("li",[e._v("Top bar title: the main title of the page, you can use HTML tags")]),e._v(" "),o("li",[e._v("Owner info: information about the administrator, HTML tags can be used")]),e._v(" "),o("li",[e._v("Status: Site status, located in the dashboard tab, HTML tags can be used")]),e._v(" "),o("li",[e._v("Window/tab title: browser title")]),e._v(" "),o("li",[e._v("Location: site location")]),e._v(" "),o("li",[e._v("Grid square: coordinates of the Maidenhead grid")]),e._v(" "),o("li",[e._v("Altitude: altitude, set automatically by GPS")]),e._v(" "),o("li",[e._v("Map: site coordinates")]),e._v(" "),o("li",[e._v("Photo file: photo uploaded by the user")]),e._v(" "),o("li",[e._v("Photo maximum height: the maximum height of the photo, in pixels (px)")]),e._v(" "),o("li",[e._v("Photo title: photo title")]),e._v(" "),o("li",[e._v("Photo description: description of the photo")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_8.png",alt:"Site information",title:"Site information"}})]),e._v(" "),o("h2",{attrs:{id:"check-serial-number"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#check-serial-number"}},[e._v("#")]),e._v(" Check Serial Number")]),e._v(" "),o("p",[e._v("If there is a problem with the device during use and you need to contact the after-sales service, please provide the unique serial number assigned to the FlyDog SDR at the time of sale.")]),e._v(" "),o("p",[e._v("The serial number can be obtained in the administration page.")]),e._v(" "),o("p",[e._v("Switch the tab to Network and locate the four digits after the KiwiSDR serial number, which is the serial number of the FlyDog SDR device.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_9.png",alt:"KiwiSDR serial number",title:"KiwiSDR serial number"}})]),e._v(" "),o("h2",{attrs:{id:"using-the-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-console"}},[e._v("#")]),e._v(" Using the Console")]),e._v(" "),o("p",[e._v("If you need to perform certain operations on the FlyDog SDR in the terminal, you can use the console service provided by the backend administration.")]),e._v(" "),o("p",[e._v("If you are using the console outside the local network, you will need to go to the Security tab and set Restrict console connections to the local network to No.")]),e._v(" "),o("p",[e._v("Switching the tab to Console and pressing Connect will allow you to enter the relevant Linux commands to operate on the system where the FlyDog SDR is located.")]),e._v(" "),o("p",[e._v("However, because FlyDog SDR uses container isolation technology, the actions performed by the user in the console in the background are not performed on the host computer, which ensures a certain degree of security.")]),e._v(" "),o("p",[e._v("In addition, all changes made by the user in the console will be reset when the application is upgraded.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/manual/admin_10.png",alt:"Console",title:"Console"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);