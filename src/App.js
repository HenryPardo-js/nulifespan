import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DesktopHomeDashboard from "./components/DesktopHomeDashboard";
import TabletHomeDashboard from "./components/TabletHomeDashboard";
import MobileHomeDashboard from "./components/MobileHomeDashboard";
import DesktopTopRightMenu from "./components/DesktopTopRightMenu";
import TabletMenu from "./components/TabletMenu";
import MobileHamburgerMenu from "./components/MobileHamburgerMenu";
import DesktopMyConnections from "./components/DesktopMyConnections";
import TabletMyConnections from "./components/TabletMyConnections";
import MobileMyConnections from "./components/MobileMyConnections";
import DesktopMySales from "./components/DesktopMySales";
import TabletMySales from "./components/TabletMySales";
import MobileMySales from "./components/MobileMySales";
import DesktopMyTeam from "./components/DesktopMyTeam";
import MobileMyTeam from "./components/MobileMyTeam";
import TabletMyTeam from "./components/TabletMyTeam";
import DesktopTransferGood from "./components/DesktopTransferGood";
import TabletTransferGood from "./components/TabletTransferGood";
import MobileTransferGood from "./components/MobileTransferGood";
import MobileSearchPop from "./components/MobileSearchPop";
import TabletSearchPopUp from "./components/TabletSearchPopUp";
import DesktopSearchPopup from "./components/DesktopSearchPopup";
import DesktopMyProfile from "./components/DesktopMyProfile";
import TabletMyProfile from "./components/TabletMyProfile";
import MobileMyProfile from "./components/MobileMyProfile";
import DesktopUploadAvatar from "./components/DesktopUploadAvatar";
import MobileUploadAvatar from "./components/MobileUploadAvatar";
import TabletUploadAvatar from "./components/TabletUploadAvatar";
import DesktopEditCellNumber from "./components/DesktopEditCellNumber";
import TabletEditCellNumber from "./components/TabletEditCellNumber";
import MobileEditCellNumber from "./components/MobileEditCellNumber";
import DesktopEditEmail from "./components/DesktopEditEmail";
import TabletEditEmail from "./components/TabletEditEmail";
import MobileEditEmail from "./components/MobileEditEmail";
import DesktopTransferError from "./components/DesktopTransferError";
import DesktopMyTimiFiT from "./components/DesktopMyTimiFiT";
import TabletTransferError from "./components/TabletTransferError";
import TabletMyTimiFit from "./components/TabletMyTimiFit";
import MobileTransferError from "./components/MobileTransferError";
import MobileMyTimiFiT from "./components/MobileMyTimiFiT";
import DesktopDashboard from "./components/DesktopDashboard";
import TabletDashboard from "./components/TabletDashboard";
import MobileDashboard from "./components/MobileDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-home-dashboard">
          <DesktopHomeDashboard {...desktopHomeDashboardData} />
        </Route>
        <Route path="/tablet-home-dashboard">
          <TabletHomeDashboard {...tabletHomeDashboardData} />
        </Route>
        <Route path="/mobile-home-dashboard">
          <MobileHomeDashboard {...mobileHomeDashboardData} />
        </Route>
        <Route path="/desktop-top-right-menu">
          <DesktopTopRightMenu
            background="/static/img/background-3@1x.png"
            addFriend2="/static/img/add-friend-2-1@1x.png"
            loremIpsum="Profile"
            path43="/static/img/path-43-1@1x.png"
            dolorSitAmet="Shop"
          />
        </Route>
        <Route path="/tablet-menu">
          <TabletMenu
            tabletMenu="/static/img/tablet-dashboard-dim-screen-1@1x.png"
            background="/static/img/background-3@1x.png"
            addFriend2="/static/img/add-friend-2-1@1x.png"
            loremIpsum="Profile"
            path43="/static/img/path-43-1@1x.png"
            dolorSitAmet="Shop"
          />
        </Route>
        <Route path="/mobile-hamburger-menu">
          <MobileHamburgerMenu mENUProps={mobileHamburgerMenuData.mENUProps} />
        </Route>
        <Route path="/desktop-my-connections">
          <DesktopMyConnections
            background="/static/img/background-4@1x.png"
            nav="/static/img/nav-1x-png@1x.png"
            sidebar="/static/img/sidebar-1x-png@1x.png"
            dashboard="My Connections"
          />
        </Route>
        <Route path="/tablet-my-connections">
          <TabletMyConnections
            background="/static/img/background-10@1x.png"
            nav="/static/img/nav-1-1x-png@1x.png"
            sidebar="/static/img/sidebar-1@1x.png"
            dashboard="My Connections"
          />
        </Route>
        <Route path="/mobile-my-connections">
          <MobileMyConnections
            overlapGroup="/static/img/background-14@1x.png"
            nav="/static/img/nav-2@1x.png"
            projects="/static/img/projects-1x-png@1x.png"
            searchbox="/static/img/searchbox@1x.png"
          />
        </Route>
        <Route path="/desktop-my-sales">
          <DesktopMySales {...desktopMySalesData} />
        </Route>
        <Route path="/tablet-my-sales">
          <TabletMySales {...tabletMySalesData} />
        </Route>
        <Route path="/mobile-my-sales">
          <MobileMySales logo="/static/img/welcometonls-black2-1@1x.png" title22Props={mobileMySalesData.title22Props} />
        </Route>
        <Route path="/desktop-my-team">
          <DesktopMyTeam {...desktopMyTeamData} />
        </Route>
        <Route path="/mobile-my-team">
          <MobileMyTeam
            logo="/static/img/welcometonls-black2-1@1x.png"
            title22Props={mobileMyTeamData.title22Props}
            paginationProps={mobileMyTeamData.paginationProps}
          />
        </Route>
        <Route path="/tablet-my-team">
          <TabletMyTeam {...tabletMyTeamData} />
        </Route>
        <Route path="/desktop-transfer-good">
          <DesktopTransferGood
            desktopTransferGood="/static/img/dashboard-dim-screen-1@1x.png"
            addNewCardPopup2Props={desktopTransferGoodData.addNewCardPopup2Props}
          />
        </Route>
        <Route path="/tablet-transfer-good">
          <TabletTransferGood
            tabletTransferGood="/static/img/tablet-dashboard-dim-screen-1@1x.png"
            addNewCardPopup2Props={tabletTransferGoodData.addNewCardPopup2Props}
          />
        </Route>
        <Route path="/mobile-transfer-good">
          <MobileTransferGood {...mobileTransferGoodData} />
        </Route>
        <Route path="/mobile-search-pop">
          <MobileSearchPop
            superAdmin="Cancel"
            activeProps={mobileSearchPopData.activeProps}
            buttonWithdrawAllEarningProps={mobileSearchPopData.buttonWithdrawAllEarningProps}
          />
        </Route>
        <Route path="/tablet-search-pop-up">
          <TabletSearchPopUp />
        </Route>
        <Route path="/desktop-search-popup">
          <DesktopSearchPopup />
        </Route>
        <Route path="/desktop-my-profile">
          <DesktopMyProfile {...desktopMyProfileData} />
        </Route>
        <Route path="/tablet-my-profile">
          <TabletMyProfile {...tabletMyProfileData} />
        </Route>
        <Route path="/mobile-my-profile">
          <MobileMyProfile {...mobileMyProfileData} />
        </Route>
        <Route path="/desktop-upload-avatar">
          <DesktopUploadAvatar {...desktopUploadAvatarData} />
        </Route>
        <Route path="/mobile-upload-avatar">
          <MobileUploadAvatar
            addFriend2="/static/img/add-friend-2-6@1x.png"
            inputBox="UPLOAD AVATAR"
            inputHere1="No File Chosen"
            inputHere2="Updates to your Avatar make a few minutes before you see them."
            inputHere3="Choose File"
            changeProfilePicture="Change Profile Picture"
            buttonWithdrawAllEarningProps={mobileUploadAvatarData.buttonWithdrawAllEarningProps}
          />
        </Route>
        <Route path="/tablet-upload-avatar">
          <TabletUploadAvatar {...tabletUploadAvatarData} />
        </Route>
        <Route path="/desktop-edit-cell-number">
          <DesktopEditCellNumber />
        </Route>
        <Route path="/tablet-edit-cell-number">
          <TabletEditCellNumber group21Props={tabletEditCellNumberData.group21Props} />
        </Route>
        <Route path="/mobile-edit-cell-number">
          <MobileEditCellNumber
            saveChanges="Save Changes"
            superAdmin="Cancel"
            activeProps={mobileEditCellNumberData.activeProps}
          />
        </Route>
        <Route path="/desktop-edit-email">
          <DesktopEditEmail />
        </Route>
        <Route path="/tablet-edit-email">
          <TabletEditEmail group22Props={tabletEditEmailData.group22Props} />
        </Route>
        <Route path="/mobile-edit-email">
          <MobileEditEmail
            saveChanges="Save Changes"
            superAdmin="Cancel"
            activeProps={mobileEditEmailData.activeProps}
          />
        </Route>
        <Route path="/desktop-transfer-error">
          <DesktopTransferError
            overlapGroup3="/static/img/dashboard-dim-screen-1@1x.png"
            addNewCardPopupProps={desktopTransferErrorData.addNewCardPopupProps}
          />
        </Route>
        <Route path="/desktop-my-timifit">
          <DesktopMyTimiFiT {...desktopMyTimiFiTData} />
        </Route>
        <Route path="/tablet-transfer-error">
          <TabletTransferError
            overlapGroup3="/static/img/tablet-dashboard-dim-screen-1@1x.png"
            addNewCardPopupProps={tabletTransferErrorData.addNewCardPopupProps}
          />
        </Route>
        <Route path="/tablet-my-timifit">
          <TabletMyTimiFit
            dashboard="My TimiFIt"
            icon="/static/img/icon-10@1x.png"
            profile="/static/img/arrow-10@1x.png"
            searchbox22Props={tabletMyTimiFitData.searchbox22Props}
            iconsProps={tabletMyTimiFitData.iconsProps}
            sIDEBAR2Props={tabletMyTimiFitData.sIDEBAR2Props}
          />
        </Route>
        <Route path="/mobile-transfer-error">
          <MobileTransferError {...mobileTransferErrorData} />
        </Route>
        <Route path="/mobile-my-timifit">
          <MobileMyTimiFiT dashboard="My TimiFIt" />
        </Route>
        <Route path="/:path(|desktop-dashboard)">
          <DesktopDashboard {...desktopDashboardData} />
        </Route>
        <Route path="/tablet-dashboard">
          <TabletDashboard {...tabletDashboardData} />
        </Route>
        <Route path="/mobile-dashboard">
          <MobileDashboard {...mobileDashboardData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const search21Data = {
    vector2: "/static/img/vector-102@1x.png",
    className: "",
};

const searchbox1Data = {
    search2Props: search21Data,
};

const dashboard11Data = {
    dashboard1: "/static/img/vector-12@1x.png",
};

const x011Data = {
    dashboard1Props: dashboard11Data,
};

const thumbnail11Data = {
    className: "",
};

const users1Data = {
    thumbnail1Props: thumbnail11Data,
};

const dEFAULTSTATE1Data = {
    defaultState: "/static/img/path-39@1x.png",
    projectsCompleted: "PURCHASES",
};

const dEFAULTSTATE2Data = {
    projectsCompleted: "/static/img/rectangle-5@1x.png",
    defaultState: "COMMISSIONS",
    className: "tabbed-reports-item",
};

const dEFAULTSTATE3Data = {
    projectsCompleted: "/static/img/rectangle-5@1x.png",
    defaultState: "PAYMENTS",
    className: "tabbed-reports-item",
};

const dEFAULTSTATE4Data = {
    projectsCompleted: "/static/img/rectangle-5@1x.png",
    defaultState: "TEAM ORDERS",
    className: "tabbed-reports-item",
};

const tabbedReports1Data = {
    dEFAULTSTATE1Props: dEFAULTSTATE1Data,
    dEFAULTSTATE2Props: dEFAULTSTATE2Data,
    dEFAULTSTATE3Props: dEFAULTSTATE3Data,
    dEFAULTSTATE4Props: dEFAULTSTATE4Data,
};

const dueDate1Data = {
    children: "New Affiliate",
};

const dueDate2Data = {
    children: "Purchased Product",
    className: "due-date-3",
};

const dueDate3Data = {
    children: "New Distributer",
    className: "due-date-4",
};

const rightbar1Data = {
    dueDate1Props: dueDate1Data,
    dueDate2Props: dueDate2Data,
    dueDate3Props: dueDate3Data,
};

const desktopHomeDashboardData = {
    iconUser: "/static/img/icon-10@1x.png",
    proposal: "/static/img/layer-2-10@1x.png",
    projects: "My Connections",
    contacts: "My Sales",
    myTasks1: "My Team",
    vector2: "/static/img/vector-107@1x.png",
    myTasks2: "My TimiFit",
    overlapGroup21: "/static/img/path-38-1@1x.png",
    yourImageHere: "/static/img/your-image-here-1@1x.png",
    sleepangle: "/static/img/sleepangle-1@1x.png",
    overlapGroup: "/static/img/bg-3@1x.png",
    shopNow: "Shop Now",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    dashboard: "Focus Zone Portal",
    welcome: "Hello ${first_name}, welcome back!",
    yourRewardsCash: "Your Rewards Cash",
    price: "$40.00",
    name: <React.Fragment>Cash out rewards to dollars when you<br />reach 50  - or spend on products now.</React.Fragment>,
    icon: "/static/img/icon-1@1x.png",
    withdraw: "Withdraw",
    overlapGroup3: "/static/img/bg-1@1x.png",
    iconConect: "/static/img/icon-conect@1x.png",
    shop: "Shop",
    overlapGroup1: "/static/img/path-1-1@1x.png",
    yourShareLink: "Your Share Link",
    sampleNulifespanCom: "sample.nulifespan.com",
    shareYourLinkWith: <React.Fragment>Share your link with your friends<br />and family to start earning!</React.Fragment>,
    iconFile: "/static/img/icon-file@1x.png",
    copy: "Copy",
    overlapGroup22: "/static/img/background@1x.png",
    projectsCompleted: "Total Distributers",
    spanText1: "+15%",
    spanText2: " than last month",
    chart2: "/static/img/chart-2@1x.png",
    number1: "38",
    overlapGroup32: "/static/img/background-1@1x.png",
    projectsInProgress: "Downline Orders",
    spanText3: "+15%",
    spanText4: " than last month",
    number2: "38",
    overlapGroup4: "/static/img/background-2@1x.png",
    upcomingProjects: "Page Views",
    bg: "/static/img/bg-2@1x.png",
    circleChart: "/static/img/circle-chart@1x.png",
    percent: "56%",
    spanText5: "+15%",
    spanText6: " than last month",
    number3: "38",
    searchboxProps: searchbox1Data,
    x01Props: x011Data,
    usersProps: users1Data,
    tabbedReportsProps: tabbedReports1Data,
    rightbarProps: rightbar1Data,
};

const search22Data = {
    vector2: "/static/img/vector-102@1x.png",
    className: "search-2-1",
};

const searchbox21Data = {
    search2Props: search22Data,
};

const icons2Data = {
    className: "icons-1",
};

const header21Data = {
    src: "/static/img/group-2-1@1x.png",
};

const dashboard12Data = {
    dashboard1: "/static/img/vector-105@1x.png",
    className: "dashboard-1-2",
};

const dashboard1Data = {
    dashboard1Props: dashboard12Data,
};

const thumbnail12Data = {
    className: "thumbnail-1-1",
};

const dueDate22Data = {
    children: "New Affiliate",
};

const dueDate34Data = {
    className: "due-date-16",
};

const rightbar21Data = {
    dueDate2Props: dueDate22Data,
    dueDate3Props: dueDate34Data,
};

const tabletHomeDashboardData = {
    iconUser: "/static/img/icon-10@1x.png",
    profile: "/static/img/arrow-10@1x.png",
    menu: "MENU",
    proposal: "/static/img/layer-2-10@1x.png",
    users: "/static/img/vector-107@1x.png",
    dashboard: "Focus Zone Portal",
    welcome: "Hello ${first_name}, welcome back!",
    icon: "/static/img/icon-15@1x.png",
    withdraw: "Withdraw",
    overlapGroup1: "/static/img/bg-7@1x.png",
    iconConect: "/static/img/icon-conect-1@1x.png",
    shop: "Shop",
    yourShareLink: "Your Share Link",
    sampleNulifespanCom: "sample.nulifespan.com}",
    shareYourLinkWith: <React.Fragment>Share your link with your friends<br />and family to start earning!</React.Fragment>,
    iconFile: "/static/img/icon-file-1@1x.png",
    copy: "Copy",
    overlapGroup2: "/static/img/background-6@1x.png",
    spanText1: "+15%",
    spanText2: <React.Fragment> <br /></React.Fragment>,
    spanText3: "than last month",
    projectsCompleted1: "Total Distributers",
    number: "4",
    chart2: "/static/img/chart-2-1@1x.png",
    overlapGroup22: "/static/img/background-7@1x.png",
    spanText4: "+15%",
    spanText5: <React.Fragment> <br /></React.Fragment>,
    spanText6: "than last month",
    projectsInProgress: "Downline Orders",
    x182: "11",
    overlapGroup3: "/static/img/background-8@1x.png",
    spanText7: "+15%",
    spanText8: <React.Fragment> <br /></React.Fragment>,
    spanText9: "than last month",
    upcomingProjects: "Page Views",
    x1125: "269",
    chart: "/static/img/bg-8@1x.png",
    overlapGroup4: "/static/img/circle-chart-1@1x.png",
    percent: "56%",
    overlapGroup12: "/static/img/path-38-5@1x.png",
    yourImageHere: "/static/img/your-image-here-5@1x.png",
    sleepangle: "/static/img/sleepangle-5@1x.png",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    path39: "/static/img/path-39-1@1x.png",
    projectsCompleted2: "PURCHASES",
    rectangle5: "/static/img/rectangle-5-1@1x.png",
    projectsCompleted3: "COMMISSIONS",
    rectangle6: "/static/img/rectangle-5-1@1x.png",
    projectsCompleted4: "PAYMENTS",
    rectangle7: "/static/img/rectangle-5-1@1x.png",
    projectsCompleted5: "TEAM ORDERS",
    searchbox2Props: searchbox21Data,
    iconsProps: icons2Data,
    header2Props: header21Data,
    dashboardProps: dashboard1Data,
    thumbnail1Props: thumbnail12Data,
    rightbar2Props: rightbar21Data,
};

const touchBoard1Data = {
    rewardsCash: "REWARDS CASH",
    x0: "$10",
};

const touchBoard2Data = {
    rewardsCash: "THIS MONTH",
    x0: "$82",
    className: "touch-board-4",
};

const touchBoard3Data = {
    rewardsCash: "SHARE LINK",
    x0: "COPY",
    className: "touch-board",
};

const x3ColumnCTACards1Data = {
    touchBoard1Props: touchBoard1Data,
    touchBoard2Props: touchBoard2Data,
    touchBoard3Props: touchBoard3Data,
};

const dEFAULTSTATE22Data = {
    path39: "/static/img/path-39-2@1x.png",
    projectsCompleted: "PURCHASES",
};

const dEFAULTSTATE23Data = {
    path39: "/static/img/rectangle-5-2@1x.png",
    projectsCompleted: "COMMISSIONS",
    className: "report-2",
};

const dEFAULTSTATE24Data = {
    path39: "/static/img/rectangle-5-2@1x.png",
    projectsCompleted: "TEAM ORDERS",
    className: "group-17-1",
};

const tabbedContentMobile1Data = {
    dEFAULTSTATE21Props: dEFAULTSTATE22Data,
    dEFAULTSTATE22Props: dEFAULTSTATE23Data,
    dEFAULTSTATE23Props: dEFAULTSTATE24Data,
};

const mobileHomeDashboardData = {
    logo: "/static/img/welcometonls-black2-1@1x.png",
    dashboard: "Focus Zone Portal",
    welcome: "Hello ${first_name}, welcome back!",
    brandPartnerPresidentClub1: "BRAND PARTNER - PRESIDENT CLUB 1",
    overlapGroup1: "/static/img/background-11@1x.png",
    spanText1: <React.Fragment>+15% <br /></React.Fragment>,
    spanText2: "than last month",
    projectsCompleted: "Total Distributers",
    x4115: "32",
    chart2: "/static/img/chart-2-2@1x.png",
    groupContainer: "/static/img/background-12@1x.png",
    projectsInProgress: "Downline Orders",
    x182: "5",
    spanText3: <React.Fragment>+15% <br /></React.Fragment>,
    spanText4: "than last month",
    overlapGroup4: "/static/img/background-13@1x.png",
    upcomingProjects: "Page Views",
    x1125: "321",
    chart: "/static/img/bg-10@1x.png",
    overlapGroup2: "/static/img/circle-chart-2@1x.png",
    percent: "56%",
    spanText5: <React.Fragment>+15% <br /></React.Fragment>,
    spanText6: "than last month",
    focusuMobile: "/static/img/focusu-mobile@1x.png",
    merchToolsStoreMobile2X: "/static/img/merch-tools-store-mobile-2x@1x.png",
    yourImageHere: "/static/img/your-image-here-6@1x.png",
    nulifespan_AllProductsOnStands1000W: "/static/img/nulifespan-all-products-on-stands1000w2@1x.png",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    x3ColumnCTACardsProps: x3ColumnCTACards1Data,
    tabbedContentMobileProps: tabbedContentMobile1Data,
};

const dashboard13Data = {
    dashboard1: "/static/img/vector-106@1x.png",
    className: "dashboard-1-3",
};

const thumbnail13Data = {
    className: "thumbnail-1-2",
};

const users2Data = {
    thumbnail1Props: thumbnail13Data,
};

const mENUData = {
    menu: "/static/img/background-15@1x.png",
    dashboard: "Dashboard",
    proposal: "/static/img/layer-2-10@1x.png",
    projects: "My Connections",
    contacts: "My Sales",
    myTasks: "My Team",
    setting11: "/static/img/vector-198@1x.png",
    settings1: "My Profile",
    path43: "/static/img/path-43-1@1x.png",
    settings2: "Shop",
    setting12: "/static/img/united-states-1@1x.png",
    settings3: "Language",
    path41: "/static/img/path-41@1x.png",
    settings4: "Log Out",
    dashboard1Props: dashboard13Data,
    usersProps: users2Data,
};

const mobileHamburgerMenuData = {
    mENUProps: mENUData,
};

const search23Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "search-2-2",
};

