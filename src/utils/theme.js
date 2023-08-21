const media = {
  xs: '320px',
  s: '375px',
  m: '768px',
  l: '1440px',
};

export const lightColors = {
  blackText: '#111111',
  blue: '#3e85f3',
  darkBlue: '#2B78EF',
  lightBlue1: '#dcebf7',
  lightBlue2: '#E3F3FF',
  lightBlue3: '#E5EDFA',
  lightBlueActive: '#cae8ff',
  lightGrey: '#F8F8F8',
  grey: '#343434',
  grey2: '#F6F6F6',
  darkGrey: '#353647',
  white: '#ffffff',
  greyText: '#616161',
  greySub: '#84828a',
  greyCard: '#f7f6f9',
  greyElements: '#efefef',
  blueStatus: '#ceeefd',
  yellowStatus: '#fcf0d4',
  pinkStatus: '#ffd2dd',
  orangePriority: '#f3b249',
  redPriority: '#ea3d65',
  bluePriority: '#72c2f8',
  scrollBar: '#e7e5e5',
  scrollBarBG: '#f2f2f2',
  hoverIcon: '#343434',
  colorIcon: '#DCE3E5',
  lightGreyRGBA: 'rgba(52, 52, 52, 0.8)',
  greyRGBA: 'rgba(52, 52, 52, 0.5)',
  blueRGBA: 'rgba(62, 133, 243, 0.2)',
  borderRGBA: 'rgba(220, 227, 229, 0.8)',
  redPriorityRGBA: 'rgba(234, 61, 101, 0.2)',
  lightRGBA: 'rgba(17, 17, 17, 0.15)',
  semiDarkRGBA: 'rgba(17, 17, 17, 0.70)',
  darkRGBA: 'rgba(17, 17, 17, 0.90)',
  shadowRGBA: 'rgba(136, 165, 191, 0.48)',
};

const darkColors = {
  blackText: '#111111',
  blue: '#3e85f3',
  darkBlue: '#2B78EF',
  darkGrey: '#353647',
  greyElements: '#efefef',
  blueStatus: '#ceeefd',
  yellowStatus: '#fcf0d4',
  pinkStatus: '#ffd2dd',
  orangePriority: '#f3b249',
  redPriority: '#ea3d65',
  bluePriority: '#72c2f8',
  black: '#13151a',
  blackBG: '#21222c',
  white: '#ffffff',
  grey: '#FAFAFA',
  lightBlue2: '#e3f3ff',
  darkBG: '#171820',
  hoverIcon: '#ffffff',
  colorIcon: 'red',
  darkScrollBarBG: '#2d3037',
  whiteRGBA: 'rgba(255, 255, 255, 0.15)',
  greyRGBA: 'rgba(250, 250, 250, 0.3)',
  blueRGBA: 'rgba(227, 243, 255, 0.15)',
  redPriorityRGBA: 'rgba(234, 61, 101, 0.2)',
  shadowRGBA: 'rgba(136, 165, 191, 0.30)',
  transparent: 'transparent',
};

// props => props.theme.colors.MainLayout.bg

