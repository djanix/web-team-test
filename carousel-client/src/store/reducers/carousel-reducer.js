const defaultState = {
  images: [
    {
      key: 0,
      url: 'https://brava.stingray.com/sites/brava/files/2018-09/Webclip-Verbier.mp4',
      title: 'Verbier',
      schedule: 'Sunday',
      link: 'https://google.com'
    },
    {
      key: 1,
      url: 'https://brava.stingray.com/sites/brava/files/2018-09/Webclip-Documentaries.mp4',
      title: 'Documentaries',
      schedule: 'Monday - Tuesday',
      link: 'https://google.com'
    },
    {
      key: 2,
      url: 'https://brava.stingray.com/sites/brava/files/2018-09/Webclip-Baroktober.mp4',
      title: 'Baroktober',
      schedule: 'Wednesday - Thursday',
      link: 'https://google.com'
    },
    {
      key: 3,
      url: 'https://brava.stingray.com/sites/brava/files/2018-08/OperaPremiere-Webclip.mp4',
      title: 'Webclip',
      schedule: 'Friday - Saturday',
      link: 'https://google.com'
    }
  ],
  currentIndex: 0
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_IMAGE': {
      return {
        ...state,
        currentIndex: action.currentIndex
      };
    }

    default:
      return state;
  }
}