const searchbox3Data = {
    className: "searchbox-1",
    search2Props: search23Data,
};

const group22Data = {
    className: "group-2-1",
};

const icons3Data = {
    className: "icons-2",
};

const dashboard14Data = {
    dashboard1: "/static/img/vector-12@1x.png",
};

const thumbnail14Data = {
    className: "",
};

const users3Data = {
    thumbnail1Props: thumbnail14Data,
};

const x031Data = {
    usersProps: users3Data,
};

const desktopMySalesData = {
    iconUser: "/static/img/icon-10@1x.png",
    dashboard1: "Dashboard",
    proposal: "/static/img/layer-2-10@1x.png",
    projects: "My Connections",
    myTasks: "My Team",
    overlapGroup3: "/static/img/left-menu-ad1-1@1x.png",
    overlapGroup1: "/static/img/path-38-1@1x.png",
    yourImageHere: "/static/img/your-image-here-1@1x.png",
    sleepangle: "/static/img/sleepangle-1@1x.png",
    overlapGroup: "/static/img/bg-3@1x.png",
    shopNow: "Shop Now",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    dashboard2: "My Sales",
    searchboxProps: searchbox3Data,
    group2Props: group22Data,
    iconsProps: icons3Data,
    dashboard1Props: dashboard14Data,
    x03Props: x031Data,
};