export const lightTheme = {
  colors: {
    homePage: {
      bg: lightColors.white,
      titleText: lightColors.blue,
      lightBg: lightColors.lightBlue1,
      darkTitle: darkColors.darkBG,
      imageBg: lightColors.lightBlue2,
      darkText: lightColors.darkRGBA,
      hoverColor: lightColors.bluePriority,
    },
    mainLayout: {
      bg: lightColors.greyCard,
    },
    sideBar: {
      mainBg: lightColors.white,
      accentBg: lightColors.lightBlue2,
      logoText: lightColors.blue,
      titleText: lightColors.greyRGBA,
      mainText: lightColors.greyRGBA,
      accentText: lightColors.blue,
    },
    header: {
      titleText: lightColors.blackText,
      userText: lightColors.grey,
      accent: lightColors.blue,
      avatarBg: lightColors.darkBG,
      avatarText: lightColors.grey,
    },
    accountPage: {
      mainBg: lightColors.white,
      mainText: lightColors.blackText,
      secondText: lightColors.grey,
      accent: lightColors.blue,
      icon: lightColors.white,
      avatarBg: lightColors.lightGrey,
      border: lightColors.lightRGBA,
    },
    calendarPage: {
      mainBg: lightColors.white,
      periodTogglerText: lightColors.blue,
      periodTogglerActiveText: lightColors.blue,
      periodTogglerBg: lightColors.lightBlue2,
      periodTogglerActiveBg: lightColors.blueRGBA,
      periodPaginatorDisabled: lightColors.greyRGBA,
      todayText: lightColors.white,
      todayBg: lightColors.blue,
      border: lightColors.borderRGBA,
      iconFocus: lightColors.grey,

      month: {
        mainText: lightColors.grey,
        weekendText: lightColors.blue,
        lowTaskBg: lightColors.blueStatus,
        lowTaskText: lightColors.blue,
        mediumTaskBg: lightColors.yellowStatus,
        mediumTaskText: lightColors.orangePriority,
        hightTaskBg: lightColors.pinkStatus,
        hightTaskText: lightColors.redPriority,
      },
      day: {
        taskCardTitle: lightColors.blackText,
        dayName: lightColors.grey,
        taskLabelText: lightColors.greyCard,
        lowTaskBg: lightColors.bluePriority,
        mediumTaskBg: lightColors.orangePriority,
        hightTaskBg: lightColors.redPriority,
        activeIcon: lightColors.blue,
        addTaskBtnText: lightColors.black,
        addTaskBtnBg: lightColors.lightBlue2,
        addTaskBtnBorder: lightColors.blue,
        darkText: lightColors.darkRGBA,
      },
    },
    statisticsPage: {
      mainBg: lightColors.white,
      mainText: lightColors.grey,
      todayText: lightColors.white,
      todayBg: lightColors.blue,
      todayBorder: lightColors.borderRGBA,
      dayIcon: lightColors.pinkStatus,
      monthIcon: lightColors.blue,
      statisticsBorder: lightColors.lightBlue2,
      hoverIcon: lightColors.hoverIcon,
      colorIcon: lightColors.colorIcon,
    },
    notFoundPage: {
      titeText: lightColors.blue,
      littleText: lightColors.blackText,
      bg: lightColors.greyCard,
      darkText: lightColors.semiDarkRGBA,
      buttonColor: lightColors.white,
      hoverBg: lightColors.lightBlue1,
    },
    button: {
      mainBg: lightColors.blue,
      hoverBg: lightColors.darkBlue,
      text: lightColors.white,
      textDisabled: lightColors.darkGrey,
      bgDisabled: lightColors.greyElements,
      shadow: lightColors.shadowRGBA,
    },
    modal: {
      bg: lightColors.white,
      labelText: lightColors.lightGreyRGBA,
      textAreaBg: lightColors.grey2,
      textAreaBorder: lightColors.grey2,
      mainText: lightColors.grey,
      rewiev: {
        pencilIcon: lightColors.blue,
        pencilIconBg: lightColors.lightBlue2,
        trashIcon: lightColors.redPriority,
        trashIconBg: lightColors.redPriorityRGBA,
        pencilIconHover: lightColors.white,
        pencilIconBgHover: lightColors.blue,
        trashIconHover: lightColors.white,
        trashIconBgHover: lightColors.redPriority,
        cancelBtnBg: lightColors.lightBlue3,
      },
      task: {
        taskBG: lightColors.white,
        taskInput: lightColors.grey2,
        taskInputText: lightColors.grey,
        taskFormBorder: lightColors.borderRGBA,
        cancelBtnBg: lightColors.greyElements,
        cancelBtnText: lightColors.darkRGBA,
        closeBtn: lightColors.blackText,
        saveBtnText: lightColors.white,
        lowIcon: lightColors.bluePriority,
        mediumIcon: lightColors.orangePriority,
        hightIcon: lightColors.redPriority,
        popUpBorder: lightColors.white,
      },
    },
  },
  media,
};