const search24Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "search-2-3",
};

const searchbox221Data = {
    search2Props: search24Data,
};

const icons4Data = {
    className: "icons-3",
};

const header22Data = {
    src: "/static/img/group-2-1@1x.png",
};

const dashboard15Data = {
    dashboard1: "/static/img/vector-105@1x.png",
    className: "dashboard-1-5",
};

const thumbnail15Data = {
    className: "thumbnail-1-4",
};

const kanban1Data = {
    thumbnail1Props: thumbnail15Data,
};

const tabletMySalesData = {
    iconUser: "/static/img/icon-10@1x.png",
    profile: "/static/img/arrow-10@1x.png",
    menu: "MENU",
    proposal: "/static/img/layer-2-10@1x.png",
    users: "/static/img/vector-107@1x.png",
    dashboard: "My Sales",
    searchbox22Props: searchbox221Data,
    iconsProps: icons4Data,
    header2Props: header22Data,
    dashboard1Props: dashboard15Data,
    kanbanProps: kanban1Data,
};

const title221Data = {
    contacts: "My Sales",
};

const mobileMySalesData = {
    title22Props: title221Data,
};

const search25Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "",
};

const searchbox4Data = {
    className: "searchbox-2",
    search2Props: search25Data,
};

const group23Data = {
    className: "group-2-2",
};

const dashboard16Data = {
    dashboard1: "/static/img/vector-12@1x.png",
};

const thumbnail16Data = {
    className: "",
};

const users4Data = {
    thumbnail1Props: thumbnail16Data,
};

const desktopMyTeamData = {
    iconUser: "/static/img/icon-10@1x.png",
    dashboard1: "Dashboard",
    proposal: "/static/img/layer-2-10@1x.png",
    projects: "My Connections",
    contacts: "My Sales",
    overlapGroup3: "/static/img/left-menu-ad1-1@1x.png",
    overlapGroup1: "/static/img/path-38-1@1x.png",
    yourImageHere: "/static/img/your-image-here-1@1x.png",
    sleepangle: "/static/img/sleepangle-1@1x.png",
    overlapGroup: "/static/img/bg-3@1x.png",
    shopNow: "Shop Now",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    dashboard2: "My Team",
    searchboxProps: searchbox4Data,
    group2Props: group23Data,
    dashboard1Props: dashboard16Data,
    usersProps: users4Data,
};

const title222Data = {
    contacts: "My Team",
};

const pagination2Data = {
    className: "pagination-1",
};

const mobileMyTeamData = {
    title22Props: title222Data,
    paginationProps: pagination2Data,
};

const search26Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "search-2-5",
};

const searchbox222Data = {
    search2Props: search26Data,
};

const icons6Data = {
    className: "icons-5",
};