export const darkTheme = {
  colors: {
    homePage: {
      bg: lightColors.white,
      titleText: lightColors.blue,
      lightBg: lightColors.lightBlue1,
      darkTitle: darkColors.darkBG,
      imageBg: lightColors.lightBlue2,
      darkText: lightColors.darkRGBA,
      hoverColor: lightColors.bluePriority,
    },
    mainLayout: {
      bg: darkColors.darkBG,
    },
    sideBar: {
      mainBg: darkColors.black,
      accentBg: darkColors.blue,
      logoText: darkColors.lightBlue2,
      titleText: darkColors.greyRGBA,
      mainText: darkColors.white,
      accentText: darkColors.white,
    },
    header: {
      titleText: darkColors.white,
      userText: darkColors.white,
      accent: darkColors.blue,
      avatarText: darkColors.greyRGBA,
      avatarBg: darkColors.darkBG,
    },
    accountPage: {
      mainBg: darkColors.blackBG,
      mainText: darkColors.white,
      secondText: darkColors.greyRGBA,
      accent: darkColors.blue,
      icon: darkColors.white,
      avatarBg: darkColors.darkBG,
      border: darkColors.greyRGBA,
    },
    calendarPage: {
      mainBg: darkColors.blackBG,
      periodTogglerText: darkColors.blue,
      periodTogglerActiveText: darkColors.white,
      periodTogglerBg: darkColors.blackBG,
      periodTogglerActiveBg: darkColors.blue,
      periodPaginatorDisabled: darkColors.whiteRGBA,
      todayText: darkColors.white,
      todayBg: darkColors.blue,
      border: darkColors.whiteRGBA,
      iconFocus: darkColors.white,

      month: {
        mainText: darkColors.white,
        weekendText: darkColors.blue,
        lowTaskBg: darkColors.blueStatus,
        lowTaskText: darkColors.blue,
        mediumTaskBg: darkColors.yellowStatus,
        mediumTaskText: darkColors.orangePriority,
        hightTaskBg: darkColors.pinkStatus,
        hightTaskText: darkColors.redPriority,
      },
      day: {
        taskCardTitle: darkColors.white,
        dayName: darkColors.greyRGBA,
        taskLabelText: darkColors.darkBG,
        lowTaskBg: darkColors.bluePriority,
        mediumTaskBg: darkColors.orangePriority,
        hightTaskBg: darkColors.redPriority,
        activeIcon: darkColors.blue,
        addTaskBtnText: darkColors.white,
        addTaskBtnBg: darkColors.blue,
        addTaskBtnBorder: darkColors.blue,
        darkText: darkColors.lightRGBA,
      },
    },
    statisticsPage: {
      mainBg: darkColors.blackBG,
      mainText: lightColors.white,
      todayText: darkColors.white,
      todayBg: darkColors.blue,
      todayBorder: darkColors.whiteRGBA,
      dayIcon: darkColors.pinkStatus,
      monthIcon: darkColors.blue,
      statisticsBorder: darkColors.blueRGBA,
    },
    notFoundPage: {
      titeText: darkColors.blue,
      littleText: darkColors.white,
      bg: darkColors.darkBG,
    },
    button: {
      mainBg: darkColors.blue,
      hoverBg: darkColors.darkBlue,
      text: darkColors.white,
      textDisabled: darkColors.white,
      bgDisabled: darkColors.darkBG,
      shadow: darkColors.shadowRGBA,
    },
    modal: {
      bg: darkColors.darkBG,
      labelText: darkColors.greyRGBA,
      textAreaBg: darkColors.darkBG,
      textAreaBorder: darkColors.whiteRGBA,
      mainText: darkColors.white,
      rewiev: {
        pencilIcon: darkColors.blue,
        pencilIconBg: darkColors.darkGrey,
        trashIcon: darkColors.redPriority,
        trashIconBg: darkColors.redPriorityRGBA,
        pencilIconHover: darkColors.white,
        pencilIconBgHover: darkColors.blue,
        trashIconHover: darkColors.white,
        trashIconBgHover: darkColors.redPriority,
        cancelBtnBg: darkColors.blackBG,
      },
      task: {
        taskBG: darkColors.darkBG,
        taskInput: darkColors.darkBG,
        taskInputText: darkColors.white,
        taskFormBorder: darkColors.transparent,
        cancelBtnBg: darkColors.greyElements,
        cancelBtnText: darkColors.blackText,
        closeBtn: darkColors.white,
        saveBtnText: darkColors.white,
        lowIcon: darkColors.bluePriority,
        mediumIcon: darkColors.orangePriority,
        hightIcon: darkColors.redPriority,
        popUpBorder: darkColors.whiteRGBA,
      },
    },
  },
  media,
};