const header23Data = {
    src: "/static/img/group-2-1@1x.png",
};

const dashboard17Data = {
    dashboard1: "/static/img/vector-105@1x.png",
    className: "dashboard-1-7",
};

const thumbnail17Data = {
    className: "thumbnail-1-6",
};

const tabletMyTeamData = {
    iconUser: "/static/img/icon-10@1x.png",
    profile: "/static/img/arrow-10@1x.png",
    menu: "MENU",
    proposal: "/static/img/layer-2-10@1x.png",
    users: "/static/img/vector-107@1x.png",
    dashboard: "My Team",
    searchbox22Props: searchbox222Data,
    iconsProps: icons6Data,
    header2Props: header23Data,
    dashboard1Props: dashboard17Data,
    thumbnail1Props: thumbnail17Data,
};

const buttonCloseCopy22Data = {
    className: "button-close-copy-2",
};

const tabNoteInfo1Data = {
    path1: "/static/img/path-1-2@1x.png",
    path10: "/static/img/path-10-1@1x.png",
    path3: "/static/img/path-3-1@1x.png",
    path4: "/static/img/path-4-1@1x.png",
    path8: "/static/img/path-8-1@1x.png",
};

const buttonSave1Data = {
    children: "Let’s Go",
};

const addNewCardPopup221Data = {
    buttonSaveProps: buttonCloseCopy22Data,
    tabNoteInfoProps: tabNoteInfo1Data,
    buttonSaveProps2: buttonSave1Data,
};

const desktopTransferGoodData = {
    addNewCardPopup2Props: addNewCardPopup221Data,
};

const buttonCloseCopy23Data = {
    className: "button-close-copy-2-1",
};

const tabNoteInfo2Data = {
    path1: "/static/img/path-1-3@1x.png",
    path10: "/static/img/path-10-1@1x.png",
    path3: "/static/img/path-3-2@1x.png",
    path4: "/static/img/path-4-2@1x.png",
    path8: "/static/img/path-8-1@1x.png",
};

const buttonSave2Data = {
    children: "Let’s Go",
};

const addNewCardPopup222Data = {
    className: "tablet-transfer-good",
    buttonSaveProps: buttonCloseCopy23Data,
    tabNoteInfoProps: tabNoteInfo2Data,
    buttonSaveProps2: buttonSave2Data,
};

const tabletTransferGoodData = {
    addNewCardPopup2Props: addNewCardPopup222Data,
};

const buttonCloseCopy24Data = {
    className: "button-close-copy-2-2",
};

const buttonSave3Data = {
    children: "Let’s Go",
    className: "button-save-2",
};

const mobileTransferGoodData = {
    place: "Transfer",
    username: "Username",
    loginname: "${LoginName}",
    beforeYouCanMake: <React.Fragment>Before you can make a transfer/withdrawal, <br />Please make sure you have completed <br />the following steps.</React.Fragment>,
    reachAMinimumOf: <React.Fragment>• Reach a minimum of 50 points/dollars in <br />your available rewards cash balance.</React.Fragment>,
    nulife_2Creditcards: "/static/img/nulife-2creditcards-1@1x.png",
    buttonCloseCopy2Props: buttonCloseCopy24Data,
    buttonSaveProps: buttonSave3Data,
};

const active1Data = {
    inputBox: "SEARCH",
    inputHere: "Enter search term",
};

const buttonWithdrawAllEarning1Data = {
    children: "Search",
};

const mobileSearchPopData = {
    activeProps: active1Data,
    buttonWithdrawAllEarningProps: buttonWithdrawAllEarning1Data,
};

const search27Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "",
};

const searchbox5Data = {
    className: "searchbox-3",
    search2Props: search27Data,
};

const group24Data = {
    className: "group-2-2",
};

const dashboard18Data = {
    dashboard1: "/static/img/vector-12@1x.png",
};

const thumbnail18Data = {
    className: "",
};

const users5Data = {
    thumbnail1Props: thumbnail18Data,
};

const desktopMyProfileData = {
    iconUser: "/static/img/icon-10@1x.png",
    dashboard1: "Dashboard",
    proposal: "/static/img/layer-2-10@1x.png",
    projects: "My Connections",
    contacts: "My Sales",
    myTasks: "My Team",
    overlapGroup3: "/static/img/left-menu-ad1-1@1x.png",
    overlapGroup1: "/static/img/path-38-1@1x.png",
    yourImageHere: "/static/img/your-image-here-1@1x.png",
    sleepangle: "/static/img/sleepangle-1@1x.png",
    overlapGroup: "/static/img/bg-3@1x.png",
    shopNow: "Shop Now",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    dashboard2: "Your Profile",
    welcome: "Hello ${first_name}, welcome back!",
    addFriend2: "/static/img/add-friend-2-2@1x.png",
    superAdmin1: "Change Avatar",
    dashboard3: "Franklin Jr.",
    levelStatusCusto: <React.Fragment>Level Status $CustomerType<br />Sponsor Name: $Enroller_First $Enroller_Last<br />Sponsor ID: $Sponsor_ID</React.Fragment>,
    phone: "${phone}",
    email: "${email}",
    dashboard4: "Your Share Link:",
    webaliasNulifespanCom: "${webalias}.nulifespan.com",
    iconCall: "/static/img/phone-call-1-1@1x.png",
    email21: "/static/img/email--2--1-1@1x.png",
    superAdmin2: "Edit",
    superAdmin3: "Edit",
    line1: "/static/img/line-1@1x.png",
    searchboxProps: searchbox5Data,
    group2Props: group24Data,
    dashboard1Props: dashboard18Data,
    usersProps: users5Data,
};

const search28Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "search-2-7",
};

const searchbox223Data = {
    search2Props: search28Data,
};

const icons8Data = {
    className: "icons-7",
};

const header24Data = {
    src: "/static/img/group-2-1@1x.png",
};

const dashboard19Data = {
    dashboard1: "/static/img/vector-105@1x.png",
    className: "dashboard-1-9",
};

const thumbnail19Data = {
    className: "thumbnail-1-8",
};

const tabletMyProfileData = {
    iconUser: "/static/img/icon-10@1x.png",
    profile: "/static/img/arrow-10@1x.png",
    menu: "MENU",
    proposal: "/static/img/layer-2-10@1x.png",
    users: "/static/img/vector-107@1x.png",
    addFriend2: "/static/img/add-friend-2-2@1x.png",
    superAdmin1: "Change Avatar",
    levelStatusCusto: <React.Fragment>Level Status $CustomerType<br />Sponsor Name: $Enroller_First $Enroller_Last<br />Sponsor ID: $Sponsor_ID</React.Fragment>,
    dashboard1: "Franklin Jr.",
    dashboard2: "Your Share Link:",
    sampleNulifespanCom: "sample.nulifespan.com",
    iconCall: "/static/img/phone-call-1-1@1x.png",
    phone: "Phone:",
    superAdmin2: "Edit",
    email21: "/static/img/email--2--1-1@1x.png",
    email: "Email:",
    superAdmin3: "Edit",
    searchbox22Props: searchbox223Data,
    iconsProps: icons8Data,
    header2Props: header24Data,
    dashboard1Props: dashboard19Data,
    thumbnail1Props: thumbnail19Data,
};

const mobileMyProfileData = {
    logo: "/static/img/welcometonls-black2-1@1x.png",
    contacts: "My Profile",
    addFriend2: "/static/img/add-friend-2-2@1x.png",
    superAdmin1: "Change Avatar",
    dashboard1: "Franklin Jr.",
    levelStatusCusto: <React.Fragment>Level Status $CustomerType<br />Sponsor Name: $Enroller_First $Enroller_Last<br />Sponsor ID: $Sponsor_ID</React.Fragment>,
    iconCall: "/static/img/phone-call-1-2@1x.png",
    phone: "Phone:",
    superAdmin2: "Edit",
    iconMail: "/static/img/email--2--1-2@1x.png",
    email: "Email:",
    superAdmin3: "Edit",
    dashboard2: "Your Share Link:",
    sampleNulifespanCom: "sample.nulifespan.com",
};

const buttonWithdrawAllEarning2Data = {
    children: "Upload",
    className: "button-withdraw-all-earning-10",
};

const desktopUploadAvatarData = {
    desktopUploadAvatar: "/static/img/dashboard-dim-screen-profile@1x.png",
    overlapGroup3: "/static/img/path-42@1x.png",
    changeProfilePicture: "Change Profile Picture",
    inputBox: "UPLOAD AVATAR",
    inputHere1: "No File Chosen",
    inputHere2: "Updates to your Avatar make a few minutes before you see them.",
    inputHere3: "Choose File",
    buttonWithdrawAllEarningProps: buttonWithdrawAllEarning2Data,
};

const buttonWithdrawAllEarning3Data = {
    children: "Upload",
    className: "group-33",
};

const mobileUploadAvatarData = {
    addFriend2: "/static/img/add-friend-2-6@1x.png",
    inputBox: "UPLOAD AVATAR",
    inputHere1: "No File Chosen",
    inputHere2: "Updates to your Avatar make a few minutes before you see them.",
    inputHere3: "Choose File",
    changeProfilePicture: "Change Profile Picture",
    buttonWithdrawAllEarningProps: buttonWithdrawAllEarning3Data,
};

const buttonWithdrawAllEarning4Data = {
    children: "Upload",
    className: "button-withdraw-all-earning-11",
};

const group202Data = {
    className: "group-20-3",
};

const tabletUploadAvatarData = {
    tabletUploadAvatar: "/static/img/tablet-dim-screen-profile@1x.png",
    inputBox: "UPLOAD AVATAR",
    inputHere1: "No File Chosen",
    inputHere2: "Updates to your Avatar make a few minutes before you see them.",
    inputHere3: "Choose File",
    changeProfilePicture: "Change Profile Picture",
    buttonWithdrawAllEarningProps: buttonWithdrawAllEarning4Data,
    group20Props: group202Data,
};

const group212Data = {
    className: "group-21-2",
};

const tabletEditCellNumberData = {
    group21Props: group212Data,
};

const active2Data = {
    inputBox: "MOBILE PHONE",
    inputHere: "xxx-xxx-xxxx",
    className: "active-1",
};

const mobileEditCellNumberData = {
    activeProps: active2Data,
};

const group223Data = {
    className: "group-22-1",
};

const tabletEditEmailData = {
    group22Props: group223Data,
};

const active3Data = {
    inputBox: "EMAIL",
    inputHere: "xxxx@xxxxx.com",
};

const mobileEditEmailData = {
    activeProps: active3Data,
};

const buttonCloseCopy25Data = {
    className: "button-close-copy-2-3",
};

const tabNoteInfo3Data = {
    path1: "/static/img/path-1-2@1x.png",
    path10: "/static/img/path-10@1x.png",
    path3: "/static/img/path-3-1@1x.png",
    path4: "/static/img/path-4-1@1x.png",
    path8: "/static/img/path-8-3@1x.png",
};

const buttonSave4Data = {
    children: "Go Back",
    className: "button-save-3",
};

const addNewCardPopup1Data = {
    buttonSaveProps: buttonCloseCopy25Data,
    tabNoteInfoProps: tabNoteInfo3Data,
    buttonSaveProps2: buttonSave4Data,
};

const desktopTransferErrorData = {
    addNewCardPopupProps: addNewCardPopup1Data,
};

const search29Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "",
};

const searchbox6Data = {
    className: "searchbox-4",
    search2Props: search29Data,
};

const group25Data = {
    className: "group-2-2",
};

const icons9Data = {
    className: "icons-8",
};

const dashboard110Data = {
    dashboard1: "/static/img/vector-12@1x.png",
};

const x012Data = {
    dashboard1Props: dashboard110Data,
};

const thumbnail110Data = {
    className: "thumbnail-1-9",
};

const users6Data = {
    thumbnail1Props: thumbnail110Data,
};

const x032Data = {
    usersProps: users6Data,
};

const menusData = {
    dashboard1Props: x012Data,
    dashboard1Props2: x032Data,
};

const desktopMyTimiFiTData = {
    iconUser: "/static/img/icon-10@1x.png",
    overlapGroup3: "/static/img/left-menu-ad1-1@1x.png",
    overlapGroup1: "/static/img/path-38-1@1x.png",
    yourImageHere: "/static/img/your-image-here-1@1x.png",
    sleepangle: "/static/img/sleepangle-1@1x.png",
    overlapGroup: "/static/img/bg-3@1x.png",
    shopNow: "Shop Now",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    dashboard: "My TimiFIt",
    searchboxProps: searchbox6Data,
    group2Props: group25Data,
    iconsProps: icons9Data,
    menusProps: menusData,
};

const buttonCloseCopy26Data = {
    className: "button-close-copy-2-4",
};

const tabNoteInfo4Data = {
    path1: "/static/img/path-1-3@1x.png",
    path10: "/static/img/path-10-3@1x.png",
    path3: "/static/img/path-3-2@1x.png",
    path4: "/static/img/path-4-2@1x.png",
    path8: "/static/img/path-8-3@1x.png",
};

const buttonSave5Data = {
    children: "Go Back",
    className: "button-save-4",
};

const addNewCardPopup2Data = {
    buttonSaveProps: buttonCloseCopy26Data,
    tabNoteInfoProps: tabNoteInfo4Data,
    buttonSaveProps2: buttonSave5Data,
};

const tabletTransferErrorData = {
    addNewCardPopupProps: addNewCardPopup2Data,
};

const search210Data = {
    vector2: "/static/img/vector-122@1x.png",
    className: "search-2-9",
};

const searchbox224Data = {
    search2Props: search210Data,
};

const icons10Data = {
    className: "icons-9",
};

const header25Data = {
    src: "/static/img/group-2-5@1x.png",
    className: "header-3",
};

const dashboard111Data = {
    dashboard1: "/static/img/vector-105@1x.png",
    className: "dashboard-1-11",
};

const dashboard2Data = {
    dashboard1Props: dashboard111Data,
};

const thumbnail111Data = {
    className: "thumbnail-1-10",
};

const kanban2Data = {
    thumbnail1Props: thumbnail111Data,
};

const sIDEBAR2Data = {
    thumbnail1Props: header25Data,
    thumbnail1Props2: dashboard2Data,
    thumbnail1Props3: kanban2Data,
};

const tabletMyTimiFitData = {
    searchbox22Props: searchbox224Data,
    iconsProps: icons10Data,
    sIDEBAR2Props: sIDEBAR2Data,
};

const buttonCloseCopy27Data = {
    className: "button-close-copy-2-5",
};

const title3Data = {
    className: "title-12",
};

const tabNoteInfo23Data = {
    className: "tab-note-info-5",
};

const buttonSave6Data = {
    children: "Go Back",
    className: "button-save-5",
};

const mobileTransferErrorData = {
    havingTroubleEmai: "Having Trouble? Email support@nulifespan.com",
    somethingIsNotQui: <React.Fragment>Something is not quite right. Before you<br />can make a transfer/withdrawal, please<br />be sure you have completed the following<br />steps.</React.Fragment>,
    youHaveNotReach: <React.Fragment>• You have not reached the minimum of 50 <br />    points/dollars in your available rewards <br />    cash balance.</React.Fragment>,
    orAnErrorHasO: <React.Fragment>OR<br /><br />• An error has occurred connecting your <br />    payment card . Please visit the FAQ page<br />    to learn more.</React.Fragment>,
    buttonCloseCopy2Props: buttonCloseCopy27Data,
    titleProps: title3Data,
    titleProps2: tabNoteInfo23Data,
    buttonSaveProps: buttonSave6Data,
};

const search211Data = {
    vector2: "/static/img/vector-102@1x.png",
    className: "",
};

const searchbox7Data = {
    search2Props: search211Data,
};

const dashboard112Data = {
    dashboard1: "/static/img/vector-12@1x.png",
};

const x013Data = {
    dashboard1Props: dashboard112Data,
};

const thumbnail112Data = {
    className: "",
};

const users7Data = {
    thumbnail1Props: thumbnail112Data,
};

const dEFAULTSTATE5Data = {
    defaultState: "/static/img/path-39@1x.png",
    projectsCompleted: "PURCHASES",
};

const dEFAULTSTATE6Data = {
    projectsCompleted: "/static/img/rectangle-5@1x.png",
    defaultState: "COMMISSIONS",
    className: "tabbed-reports-1-item",
};

const dEFAULTSTATE7Data = {
    projectsCompleted: "/static/img/rectangle-5@1x.png",
    defaultState: "PAYMENTS",
    className: "tabbed-reports-1-item",
};

const dEFAULTSTATE8Data = {
    projectsCompleted: "/static/img/rectangle-5@1x.png",
    defaultState: "TEAM ORDERS",
    className: "tabbed-reports-1-item",
};

const tabbedReports2Data = {
    dEFAULTSTATE1Props: dEFAULTSTATE5Data,
    dEFAULTSTATE2Props: dEFAULTSTATE6Data,
    dEFAULTSTATE3Props: dEFAULTSTATE7Data,
    dEFAULTSTATE4Props: dEFAULTSTATE8Data,
};

const dueDate4Data = {
    children: "New Affiliate",
};

const dueDate5Data = {
    children: "Purchased Product",
    className: "due-date-6",
};

const dueDate6Data = {
    children: "New Distributer",
    className: "due-date-7",
};

const rightbar3Data = {
    dueDate1Props: dueDate4Data,
    dueDate2Props: dueDate5Data,
    dueDate3Props: dueDate6Data,
};

const desktopDashboardData = {
    icon1: "/static/img/icon-10@1x.png",
    proposal: "/static/img/layer-2-10@1x.png",
    projects: "My Connections",
    contacts: "My Sales",
    myTasks1: "My Team",
    vector2: "/static/img/vector-107@1x.png",
    myTasks2: "My TimiFit",
    overlapGroup21: "/static/img/path-38-1@1x.png",
    yourImageHere: "/static/img/your-image-here-1@1x.png",
    sleepangle: "/static/img/sleepangle-1@1x.png",
    overlapGroup: "/static/img/bg-3@1x.png",
    shopNow: "Shop Now",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    dashboard: "Focus Zone Portal",
    welcome: "Hello ${first_name}, welcome back!",
    yourRewardsCash: "Your Rewards Cash",
    price: "$40.00",
    name: <React.Fragment>Cash out rewards to dollars when you<br />reach 50  - or spend on products now.</React.Fragment>,
    icon2: "/static/img/icon-1@1x.png",
    withdraw: "Withdraw",
    overlapGroup3: "/static/img/bg-1@1x.png",
    iconConect: "/static/img/icon-conect@1x.png",
    shop: "Shop",
    overlapGroup1: "/static/img/path-1-1@1x.png",
    yourShareLink: "Your Share Link",
    sampleNulifespanCom: "sample.nulifespan.com",
    shareYourLinkWith: <React.Fragment>Share your link with your friends<br />and family to start earning!</React.Fragment>,
    iconFile: "/static/img/icon-file@1x.png",
    copy: "Copy",
    overlapGroup22: "/static/img/background@1x.png",
    projectsCompleted: "Total Distributers",
    spanText1: "+15%",
    spanText2: " than last month",
    chart2: "/static/img/chart-2@1x.png",
    number1: "38",
    overlapGroup32: "/static/img/background-1@1x.png",
    projectsInProgress: "Downline Orders",
    spanText3: "+15%",
    spanText4: " than last month",
    number2: "38",
    overlapGroup4: "/static/img/background-2@1x.png",
    upcomingProjects: "Page Views",
    bg: "/static/img/bg-2@1x.png",
    circleChart: "/static/img/circle-chart@1x.png",
    percent: "56%",
    spanText5: "+15%",
    spanText6: " than last month",
    number3: "38",
    searchboxProps: searchbox7Data,
    x01Props: x013Data,
    usersProps: users7Data,
    tabbedReportsProps: tabbedReports2Data,
    rightbarProps: rightbar3Data,
};

const search212Data = {
    vector2: "/static/img/vector-102@1x.png",
    className: "search-2-11",
};

const searchbox23Data = {
    search2Props: search212Data,
};

const icons12Data = {
    className: "icons-11",
};

const header26Data = {
    src: "/static/img/group-2-1@1x.png",
};

const dashboard113Data = {
    dashboard1: "/static/img/vector-105@1x.png",
    className: "dashboard-1-13",
};

const dashboard3Data = {
    dashboard1Props: dashboard113Data,
};

const thumbnail113Data = {
    className: "thumbnail-1-12",
};

const dueDate23Data = {
    children: "New Affiliate",
};

const dueDate37Data = {
    className: "due-date-17",
};

const rightbar22Data = {
    dueDate2Props: dueDate23Data,
    dueDate3Props: dueDate37Data,
};

const tabletDashboardData = {
    icon1: "/static/img/icon-10@1x.png",
    profile: "/static/img/arrow-10@1x.png",
    menu: "MENU",
    proposal: "/static/img/layer-2-10@1x.png",
    users: "/static/img/vector-107@1x.png",
    dashboard: "Focus Zone Portal",
    welcome: "Hello ${first_name}, welcome back!",
    icon2: "/static/img/icon-15@1x.png",
    withdraw: "Withdraw",
    overlapGroup1: "/static/img/bg-7@1x.png",
    iconConect: "/static/img/icon-conect-1@1x.png",
    shop: "Shop",
    yourShareLink: "Your Share Link",
    sampleNulifespanCom: "sample.nulifespan.com}",
    shareYourLinkWith: <React.Fragment>Share your link with your friends<br />and family to start earning!</React.Fragment>,
    iconFile: "/static/img/icon-file-1@1x.png",
    copy: "Copy",
    overlapGroup2: "/static/img/background-6@1x.png",
    spanText1: "+15%",
    spanText2: <React.Fragment> <br /></React.Fragment>,
    spanText3: "than last month",
    projectsCompleted1: "Total Distributers",
    number: "4",
    chart2: "/static/img/chart-2-1@1x.png",
    overlapGroup22: "/static/img/background-7@1x.png",
    spanText4: "+15%",
    spanText5: <React.Fragment> <br /></React.Fragment>,
    spanText6: "than last month",
    projectsInProgress: "Downline Orders",
    x182: "11",
    overlapGroup3: "/static/img/background-8@1x.png",
    spanText7: "+15%",
    spanText8: <React.Fragment> <br /></React.Fragment>,
    spanText9: "than last month",
    upcomingProjects: "Page Views",
    x1125: "269",
    chart: "/static/img/bg-8@1x.png",
    overlapGroup4: "/static/img/circle-chart-1@1x.png",
    percent: "56%",
    overlapGroup12: "/static/img/path-38-5@1x.png",
    yourImageHere: "/static/img/your-image-here-5@1x.png",
    sleepangle: "/static/img/sleepangle-5@1x.png",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    path39: "/static/img/path-39-1@1x.png",
    projectsCompleted2: "PURCHASES",
    rectangle5: "/static/img/rectangle-5-1@1x.png",
    projectsCompleted3: "COMMISSIONS",
    rectangle6: "/static/img/rectangle-5-1@1x.png",
    projectsCompleted4: "PAYMENTS",
    rectangle7: "/static/img/rectangle-5-1@1x.png",
    projectsCompleted5: "TEAM ORDERS",
    searchbox2Props: searchbox23Data,
    iconsProps: icons12Data,
    header2Props: header26Data,
    dashboardProps: dashboard3Data,
    thumbnail1Props: thumbnail113Data,
    rightbar2Props: rightbar22Data,
};

const touchBoard4Data = {
    rewardsCash: "REWARDS CASH",
    x0: "$10",
};

const touchBoard5Data = {
    rewardsCash: "THIS MONTH",
    x0: "$82",
    className: "touch-board-1-1",
};

const touchBoard6Data = {
    rewardsCash: "SHARE LINK",
    x0: "COPY",
    className: "touch-board-1",
};

const x3ColumnCTACards2Data = {
    touchBoard1Props: touchBoard4Data,
    touchBoard2Props: touchBoard5Data,
    touchBoard3Props: touchBoard6Data,
};

const dEFAULTSTATE25Data = {
    path39: "/static/img/path-39-2@1x.png",
    projectsCompleted: "PURCHASES",
};

const dEFAULTSTATE26Data = {
    path39: "/static/img/rectangle-5-2@1x.png",
    projectsCompleted: "COMMISSIONS",
    className: "report-2-1",
};

const dEFAULTSTATE27Data = {
    path39: "/static/img/rectangle-5-2@1x.png",
    projectsCompleted: "TEAM ORDERS",
    className: "group-17-2",
};

const tabbedContentMobile2Data = {
    dEFAULTSTATE21Props: dEFAULTSTATE25Data,
    dEFAULTSTATE22Props: dEFAULTSTATE26Data,
    dEFAULTSTATE23Props: dEFAULTSTATE27Data,
};

const mobileDashboardData = {
    logo: "/static/img/welcometonls-black2-1@1x.png",
    dashboard: "Focus Zone Portal",
    welcome: "Hello ${first_name}, welcome back!",
    brandPartnerPresidentClub1: "BRAND PARTNER - PRESIDENT CLUB 1",
    overlapGroup1: "/static/img/background-11@1x.png",
    spanText1: <React.Fragment>+15% <br /></React.Fragment>,
    spanText2: "than last month",
    projectsCompleted: "Total Distributers",
    x4115: "32",
    chart2: "/static/img/chart-2-2@1x.png",
    groupContainer: "/static/img/background-12@1x.png",
    projectsInProgress: "Downline Orders",
    x182: "5",
    spanText3: <React.Fragment>+15% <br /></React.Fragment>,
    spanText4: "than last month",
    overlapGroup4: "/static/img/background-13@1x.png",
    upcomingProjects: "Page Views",
    x1125: "321",
    chart: "/static/img/bg-10@1x.png",
    overlapGroup2: "/static/img/circle-chart-2@1x.png",
    percent: "56%",
    spanText5: <React.Fragment>+15% <br /></React.Fragment>,
    spanText6: "than last month",
    focusuMobile: "/static/img/focusu-mobile@1x.png",
    merchToolsStoreMobile2X: "/static/img/merch-tools-store-mobile-2x@1x.png",
    yourImageHere: "/static/img/your-image-here-6@1x.png",
    nulifespan_AllProductsOnStands1000W: "/static/img/nulifespan-all-products-on-stands1000w2@1x.png",
    onSale: "On Sale!",
    ongoing: "See what’s new …",
    x3ColumnCTACardsProps: x3ColumnCTACards2Data,
    tabbedContentMobileProps: tabbedContentMobile2Data,
};

